import {inject} from 'aurelia-framework';
import {ApplicationState} from '../applicationState';
import {DialogService} from 'aurelia-dialog';
import {AddRing} from './dialogs/addRing';

@inject(ApplicationState, DialogService)
export class equipment {
  canActivate(params, routeConfig, navigationInstruction) {
    return (!!this.loadedCharacter);
  }

  constructor(appState, dialogService) {
    this.appState = appState;
    this.dialogService = dialogService;

    this.loadedCharacter = this.appState.loadedCharacter;
    this.armor = this.loadedCharacter.armor;

    this.computeTotalWeight();
  }

  computeTotalWeight() {
    this.totalWeight = this.loadedCharacter.armor.weight;

    for (var item of this.loadedCharacter.wondrousItems) {
      this.totalWeight += item.weight;
    }
    for (var item of this.loadedCharacter.weapons) {
      this.totalWeight += item.weight;
    }
  }

  addRing() {
    let ring = {
      name: '',
      aura: '',
      value: 0,
      description: ''
    };
    this.dialogService.open({ viewModel: AddRing, model: ring }).then(response => {
      if (!response.wasCancelled) {
        this.loadedCharacter.rings.push(response.output);
      }
    });
  }

  editRing(ring) {
    this.dialogService.open({ viewModel: AddRing, model: ring });
  }
}
