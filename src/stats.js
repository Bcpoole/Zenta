import {inject} from 'aurelia-framework';
import {ApplicationState} from './applicationState';

@inject(ApplicationState)
export class stats {
  canActivate(params, routeConfig, navigationInstruction) {
    return (!!this.loadedCharacter);
  }

  constructor(appState) {
    this.appState = appState;

    this.loadedCharacter = this.appState.loadedCharacter;

    this.abilityScores = this.loadedCharacter.abilityScores;
    this.offenseStats = this.loadedCharacter.stats.offense;
    this.defenseStats = this.loadedCharacter.stats.defense;
  }
}
