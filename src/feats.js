import {inject} from 'aurelia-framework';
import {ApplicationState} from './applicationState';

@inject(ApplicationState)
export class feats {
  constructor(appState) {
      this.appState = appState;

      this.loadedCharacter = this.appState.loadedCharacter;

      if (!this.loadedCharacter) {
        this.err = 'No character loaded!';
      } else if (!this.loadedCharacter.feats || this.loadedCharacter.feats.selected.length == 0) {
        this.err = "Loaded character doesn't have any Feats."
      }
  }
}
