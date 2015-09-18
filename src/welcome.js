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

    this.setDescriptor();
  }

  fileSelected() {
  		this.err = null;
      let reader = new FileReader();
      let file = this.$event.target.files[0];
      reader.readAsText(file);

      reader.onload = () => {
        let myCharacter = reader.result;

        try {
          this.loadedCharacter = JSON.parse(myCharacter);
          this.setDescriptor();
        } catch(e) {
          this.loadedCharacter = null;
          this.err = file.name + ' is not valid json';
          return;
        }

				if (this.loadedCharacter.name === '') {
					this.loadedCharacter.name = 'NULL';
				}
      };
  }

  getClassesAndLevels() {
    let charClasses = "";
    for (var charClass of this.loadedCharacter.classes) {
      charClasses += charClass.name + " " + charClass.levels + "/";
    }

    this.classes = charClasses.substring(0, charClasses.length - 1);
  }

  setDescriptor() {
  	this.descriptor = null;
		if (this.loadedCharacter != null) {
			this.getClassesAndLevels();

			if (this.classes != "" || this.loadedCharacter.characteristics.race != "") {
				this.descriptor = "- " + this.loadedCharacter.characteristics.race + " " + this.classes;
			}
		}
  }
}
