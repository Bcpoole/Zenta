import {inject} from 'aurelia-framework';
import {ApplicationState} from '../applicationState';

@inject(ApplicationState)
export class traits {
  canActivate(params, routeConfig, navigationInstruction) {
    return (!!this.loadedCharacter);
  }

  constructor(appState) {
    this.appState = appState;

    this.loadedCharacter = this.appState.loadedCharacter;
    this.traits = this.loadedCharacter.traits.selected;
    this.drawbacks = this.loadedCharacter.traits.drawbacks;
    this.racialTraits = this.loadedCharacter.traits.racial;
  }
}
