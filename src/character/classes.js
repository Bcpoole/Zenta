import {inject} from 'aurelia-framework';
import {ApplicationState} from '../applicationState';

@inject(ApplicationState)
export class classes {
  canActivate(params, routeConfig, navigationInstruction) {
    return (!!this.loadedCharacter);
  }

  constructor(appState) {
    this.appState = appState;

    this.loadedCharacter = this.appState.loadedCharacter;
    this.getClassesAndLevels();
  }

  getClassesAndLevels() {
      let charClasses = "";
      for (var charClass of this.loadedCharacter.classes) {
        charClasses += charClass.name + " " + charClass.levels + "/";
      }

      this.classes = charClasses.substring(0, charClasses.length - 1);
    }
}
