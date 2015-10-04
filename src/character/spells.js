import {inject} from 'aurelia-framework';
import {ApplicationState} from '../applicationState';

@inject(ApplicationState)
export class spells {
  canActivate(params, routeConfig, navigationInstruction) {
    return (!!this.loadedCharacter);
  }

  constructor(appState) {
    this.appState = appState;

    this.loadedCharacter = this.appState.loadedCharacter;
    this.spells = this.loadedCharacter.spells;

    this.assignSpellLevels();
  }

  assignSpellLevels() {
    this.spells0 = [];
    this.spells1 = [];
    this.spells2 = [];
    this.spells3 = [];
    this.spells4 = [];
    this.spells5 = [];
    this.spells6 = [];
    this.spells7 = [];
    this.spells8 = [];
    this.spells9 = [];

    for (let i in this.spells) {
      switch(this.spells[i].level) {
        case 0:
          this.spells0.push(this.spells[i]);
          break;
        case 1:
          this.spells1.push(this.spells[i]);
          break;
        case 2:
          this.spells2.push(this.spells[i]);
          break;
        case 3:
          this.spells3.push(this.spells[i]);
          break;
        case 4:
          this.spells4.push(this.spells[i]);
          break;
        case 5:
          this.spells5.push(this.spells[i]);
          break;
        case 6:
          this.spells6.push(this.spells[i]);
          break;
        case 7:
          this.spells7.push(this.spells[i]);
          break;
        case 8:
          this.spells8.push(this.spells[i]);
          break;
        case 9:
          this.spells9.push(this.spells[i]);
          break;
      }
    }
  }

  addSpell(level) {
    let spell = {
      "name": "",
      "school": "",
      "level": level,
      "castingTime": "",
      "components": "",
      "range": "",
      "area": "",
      "duration": "",
      "savingThrow": "",
      "spellResistance": false,
      "description": ""
    }
    this.dialogService.open({ viewModel: AddSpell, model: item }).then(response => {
      if (!response.wasCancelled) {
        this.loadedCharacter.spells.push(response);
        assignSpellLevels();
      }
    });
  }
}
