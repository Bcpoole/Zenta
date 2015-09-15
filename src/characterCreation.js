import {inject} from 'aurelia-framework';
import {ApplicationState} from './applicationState';

@inject(ApplicationState)
export class characterCreation {
  constructor(appState) {
    this.appState = appState;
  }

  createCharacter() {
  	let character = this.generateCharacter();

    let element = document.createElement('a');
    element.setAttribute('href', 'data:text/plain;charset=utf-8,' + encodeURIComponent(JSON.stringify(character)));
    element.setAttribute('download', this.characterName + ".json");

    element.style.display = 'none';
    document.body.appendChild(element);

    element.click();

    document.body.removeChild(element);
  }
  
  generateCharacter() {
		let reader = new FileReader();
		let file =" characterTemplate.json";
		reader.readAsText(file);
		reader.onload = () => {
			let result = reader.result;
			result.name = this.characterName;
			return result;
		}
	}
}
