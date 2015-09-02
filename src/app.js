import 'bootstrap';
import 'bootstrap/css/bootstrap.css!';

export class App {
  configureRouter(config, router){
    config.title = 'Zenta';
    config.map([
      { route: '', name: 'welcome', moduleId: 'welcome', nav: false, title:'Welcome' },
      { route: 'carryCapacity', name: 'carryCapacity', moduleId: 'carryCapacity', nav: true, title:'Carry Capacity' },
      { route: 'feats', name: 'feats', moduleId: 'feats', nav: false, title: 'Feats' }
    ]);

    this.router = router;
  }
}
