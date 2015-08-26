import {computedFrom} from 'aurelia-framework';

export class Welcome{
  heading = 'Pathfinder Utility Application!';

  constructor() {
    if (window.File && window.FileList && window.FileReader) {
    }
    else {
        alert("Your browser does not support File API. You will be unable to load your character.");
    }
  }

  fileSelected() {
      let reader = new FileReader();
      let file = this.$event.target.files[0];
      reader.readAsText(file);
      console.log(file);
      reader.onload = () => {
        let myCharacter = reader.result;

        try {
          var json = JSON.parse(myCharacter);
          this.myCharacter = myCharacter;
        } catch(e) {
          this.myCharacter = '';
          alert(file.name + ' is not valid json');
        }
      };
  }
}
