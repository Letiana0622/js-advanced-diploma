import Character from '../Character'

export default class Vampire extends Character {
    
    constructor(level, type='Vampire') {
      super(level, type);
      this.attack = 10;
      this.defence = 40;
    }
  }