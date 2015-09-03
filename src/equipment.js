import {inject} from 'aurelia-framework';
import {ApplicationState} from './applicationState';

@inject(ApplicationState)
export class equipment {
  canActivate(params, routeConfig, navigationInstruction) {
    return (!!this.loadedCharacter);
  }

  constructor(appState) {
      this.appState = appState;

      this.loadedCharacter = this.appState.loadedCharacter;
      this.armor = this.loadedCharacter.armor;
  }
}
