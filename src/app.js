import 'bootstrap';
import 'bootstrap/css/bootstrap.css!';

export class App {
  configureRouter(config, router){
    config.title = 'Zenta';
    config.map([
      { route: '', name: 'welcome', moduleId: 'home/welcome', nav: false, title:'Welcome' },
      { route: 'carryCapacity', name: 'carryCapacity', moduleId: 'home/carryCapacity', nav: true, title:'Carry Capacity' },
      { route: 'characterCreation', name: 'characterCreation', moduleId: 'home/characterCreation', nav: true, title: 'Character Creation' },
      { route: 'diceRoller', name: 'diceRoller', moduleId: 'home/diceRoller', nav: true, title: 'Dice Roller' },

      { route: 'feats', name: 'feats', moduleId: 'character/feats', nav: false, title: 'Feats & Flaws' },
      { route: 'traits', name: 'traits', moduleId: 'character/traits', nav: false, title: 'Traits & Drawbacks' },
      { route: 'skills', name: 'skills', moduleId: 'character/skills', nav: false, title: 'Skills' },
      { route: 'characteristics', name: 'characteristics', moduleId: 'character/characteristics', nav: false, title: 'Characteristics' },
      { route: 'inventory', name: 'inventory', moduleId: 'character/inventory', nav: false, title: 'Inventory' },
      { route: 'equipment', name: 'equipment', moduleId: 'character/equipment', nav: false, title: 'Equipment' },
      { route: 'stats', name: 'stats', moduleId: 'character/stats', nav: false, title: 'Stats' },
      { route: 'classes', name: 'classes', moduleId: 'character/classes', nav: false, title: 'Classes' }
    ]);

    var pattern = Trianglify({
        width: window.innerWidth,
        height: window.innerHeight,
        cell_size: 52,
        color_space: 'hsl',
        variance: '100',
        seed: 'Zenta',
        x_colors: 'PuBu',
        y_colors: 'PuBuGn'
    });
    document.body.appendChild(pattern.canvas())

    this.router = router;
  }
}
