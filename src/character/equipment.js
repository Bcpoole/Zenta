import {inject} from 'aurelia-framework';
import {ApplicationState} from '../applicationState';
import {DialogService} from 'aurelia-dialog';
import {AddRing} from './dialogs/addRing';
import {EditWondrousItem} from './dialogs/editWondrousItem';

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
    this.weapons = this.loadedCharacter.weapons;
    this.rings = this.loadedCharacter.rings;
    this.wondrousItems = this.loadedCharacter.wondrousItems;

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

  deleteWeapon(weapon) {
    if(confirm('Do you really want to delete "' + weapon.name + '"?')) {
      let idx = this.weapons.indexOf(weapon);
      this.weapons.splice(idx, 1);
    }
  }

  editWondrousItem(item) {
    this.dialogService.open({ viewModel: EditWondrousItem, model: item });
  }

  deleteWondrousItem(item) {
    let nullItem = {
      slot: item.slot,
      name: '',
      value: 0,
      aura: '',
      weight: 0,
      description: ''
    }
    if(confirm('Do you really want to delete "' + item.name + '"?')) {
      let idx = this.wondrousItems.indexOf(item);
      this.wondrousItems[idx] = nullItem;
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
        this.rings.push(response.output);
      }
    });
  }

  editRing(ring) {
    this.dialogService.open({ viewModel: AddRing, model: ring });
  }

  deleteRing(ring) {
    if(confirm('Do you really want to delete "' + ring.name + '"?')) {
      let idx = this.rings.indexOf(ring);
      this.rings.splice(idx, 1);
    }
  }
}
