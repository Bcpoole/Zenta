import {DialogController} from 'aurelia-dialog';

export class AddItem {
  static inject = [DialogController];

  constructor(controller){
    this.controller = controller;
  }

  activate(item){
    this.item = item;

    if (this.item.name == '') {
      this.isNew = true;
    }
  }
}