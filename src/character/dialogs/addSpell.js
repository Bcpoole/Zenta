import {DialogController} from 'aurelia-dialog';

export class AddSpell {
  static inject = [DialogController];

  constructor(controller){
    this.controller = controller;
  }
  activate(spell){
    this.spell = spell;

    if (this.spell.name == '') {
      this.isNew = true;
    }
  }
}