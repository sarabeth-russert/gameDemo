'use strict';

import {Mermaid, Villan, LobsterMan} from './characters.js'

// examples of coupling

class Scene {
  constructor(description) {
    this.description = description;
  }
  describe(npc) {
    console.log(this.description);
    console.log(npc.talk())
  }
}

class Fight extends Scene {
  constructor(description) {
    super(description);
    this.damage = null;
  }

  battle(npc, player) {
    let result = Math.floor(Math.random() * Math.floor(80)) + player.wisdom;
    if (result > 66) {
      console.log('you took a low level of damage in the fight')
      this.damage = 'low';
    } else if (result > 33) {
      console.log('you took a medium level of damage in the fight')
      this.damage = 'med';
    } else {
      console.log('you took a high level of damage in the fight')
      this.damage = 'high'
    }
    player.loseHealth(npc.determineDamage(this.damage))
    console.log('your health is now ', player.health);
  }
}

let fight1 = new Fight(`Today you have the job of collecting sea weeds and other sea vegetables from the gardens outside the dome. You leave the safety of the shimmering city with a collection basket and begin your harvest from sandy garden beds. There is plenty to collect here, but you are feeling adventurous and you know where you can find an especially delicous dulse near by. As you swim through the underwater forrest you notice a shadow passing overhead. Once, twice, now three times it goes by. You are feeling cautious but continue on. Suddenly you find out what the shadow was! A appears out of nowhere before you an AQUAMANCER`)
let fight2 = new Fight('You walk down the street of your beautiful underground paradise, admiring the roadways made from crushed abalone and the way they reflect rainbows on the surrounding buildings when the sun shines on them... Suddenly you hear a commotion at the edge of the dome and you begin to run towards the noise to see what is going on. It appears        have invaded the dome! You will have to fight to protect your people and the city you love')
let fight3 = new Fight('You succeed in driving the enemy out of your dome but it seems you have a larger problem.        ')

let aquamancer = new Villan('Aquamancer', 'Swim Much?!', [2, 4, 6]);
let ariel = new Mermaid('Ariel');

// fight1.describe(aquamancer);
console.log(ariel);
fight1.battle(aquamancer, ariel)
console.log(ariel);





// export scenes here