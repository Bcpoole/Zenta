import {DialogController} from 'aurelia-dialog';

export class EditMaterial {
  static inject = [DialogController];

  constructor(controller){
    this.controller = controller;
  }

  activate(material){
    this.material = material;

    if (this.material.name == '') {
      this.isNew = true;
    }
  }
}