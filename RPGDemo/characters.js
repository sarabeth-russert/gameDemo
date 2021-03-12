'use strict';

class Characters {
  constructor(title) {
    this.title = title;
  }
}

// damage is an array of three values - low, med, high

class Villan extends Characters {
  constructor(title, catchPhrase, damage) {
    super(title);
    this.catchPhrase = catchPhrase;
    this.damage = damage;
  }
  talk() {
    console.log(this.catchPhrase)
  }
  determineDamage(level) {
    if (level === 'low') return this.damage[0];
    if (level === 'med') return this.damage[1];
    if (level === 'high') return this.damage[2];
  }
}

class Player extends Characters {
  constructor(title) {
    super(title);
    this.health = 20;
  }
  loseHealth(damage) {
    this.health = this.health - damage;
  }
}

class Mermaid extends Player {
  constructor(title) {
    super(title);
    this.wisdom = 20;
    this.strength = 15;
  }
}

class LobsterMan extends Player {
  constructor(title) {
    super(title);
    this.wisdom = 15;
    this.strength = 20;
  }
}

// let ariel = new Mermaid('Ariel');
// console.log(ariel);
// ariel.loseHealth(10);
// console.log(ariel);

// let ursula = new Villan('Sea Witch', 'NOW SING!', [100, 200, 300]);
// console.log(ursula);
// ursula.talk();


export {Mermaid, Villan, LobsterMan}