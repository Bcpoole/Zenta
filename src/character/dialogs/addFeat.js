import {DialogController} from 'aurelia-dialog';

export class AddFeat {
  static inject = [DialogController];

  constructor(controller){
    this.controller = controller;
  }

  activate(feat){
    this.feat = feat;

    if (this.feat.name == '') {
      this.isNew = true;
    }
  }
}