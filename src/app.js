import 'bootstrap';
import 'bootstrap/css/bootstrap.css!';

export class App {
  configureRouter(config, router){
    config.title = 'Zenta';
    config.map([
      { route: '', name: 'welcome', moduleId: 'welcome', nav: false, title:'Welcome' },
      { route: 'carryCapacity', name: 'carryCapacity', moduleId: 'carryCapacity', nav: true, title:'Carry Capacity' },
      { route: 'feats', name: 'feats', moduleId: 'feats', nav: false, title: 'Feats & Flaws' },
      { route: 'traits', name: 'traits', moduleId: 'traits', nav: false, title: 'Traits & Drawbacks' },
      { route: 'skills', name: 'skills', moduleId: 'skills', nav: false, title: 'Skills' },
      { route: 'characteristics', name: 'characteristics', moduleId: 'characteristics', nav: false, title: 'Characteristics' },
      { route: 'inventory', name: 'inventory', moduleId: 'inventory', nav: false, title: 'Inventory' },
      { route: 'equipment', name: 'equipment', moduleId: 'equipment', nav: false, title: 'Equipment' }
    ]);

    this.router = router;
  }
}
