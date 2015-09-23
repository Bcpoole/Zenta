import {inject} from 'aurelia-framework';
import {ApplicationState} from '../applicationState';

@inject(ApplicationState)
export class feats {
  canActivate(params, routeConfig, navigationInstruction) {
    return (!!this.loadedCharacter);
  }

  constructor(appState) {
      this.appState = appState;

      this.loadedCharacter = this.appState.loadedCharacter;

      this.feats = this.loadedCharacter.feats.selected;
      this.flaws = this.loadedCharacter.feats.flaws;

      if (!this.loadedCharacter.feats || this.loadedCharacter.feats.selected.length == 0) {
        this.err = "Loaded character doesn't have any Feats.";
      }
  }
}