import {DialogController} from 'aurelia-dialog';

export class AddTrait {
  static inject = [DialogController];

  constructor(controller){
    this.controller = controller;
  }

  activate(trait){
    this.trait = trait;

    if (this.trait.name == '') {
      this.isNew = true;
    }
  }
}