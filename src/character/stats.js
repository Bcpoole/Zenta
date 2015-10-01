import {inject} from 'aurelia-framework';
import {ApplicationState} from '../applicationState';

@inject(ApplicationState)
export class stats {
  canActivate(params, routeConfig, navigationInstruction) {
    return (!!this.loadedCharacter);
  }

  get scores() {
    for (let i in this._scores) {
      let score = this._scores[i];
      if (this.abilityScores[score.name] != score.score) {
        this.abilityScores[score.name] = score.score;
        score.mod = this.getMod(score.score);
      }
    }
    return this._scores;
  }
  set scores(val) {
    this._scores = val;
  }

  constructor(appState) {
    this.appState = appState;

    this.loadedCharacter = this.appState.loadedCharacter;

    this.abilityScores = this.loadedCharacter.abilityScores;
    this.offenseStats = this.loadedCharacter.stats.offense;
    this.defenseStats = this.loadedCharacter.stats.defense;

    this.scores = [];
    let keys = Object.keys(this.abilityScores);
    for (let key of keys) {
      let score = this.abilityScores[key];
      this.scores.push({
        name: key,
        score: score,
        mod: this.getMod(score)
      })
    }
  }

  getMod(score) {
    return Math.floor((score - 10) / 2);
  }
}
