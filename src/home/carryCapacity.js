import {computedFrom} from 'aurelia-framework';
import {inject} from 'aurelia-framework';
import {ApplicationState} from '../applicationState';

@inject(ApplicationState)
export class carryCapacity {
  @computedFrom('currentLoad', 'strength', 'creatureType', 'creatureSize', 'hasAntHaul', 'hasMulebackCords');
  get loads() {
    return this.calculateCarryCapacity();
  }

  constructor(appState) {
    this.appState = appState;

    this.loadedCharacter = this.appState.loadedCharacter;

    this.loadCharacter();
  }

  loadCharacter() {
		this.creatureType = 'biped';

    if (this.loadedCharacter) {
      this.strength = this.loadedCharacter.abilityScores.strength;
      this.currentLoad = this.computeTotalWeight();
      this.creatureSize = this.loadedCharacter.characteristics.size;
    } else {
    	this.currentLoad = 0;
    	this.strength = 10;
    	this.creatureSize = 'medium';
      console.log('no character loaded.')
    }
  }

  computeTotalWeight() {
		let totalWeight = this.loadedCharacter.armor.weight;

		for (var item of this.loadedCharacter.wondrousItems) {
			totalWeight += item.weight;
		}
		for (var item of this.loadedCharacter.weapons) {
			totalWeight += item.weight;
		}

		for (var item of this.loadedCharacter.inventory) {
			if (item.equipped) {
				totalWeight += item.weight  * item.quantity;
			}
		}

		return totalWeight;
	}

  calculateCarryCapacity() {
    var loadSizes = [];
    for (var i = 1; i <= 29; i++) {
      var light, medium, heavy;

      let computedStr = i;
      if (this.hasMulebackCords) {
      	computedStr += 8;
      }
      if (computedStr < 10) {
        heavy = computedStr * 10;
      } else {
        var values = [0,25,28.75,32.5,37.5,43.75,50,57.5,65,75,87.5];
        var idx = 1 + computedStr - 10 * Math.floor(computedStr/10);
        heavy = values[idx] * Math.pow(4, Math.floor(computedStr/10));
      }

      heavy = heavy * this.getSizeModifier();
      medium = Math.floor((2/3) * heavy);
      light = Math.floor((1/3) * heavy);

      if (this.hasAntHaul) {
      	heavy *= 3;
      	medium *= 3;
      	light *= 3;
      }

      var style = '#FFFFFF';
      if (i == this.strength) {
        style = '#66AFFC';
      }
      var isLight, isMedium, isHeavy;
      isLight = isMedium = isHeavy = style;
      if (i == this.strength) {
        if (this.currentLoad <= light) {
          isLight = '#2186FC';
        } else if (this.currentLoad <= medium) {
          isMedium = '#2186FC';
        } else if (this.currentLoad <= heavy) {
          isHeavy = '#2186FC';
        } else {
          style = '#DA300C';
          isLight = isMedium = isHeavy = style;
        }
      }

      loadSizes.push({
        strength: i,
        light: light + " lbs. or less",
        medium: (light+1) + "-" + medium + " lbs.",
        heavy: (medium+1) + "-" + heavy + " lbs.",
        style: style,
        isLight: isLight,
        isMedium: isMedium,
        isHeavy: isHeavy
      });
    }

    return loadSizes;
  }

  getSizeModifier() {
    if (this.creatureType === 'biped') {
      switch (this.creatureSize) {
        case 'fine':
          return 1 / 8;
        case 'diminutive':
          return 1 / 4;
        case 'tiny':
          return 1 / 2;
        case 'small':
          return 3 / 4;
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
    } else { //quadruped
      switch (this.creatureSize) {
        case 'fine':
          return 1/4;
        case 'diminutive':
          return 1/2;
        case 'tiny':
          return 3/4;
        case 'small':
          return 1;
        case 'large':
          return 3;
        case 'huge':
          return 6;
        case 'gargantuan':
          return 12;
        case 'colossal':
          return 24;
        default: //medium
          return 1.5;
      }
    }
  }
}
