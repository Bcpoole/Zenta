import {inject} from 'aurelia-framework';
import {Validation} from 'aurelia-validation';
import * as Dice from 'dice';

@inject(Validation, Dice)
export class diceRoller {
  constructor(validation, dice) {
    this.rollInput = '';
    this.lastRoll = '';
    this.dice = dice;

    this.rollValidation = validation.on(this)
      .ensure('rollInput')
      .isNotEmpty()
      .hasMinLength(1);
    this.rerollValidation = validation.on(this)
      .ensure('lastRoll')
      .isNotEmpty()
      .hasMinLength(1);

    this.rollHistory = [];
  }

  roll() {
    try {
      this.err = null;
      var res = this.dice.roll(this.rollInput);

      this.addToTable(this.rollInput, res);

      this.lastRoll = this.rollInput;
      this.rollInput = '';
    } catch (err) {
      this.err = err;
    }
  }

  reroll() {
    let res = this.dice.roll(this.lastRoll);

    this.addToTable(this.lastRoll, res);
  }

  addToTable(roll, result) {
    if (this.rollHistory.length == 10) {
      this.rollHistory.pop();
    }
    this.rollHistory.unshift({
      input: roll,
      result: result
    });
  }
}
