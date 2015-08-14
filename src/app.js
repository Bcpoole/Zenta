import 'bootstrap';
import 'bootstrap/css/bootstrap.css!';

export class App {
  configureRouter(config, router){
    config.title = 'Aurelia';
    config.map([
      { route: ['','welcome'],  name: 'welcome',      moduleId: 'welcome',      nav: false, title:'Welcome' },
      { route: 'carryCapacity',     name: 'carryCapacity',    moduleId: 'carryCapacity',    nav: true, title:'Carry Capacity' }
    ]);

    this.router = router;
  }
}
