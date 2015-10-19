import {inject} from 'aurelia-framework';
import {ApplicationState} from '../applicationState';
import {DialogService} from 'aurelia-dialog';
import {AddTrait} from './dialogs/addTrait';

@inject(ApplicationState, DialogService)
export class traits {
  canActivate(params, routeConfig, navigationInstruction) {
    return (!!this.loadedCharacter);
  }

  constructor(appState, dialogService) {
    this.appState = appState;
    this.dialogService = dialogService;

    this.loadedCharacter = this.appState.loadedCharacter;
    this.traits = this.loadedCharacter.traits.selected;
    this.drawbacks = this.loadedCharacter.traits.drawbacks;
    this.racialTraits = this.loadedCharacter.traits.racial;
  }

  addTrait(sender) {
    let trait = {
      name: '',
      description: '',
      flavor: ''
    };
    if (sender === 'selected') {
      trait.type = '';
    }
    this.dialogService.open({ viewModel: AddTrait, model: trait }).then(response => {
      if (!response.wasCancelled) {
        if (sender === 'selected') {
          this.traits.push(response.output);
        } else if (sender === 'racial') {
          this.racialTraits.push(response.output);
        } else if (sender === 'drawback') {
          this.drawbacks.push(response.output);
        }
      }
    });
  }

  editTrait(trait) {
    this.dialogService.open({ viewModel: AddTrait, model: trait });
  }
}
