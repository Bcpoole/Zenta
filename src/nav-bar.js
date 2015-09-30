import {bindable} from 'aurelia-framework';
import {computedFrom} from 'aurelia-framework';
import {inject} from 'aurelia-framework';
import {ApplicationState} from './applicationState';

@inject(ApplicationState)
export class NavBar {
  @bindable router = null;

  constructor(appState) {
    this.appState = appState;
  }

  save() {
    let element = document.createElement('a');
    				element.setAttribute('href', 'data:text/plain;charset=utf-8,' + encodeURIComponent(JSON.stringify(this.appState.loadedCharacter)));
    				element.setAttribute('download', this.appState.loadedCharacter.name + " - " + (new Date().toLocaleString()) + ".json");

    				element.style.display = 'none';
    				document.body.appendChild(element);

    				element.click();

    				document.body.removeChild(element);
  }
}
