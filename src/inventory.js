import {computedFrom} from 'aurelia-framework';

export class inventory {
  strength = 10;
  creatureType = 'bipedal';
  creatureSize = 'medium';

  @computedFrom('strength', 'creatureType', 'creatureSize');
  get loads() {
    return this.calculateCarryCapacity();
  }

  constructor() {

  }

  calculateCarryCapacity() {
    var loadSizes = [];
    for (var i = 1; i <= 29; i++) {
      var modStr = i + this.getCategoryModifier(i);

      var light, med, heavy;
      if (i < 10) {
        heavy = modStr * 10;
      } else {
        var values = [0,25,28.75,32.5,37.5,43.75,50,57.5,65,75,87.5];
        var idx = 1 + modStr - 10 * Math.floor(modStr/10);
        heavy = values[idx] * Math.pow(4, Math.floor(modStr/10));
      }

      heavy = heavy * this.getSizeModifier();
      med = Math.floor((2/3) * heavy);
      light = Math.floor((1/3) * heavy);

      var style = '#FFFFFF';
      if (i == this.strength) {
        style = '#66AFFC';
      }

      loadSizes.push({
        strength: i,
        light: light + " lbs. or less",
        medium: (light+1) + "-" + med + " lbs.",
        heavy: (med+1) + "-" + heavy + " lbs.",
        style: style
      });
    }

    return loadSizes;
  }

  getSizeModifier() {
    switch (this.creatureSize) {
      case 'fine':
            return 1/8;
      case 'diminutive':
            return 1/4;
      case 'tiny':
            return 1/2;
      case 'small':
            return 3/4;
      case 'large':
            return 2;
      case 'huge':
            return 4;
      case 'gargantuan':
            return 8;
      case 'colossal':
            return 16;
      default: //medium
            return 1;
    }
  }

  getCategoryModifier(str) {
    if (this.creatureType === 'bipedal') {
      return 0;
    } else { //quadruped
      switch (this.creatureSize) {
        case 'fine':
          return str*(1/4);
        case 'diminutive':
          return str*(1/2);
        case 'tiny':
          return str*(3/4);
        case 'small':
          return str*(1);
        case 'large':
          return str*(3);
        case 'huge':
          return str*(6);
        case 'gargantuan':
          return str*(12);
        case 'colossal':
          return str*(24);
        default: //medium
          return str*2;
      }
    }
  }
}
