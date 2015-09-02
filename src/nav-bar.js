import {bindable} from 'aurelia-framework';
import {computedFrom} from 'aurelia-framework';
import {inject} from 'aurelia-framework';
import {ApplicationState} from './applicationState';

@inject(ApplicationState)
export class NavBar {
  @bindable router = null;

  constructor(appState) {
    this.appState = appState;
  }
}
