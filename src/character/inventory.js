import {inject} from 'aurelia-framework';
import {ApplicationState} from '../applicationState';
import {DialogService} from 'aurelia-dialog';
import {AddItem} from './dialogs/addItem';

@inject(ApplicationState, DialogService)
export class inventory {
  canActivate(params, routeConfig, navigationInstruction) {
    return (!!this.loadedCharacter);
  }

  constructor(appState, dialogService) {
    this.appState = appState;
    this.dialogService = dialogService;

    this.loadedCharacter = this.appState.loadedCharacter;
    this.characterInventory = this.loadedCharacter.inventory;

    this.computeTotalWeight();
  }

  computeTotalWeight() {
    this.totalWeight = 0;

    for (var item of this.characterInventory) {
      if (item.equipped) {
        this.totalWeight += item.weight * item.quantity;
      }
    }
  }

  addItem(sender) {
    let item = {
      name: '',
      weight: '',
      description: '',
      equipped: false
    };
    if (sender === 'inventory') {
      item.equipped = true;
    }
    this.dialogService.open({ viewModel: AddItem, model: item }).then(response => {
      if (!response.wasCancelled) {
        this.characterInventory.push(response.output);
        if (response.output.equipped) {
          this.computeTotalWeight();
        }
      }
    });
  }
}
