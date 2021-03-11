'use strict';

import Inquirer from 'inquirer';
import Fight from './scenes.js';
import {Player, Monster} from './characters.js';

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

// game components
let fight1 = new Fight('After a long day of marching you approach the town, nestled in a valley before you. As you begin your final descent down the hillside you hear rustling to your left and are startled to find a dangerous looking man, in worn random pieces of clothing, holding a knife in each hand', 'Roll to determine the outcome of your battle')

let bandit = new Monster('Bandit', 'Give me your gold, and I might let you pass', [2, 4, 6]);

let fight2 = new Fight('You have made it past the bandit and finally approach the walls of the city. You want nothing more than to find a nice inn and get a hearty meal and a bed. The arched entrace to the city is patrolled by a small, angry looking guard. You approach him in a friendly manner but after a short exchange of words you can tell he is going to be trouble.', 'Roll to determine the outcome of your battle')

let guard = new Monster('Guard', `I don't like the look of you, you'll enter this town over my dead body!`, [3, 5, 7]);

let fight3 = new Fight('You walk through the cobblestone streets of the bustling city.The buildings around you are all two stories tall and have signs hanging above the doorway on the first floor. You keep your eye out for a sign which indicates it belongs to an inn. Up ahead you see a cheerful wooden placard which give you hope. Before you can reach your destination you become suspicious of what appears to be a team of pick pockets approaching you. They are pretending not to know each other but their body language says otherwise.', 'Roll to determine the outcome of your battle')

let pickPockets = new Monster('Team of Pick Pockets', `nothing, but you will have to engage them in combat to keep them from your money`, [4, 6, 8]);



// Declare a new game instance
let game1 = new Game(fight1, fight2, fight3, bandit, guard, pickPockets)






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