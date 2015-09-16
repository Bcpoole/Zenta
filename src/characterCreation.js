import {inject} from 'aurelia-framework';
import {ApplicationState} from './applicationState';

@inject(ApplicationState)
export class characterCreation {
  constructor(appState) {
    this.appState = appState;
  }

  createCharacter() {

  	if (this.characterName == null || this.characterName.trim().length == 0) {
  		alert("Must input a name");
  		return;
  	}

  	this.characterName = this.characterName.trim();

  	this.generateCharacter();
  }
  
  generateCharacter() {
  	var characterName = this.characterName;
		let reader = new FileReader();

		let client = new XMLHttpRequest();
    client.open('GET', '/characterTemplate.json');
		client.send();
    client.onreadystatechange = function() {
    	if (client.readyState == 4) {
				let character = JSON.parse(client.response);
				character.name = characterName;
				let element = document.createElement('a');
				element.setAttribute('href', 'data:text/plain;charset=utf-8,' + encodeURIComponent(JSON.stringify(character)));
				element.setAttribute('download', characterName + ".json");

				element.style.display = 'none';
				document.body.appendChild(element);

				element.click();

				document.body.removeChild(element);
			}
    }
	}
}
