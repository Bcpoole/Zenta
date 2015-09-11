import {inject} from 'aurelia-framework';
import {ApplicationState} from './applicationState';

@inject(ApplicationState)
export class inventory {
  canActivate(params, routeConfig, navigationInstruction) {
    return (!!this.loadedCharacter);
  }

  constructor(appState) {
    this.appState = appState;

    this.loadedCharacter = this.appState.loadedCharacter;
    this.characterInventory = this.loadedCharacter.inventory;

    this.computeTotalWeight();
  }

  computeTotalWeight() {
    this.totalWeight = 0;

    for (var item of this.characterInventory) {
      this.totalWeight += item.weight;
    }
  }
}
