import {DialogController} from 'aurelia-dialog';

export class EditArmor {
  static inject = [DialogController];

  constructor(controller){
    this.controller = controller;
  }

  activate(armor){
    this.armor = armor;

    if (this.armor.name == '') {
      this.isNew = true;
    }
  }
}