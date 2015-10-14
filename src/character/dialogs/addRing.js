import {DialogController} from 'aurelia-dialog';

export class AddRing {
  static inject = [DialogController];

  constructor(controller){
    this.controller = controller;
  }
  activate(ring){
    this.ring = ring;
  }
}