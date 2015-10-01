import {inject} from 'aurelia-framework';
import {ApplicationState} from '../applicationState';

@inject(ApplicationState)
export class stats {
  canActivate(params, routeConfig, navigationInstruction) {
    return (!!this.loadedCharacter);
  }

  get scores() {
    for (let i in this._scores) {
      if (this._scores[i] != null && this.abilityScores[this._scores[i].name] != this._scores[i].score) {
        this.abilityScores[this._scores[i].name] = this._scores[i].score;
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
      this.scores.push({
        name: key,
        score: this.abilityScores[key]
      })
    }
  }
}
