'use strict';

//import {} from './characters.js'

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





// export scenes here