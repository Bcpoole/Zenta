import {computedFrom} from 'aurelia-framework';
import {inject} from 'aurelia-framework';
import {ApplicationState} from './applicationState';

@inject(ApplicationState)
export class Welcome{
  heading = 'Zenta - A Pathfinder Utility App!';

  get loadedCharacter() {
    return this._loadedCharacter;
  }
  set loadedCharacter(val) {
    this._loadedCharacter = val;
    this.appState.loadedCharacter = val;
  }

  constructor(appState) {
    if (window.File && window.FileList && window.FileReader) {
    }
    else {
      alert("Your browser does not support File API. You will be unable to load your character.");
    }

    this.appState = appState;
    this.loadedCharacter = this.appState.loadedCharacter;
  }

  fileSelected() {
      let reader = new FileReader();
      let file = this.$event.target.files[0];
      reader.readAsText(file);
      reader.onload = () => {
        let myCharacter = reader.result;

        try {
          this.loadedCharacter = JSON.parse(myCharacter);
        } catch(e) {
          this.loadedCharacter = null;
          alert(file.name + ' is not valid json');
        }
      };
  }
}
