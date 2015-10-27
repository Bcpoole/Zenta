import {DialogController} from 'aurelia-dialog';
import {computedFrom} from 'aurelia-framework';

export class EditWondrousItem {
  static inject = [DialogController];

  @computedFrom('item.name');
  get isNew() {
  console.log(this.item.name == '');
    return (this.item.name == '');
  }

  constructor(controller){
    this.controller = controller;
  }

  activate(item){
    this.item = item;
  }
}