'use strict';

class Characters {
  constructor(title) {
    this.title = title;
  }
}

class NPC extends Characters {
  constructor(title, dialogue) {
    super(title); 
    this.dialogue = dialogue;
  }
  talk() {
    return `the ${this.title} says, ${this.dialogue}`;
  }
}

// we expect damage to be an array with 3 damage levels
class Monster extends NPC {
  constructor(title, dialogue, damage) {
    super(title, dialogue);
    this.damage = damage;
  }
  determineDamage(level) {
    switch(level) {
      case 'low':
        return this.damage[0];
      case 'med':
        return this.damage[1];
      case 'high':
        return this.damage[2];
      default:
        return this.damage[0];
    }
  }
}

class Player extends Characters {
  constructor(title, health, wisdom) {
    super(title); 
    this.health = health;
    this.wisdom = wisdom;
  }
  loseHealth(damage) {
    this.health = this.health - damage;
    if (this.health < 1) {
      console.log('I am sorry, you have died.')
    }
  }
}

export {Player, Monster};






