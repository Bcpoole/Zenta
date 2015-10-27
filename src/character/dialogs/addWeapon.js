import {DialogController} from 'aurelia-dialog';

export class AddWeapon {
  static inject = [DialogController];

  constructor(controller){
    this.controller = controller;
  }

  activate(weapon){
    this.weapon = weapon;

    if (this.weapon.name == '') {
      this.isNew = true;
    }
  }
}