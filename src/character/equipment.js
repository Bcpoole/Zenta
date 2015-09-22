import {inject} from 'aurelia-framework';
import {ApplicationState} from '../applicationState';

@inject(ApplicationState)
export class equipment {
  canActivate(params, routeConfig, navigationInstruction) {
    return (!!this.loadedCharacter);
  }

  constructor(appState) {
    this.appState = appState;

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
}
