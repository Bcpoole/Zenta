import {inject} from 'aurelia-framework';
import {ApplicationState} from '../applicationState';
import {DialogService} from 'aurelia-dialog';
import {Prompt} from 'aurelia-dialog/examples/prompt';

@inject(ApplicationState, DialogService)
export class characteristics {
  canActivate(params, routeConfig, navigationInstruction) {
    return (!!this.loadedCharacter);
  }

  constructor(appState, dialogService) {
    this.appState = appState;
    this.dialogService = dialogService;

    this.loadedCharacter = this.appState.loadedCharacter;
    this.characteristics = this.loadedCharacter.characteristics;
    this.speed = this.loadedCharacter.speed;
  }

  addLanguage() {
      let lang = '';
      this.dialogService.open({ viewModel: Prompt, model: lang }).then(response => {
        if (!response.wasCancelled) {
          this.loadedCharacter.languages.push(response);
        }
      });
    }
}
