import {inject} from 'aurelia-framework';
import {Validation} from 'aurelia-validation';
import * as Dice from 'dice';

@inject(Validation, Dice)
export class diceRoller {
  constructor(validation, dice) {
    this.rollInput = '';
    this.dice = dice;

    this.validation = validation.on(this)
      .ensure('rollInput')
      .isNotEmpty()
      .hasMinLength(1);

    this.rollHistory = [];
  }

  roll() {
    try {
      this.err = null;
      var res = this.dice.roll(this.rollInput);
      this.rollResult = res;

      if (this.rollHistory.length == 10) {
        this.rollHistory.pop();
      }
      this.rollHistory.unshift({
        input: this.rollInput,
        result: this.rollResult
      });
    } catch (err) {
      this.err = err;
    }

  }
}
