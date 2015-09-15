import {inject} from 'aurelia-framework';
import {ApplicationState} from './applicationState';

@inject(ApplicationState)
export class characterCreation {
  constructor(appState) {
    this.appState = appState;
  }

  createCharacter() {
  	let character = {
  		name: this.characterName
  	};

    let element = document.createElement('a');
    element.setAttribute('href', 'data:text/plain;charset=utf-8,' + encodeURIComponent(JSON.stringify(character)));
    element.setAttribute('download', this.characterName + ".json");

    element.style.display = 'none';
    document.body.appendChild(element);

    element.click();

    document.body.removeChild(element);
  }
}
