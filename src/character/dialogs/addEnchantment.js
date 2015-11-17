import {DialogController} from 'aurelia-dialog';

export class AddEnchantment {
  static inject = [DialogController];

  constructor(controller){
    this.controller = controller;
  }

  activate(enchantment){
    this.enchantment = enchantment;

    if (this.enchantment.name == '') {
      this.isNew = true;
    }
  }
}