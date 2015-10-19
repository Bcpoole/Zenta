import {inject} from 'aurelia-framework';
import {ApplicationState} from '../applicationState';
import {DialogService} from 'aurelia-dialog';
import {AddFeat} from './dialogs/addFeat';

@inject(ApplicationState, DialogService)
export class feats {
  canActivate(params, routeConfig, navigationInstruction) {
    return (!!this.loadedCharacter);
  }

  constructor(appState, dialogService) {
      this.appState = appState;
      this.dialogService = dialogService;

      this.loadedCharacter = this.appState.loadedCharacter;

      this.feats = this.loadedCharacter.feats.selected;
      this.flaws = this.loadedCharacter.feats.flaws;

      if (!this.loadedCharacter.feats || this.loadedCharacter.feats.selected.length == 0) {
        this.err = "Loaded character doesn't have any Feats.";
      }
  }

  addFeat(sender) {
    let feat = {
      name: '',
      benefit: '',
      flavor: ''
    };
    if (sender === 'flaw') {
      feat.effect = '';
    }
    this.dialogService.open({ viewModel: AddFeat, model: feat }).then(response => {
      if (!response.wasCancelled) {
        if (sender === 'feat') {
          this.feats.push(response.output);
        } else if (sender === 'flaw') {
          this.flaws.push(response.output);
        }
      }
    });
  }

  editFeat(feat) {
    this.dialogService.open({ viewModel: AddFeat, model: feat });
  }
}
