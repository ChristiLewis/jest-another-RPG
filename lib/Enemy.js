const Character = require('./Character');
//POTION DEFINED FIRST SIM TO Enemy CONSTRUCTOR EXCEPT ADDRESS IS NOT ../LIB/POTION
const Potion = require('../lib/Potion');

class Enemy extends Character {
    constructor(name, weapon) {
        super(name);
        //MOVED TO PARENT-CHARACTER
        this.weapon = weapon;
        this.potion = new Potion();    
    }

    getDescription() {
        return `A ${this.name} holding a ${this.weapon} has appeared!`;
    }
}

module.exports = Enemy;
