import {inject} from 'aurelia-framework';
import {ApplicationState} from '../applicationState';
import {DialogService} from 'aurelia-dialog';
import {AddSpell} from './dialogs/addSpell';

@inject(ApplicationState, DialogService)
export class spells {
  canActivate(params, routeConfig, navigationInstruction) {
    return (!!this.loadedCharacter);
  }

  constructor(appState, dialogService) {
    this.appState = appState;
    this.dialogService = dialogService;

    this.loadedCharacter = this.appState.loadedCharacter;
    this.spells = this.loadedCharacter.spells;
  }

  addSpell(level) {
    let spell = {
      "name": "",
      "school": "",
      "level": level,
      "castingTime": "",
      "components": "",
      "range": "",
      "area": "",
      "duration": "",
      "savingThrow": "",
      "spellResistance": false,
      "description": ""
    }
    this.dialogService.open({ viewModel: AddSpell, model: spell }).then(response => {
      if (!response.wasCancelled) {
        this.loadedCharacter.spells.push(response.output);
      }
    });
  }

  editSpell(spell) {
    this.dialogService.open({ viewModel: AddSpell, model: spell });
  }

  deleteSpell(spell) {
    if(confirm('Do you really want to delete "' + spell.name + '"?')) {
      let idx = this.spells.indexOf(spell);
      this.spells.splice(idx, 1);
    }
  }
}
