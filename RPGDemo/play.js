'use strict';

import Inquirer from 'inquirer';
// import components



// alter game class where needed
class Game {
  constructor(scene1, scene2, scene3, npc1, npc2, npc3) {
    this.character = null;
    this.scenes = [scene1, scene2, scene3];
    this.npcs = [npc1, npc2, npc3];
    this.active = true

  }
  
  gameOver() {
    console.log('I am sorry, you have lost the game, try again');
    this.active = false;
  }
}


// game components created here... characters and scenes




// Declare a new game instance
// let game1 = new Game();





// Play function - needs help
const start = (game) => Inquirer.prompt([
  {
    type: 'checkbox',
    name: 'role',
    message: 'What character would you like to play?',
    choices: ['Magician', 'Warrior']
  }
]).then(answer => {
  if (answer.role[0] === 'Magician') {
    game.character = new Player('Magician', 15, 20)
  } else {
    game.character = new Player('Warrior', 20, 10)
  }
  console.log(`Welcome ${game.character.title}`)
  return game;
}).then((game) => {
  game.scenes[0].describe(game.npcs[0]);
  Inquirer.prompt([
    {
      type: 'input',
      name: 'status',
      message: `${game.scenes[0].question}`,
      default: 'Ready',
    }
  ])
  .then(answer => {
    console.log(answer.status);
    game.scenes[0].battle(game.npcs[0], game.character);
    if (game.character.health < 1) {
      game.gameOver()
    }
    return game;
  }).then((game) => {
    game.scenes[1].describe(game.npcs[1]);
    Inquirer.prompt([
      {
        type: 'input',
        name: 'status',
        message: `${game.scenes[1].question}`,
        default: 'Ready',
      }
    ])
    .then(answer => {
      console.log(answer.status);
      game.scenes[1].battle(game.npcs[1], game.character);
      if (game.character.health < 1) {
        game.gameOver()
      }
      return game;
    }).then((game) => {
      game.scenes[2].describe(game.npcs[2]);
      Inquirer.prompt([
        {
          type: 'input',
          name: 'status',
          message: `${game.scenes[2].question}`,
          default: 'Ready',
        }
      ])
      .then(answer => {
        console.log(answer.status);
        game.scenes[2].battle(game.npcs[2], game.character);
        if (game.character.health < 1) {
          game.gameOver()
        }
        return game;
      })
    })
  })
})



// start the game with an instance of the game
start(game1)