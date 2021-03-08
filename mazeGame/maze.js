'use strict';

import Inquirer from 'inquirer';
import Row from './row.js';
import GameBoard from './gameBoard.js';

//Simple maze game where the player navigates from a starting square to an end point. // Maze is defined by a matrix 
// Player can "look" in each direction to try to determine the way they will move
// Things to update? - Automate board creation.


// Inquirer prompts
const menu = (() => 
  Inquirer.prompt([
  {
    type: 'checkbox',
    name: 'menuChoice',
    message: 'What would you like to do next?',
    choices: ['Look around', 'Move', 'End Game']
  }
  ])
)

const move = (() => 
  Inquirer.prompt([
  {
    type: 'checkbox',
    name: 'moveDirection',
    message: 'Which way would you like to move?',
    choices: ['north', 'south', 'east', 'west']
  }
  ])
)


// game function
// To be fixed: if someone does not choose a direction to move reprompt
function runGame(game) {
  menu()
    .then(answer => {
      if (answer.menuChoice[0] === 'Look around') {
          game.look();
          if (game.current !== game.end) {
            runGame(game);
          }
        
      } else if (answer.menuChoice[0] === 'Move') {
        move().then(answer => {
          game.move(answer.moveDirection[0]);
        }).then(() => {
          if (game.current !== game.end) {
            runGame(game);
          }
        });
      } else if (answer.menuChoice[0] === 'End Game') {
        console.log('Thank you for playing');
      } else {
        console.log('Please choose an option using the space bar');
        if (game.current !== game.end) {
          runGame(game);
        }
      }
  })

}


// [x][x][x][x][x]
// [x][x][0][x][x]
// [0][0][0][x][x]
// [0][x][0][0][!]
// [*][x][x][x][x]

// creates a game - this should be more automated
let row1 = new Row();
row1.addSquare('wall', 'wall', 'wall', 'wall');
row1.addSquare('wall', 'wall', 'wall', 'wall');
row1.addSquare('wall', 'wall', 'wall', 'wall');
row1.addSquare('wall', 'wall', 'wall', 'wall');
row1.addSquare('wall', 'wall', 'wall', 'wall');
let row2 = new Row();
row2.addSquare('wall', 'wall', 'wall', 'wall');
row2.addSquare('wall', 'wall', 'wall', 'wall');
row2.addSquare('wall', 'door', 'wall', 'wall');
row2.addSquare('wall', 'wall', 'wall', 'wall');
row2.addSquare('wall', 'wall', 'wall', 'wall');
let row3 = new Row();
row3.addSquare('wall', 'door', 'wall', 'door');
row3.addSquare('wall', 'wall', 'door', 'door');
row3.addSquare('door', 'door', 'door', 'wall');
row3.addSquare('wall', 'wall', 'wall', 'wall');
row3.addSquare('wall', 'wall', 'wall', 'wall');
let row4 = new Row();
row4.addSquare('door', 'door', 'wall', 'wall');
row4.addSquare('wall', 'wall', 'wall', 'wall');
row4.addSquare('door', 'wall', 'wall', 'door');
row4.addSquare('wall', 'wall', 'door', 'door');
row4.addSquare('wall', 'wall', 'door', 'wall');
let row5 = new Row();
row5.addSquare('door', 'wall', 'wall', 'wall');
row5.addSquare('wall', 'wall', 'wall', 'wall');
row5.addSquare('wall', 'wall', 'wall', 'wall');
row5.addSquare('wall', 'wall', 'wall', 'wall');
row5.addSquare('wall', 'wall', 'wall', 'wall');

let game = new GameBoard()
game.addRow(row1)
game.addRow(row2)
game.addRow(row3)
game.addRow(row4)
game.addRow(row5)

game.addStartSpace(5, 1);
game.addEndSpace(4, 5);

runGame(game);