'use strict';

import Inquirer from 'inquirer';

class Game {
  constructor() {
    this.character = null;
    this.scene1 = scene1;
    this.scene2 = scene2;
    this.scene3 = scene3;
  }
  start() {
    Inquirer.prompt([
      {
        type: 'checkbox',
        name: 'role',
        message: 'What character would you like to play?',
        choices: ['choice1', 'choice2']
      }
    ]).then(answer => {
      console.log(answer[0]);
      // if (answer[0] === 'choice1') {
      //   this.character = new _______ ()
      // } else {
      //   this.character = new _______ ()
      // }
    })
  }
  runScene(scene) {
    scene.discribe();
    Inquirer.prompt([
      {
        type: 'checkbox',
        name: 'role',
        message: `${scene.question}`,
        choices: scene.choices
      }
    ]).then(answer => {
      console.log(answer[0]);
      // if (answer[0] === 'choice1') {
      //   this.character = new _______ ()
      // } else {
      //   this.character = new _______ ()
      // }
    })
  }

}