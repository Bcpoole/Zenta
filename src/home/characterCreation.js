import {computedFrom, inject} from 'aurelia-framework';
import {ApplicationState} from '../applicationState';
import {DialogService, Prompt} from 'aurelia-dialog';
import {Validation} from 'aurelia-validation';

@inject(ApplicationState, DialogService, Validation)
export class characterCreation {
  constructor(appState, dialogService, validation) {
    this.characterName = '';

    this.appState = appState;
    this.dialogService = dialogService;

    this.validation = validation.on(this)
      .ensure('characterName')
      .isNotEmpty()
      .hasMinLength(1);

    this.generateScores();

    let defaultBudget = 15;
    this.remainingBudget= defaultBudget;
    this.setTotalBudget(defaultBudget); //Do standard by default

    this.hasFocus = true;
  }

  createCharacter() {
    this.validation.validate()
    .then( () => {
      this.characterName = this.characterName.trim();
      this.generateCharacter();
    }, (err) => {
      let msg = 'Could not create character!';
      let keys = Object.keys(err.properties);
      for (let key of keys) {
        msg += '\n' + key + " " + err.properties[key].message;
      }
      alert(msg);
    }
    );
  }
  
  generateCharacter() {
    var characterName = this.characterName;
    var strength = this.getScore('Strength');
    var dexterity = this.getScore('Dexterity');
    var constitution = this.getScore('Constitution');
    var intelligence = this.getScore('Intelligence');
    var wisdom = this.getScore('Wisdom');
    var charisma = this.getScore('Charisma');

    let reader = new FileReader();

    let client = new XMLHttpRequest();
    client.open('GET', '/characterTemplate.json');
    client.send();
    client.onreadystatechange = function() {
      if (client.readyState == 4) {
        let character = JSON.parse(client.response);
        character.name = characterName;

        character.abilityScores.strength = strength;
        character.abilityScores.dexterity = dexterity;
        character.abilityScores.constitution = constitution;
        character.abilityScores.intelligence = intelligence;
        character.abilityScores.wisdom = wisdom;
        character.abilityScores.charisma = charisma;

        let element = document.createElement('a');
        element.setAttribute('href', 'data:text/plain;charset=utf-8,' + encodeURIComponent(JSON.stringify(character)));
        element.setAttribute('download', characterName + ".json");

        element.style.display = 'none';
        document.body.appendChild(element);

        element.click();

        document.body.removeChild(element);
      }
    }
  }

  getScore(name) {
    var score = this.scores.filter(function (score) {
        return score.name === name;
    })[0];
    return score.points;
  }

  generateScores() {
    this.scores = [];
    let scoreNames = ['Strength', 'Dexterity', 'Constitution', 'Intelligence', 'Wisdom', 'Charisma'];

    for (let name of scoreNames) {
      this.scores.push(
        {
          name: name,
          points: 10,
          mod: 0,
          cost: 0
        }
      )
    }
  }

  setTotalBudget(totalBudget) {
    this.totalBudget = totalBudget;

    this.updateBudget();
  }

  setCustomBudget() {
    this.dialogService.open({ viewModel: Prompt, model: 'Insert Total Points'}).then((result) => {
      if(/\d+/.test(result) && Number.isInteger(Number(result))) {
        this.setTotalBudget(result.replace(/\s+/g, ''));
      } else {
        alert('"' + result + '"' + ' is not invalid input!');
      }
    });
  }

  determineMod(points) {
    return Math.floor((points - 10) / 2);
  }

  determineCost(points) {
    let values = [-4, -2, -1, 0, 1, 2, 3, 5, 7, 10, 13, 17];
    return values[points-10+3];
  }

  updateScores() {
    for (let score of this.scores) {
      score.mod = this.determineMod(score.points);
      score.cost = this.determineCost(score.points);
    }

    this.updateBudget();
  }

  updateBudget() {
    this.remainingBudget = this.totalBudget;
    for (let score of this.scores) {
      this.remainingBudget -= score.cost;
    }
  }
}
