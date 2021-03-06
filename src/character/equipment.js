import {inject} from 'aurelia-framework';
import {ApplicationState} from '../applicationState';
import {DialogService} from 'aurelia-dialog';
import {AddWeapon} from './dialogs/addWeapon';
import {EditArmor} from './dialogs/editArmor';
import {EditMaterial} from './dialogs/editMaterial';
import {AddEnchantment} from './dialogs/addEnchantment';
import {EditWondrousItem} from './dialogs/editWondrousItem';
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
    this.weapons = this.loadedCharacter.weapons;
    this.rings = this.loadedCharacter.rings;
    this.wondrousItems = this.loadedCharacter.wondrousItems;

    this.computeTotalWeight();
  }

  computeTotalWeight() {
    this.totalWeight = this.armor.weight;

    for (var item of this.wondrousItems) {
      this.totalWeight += item.weight;
    }
    for (var item of this.weapons) {
      this.totalWeight += item.weight;
    }
  }

  addWeapon() {
    let weapon = {
      name: '',
      damage: '',
      crit: '',
      weight: 0,
      value: 0,
      isMasterwork: false,
      weaponBonus: '',
      material: {
        name: '',
        hpIn: 0,
        hardness: 0,
        description: ''
      },
      enchantments: []
    }
    this.dialogService.open({ viewModel: AddWeapon, model: weapon }).then(response => {
      if (!response.wasCancelled) {
        this.weapons.push(response.output);
      }
    });
  }

  editWeapon(weapon) {
    this.dialogService.open({ viewModel: AddWeapon, model: weapon });
  }

  deleteWeapon(weapon) {
    if(confirm('Do you really want to delete "' + weapon.name + '"?')) {
      let idx = this.weapons.indexOf(weapon);
      this.weapons.splice(idx, 1);
    }
  }

  editArmor() {
    this.dialogService.open({ viewModel: EditArmor, model: this.armor });
  }

  deleteArmor() {
    let nullArmor = {
      name: '',
      ac: 0,
      maxDexBonus: 0,
      armorCheckPenalty: 0,
      arcaneSpellFailureChance: 0,
      speed: '',
      weight: 0,
      value: 0,
      isMasterwork: false,
      armorBonus: '',
      material: {
        name: '',
        hpIn: 0,
        hardness: 0,
        description: ''
      },
      enchantments: []
    }
    if(confirm('Do you really want to delete "' + this.armor.name + '"?')) {
      this.armor = nullArmor;
    }
  }

  editMaterial(item) {
    this.dialogService.open({ viewModel: EditMaterial, model: item.material });
  }

  removeMaterial(item) {
    item.material = {
      name: '',
      hpIn: 0,
      hardness: 0,
      description: ''
    }
  }

  addEnchantment(item) {
    let enchantment = {
      name: '',
      aura: '',
      description: ''
    }
    this.dialogService.open({ viewModel: AddEnchantment, model: enchantment }).then(response => {
      if (!response.wasCancelled) {
        item.enchantments.push(response.output);
      }
    });
  }

  editEnchantment(enchantment) {
    this.dialogService.open({ viewModel: AddEnchantment, model: enchantment });
  }

  removeEnchantment(item, enchantment){
    if(confirm('Do you really want to remove "' + enchantment.name + '" from "' + item.name + '"?')) {
      let idx = item.enchantments.indexOf(enchantment);
      item.enchantments.splice(idx, 1);
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
