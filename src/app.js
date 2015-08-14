import 'bootstrap';
import 'bootstrap/css/bootstrap.css!';

export class App {
  configureRouter(config, router){
    config.title = 'Aurelia';
    config.map([
      { route: ['','welcome'],  name: 'welcome',      moduleId: 'welcome',      nav: false, title:'Welcome' },
      { route: 'inventory',     name: 'inventory',    moduleId: 'inventory',    nav: true, title:'Inventory' }
    ]);

    this.router = router;
  }
}
