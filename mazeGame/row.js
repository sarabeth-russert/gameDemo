'use strict';

import Square from './square.js'

// Row class constructs a new row to be added to the game
class Row {
  constructor() {
    this.segment = [];
  }
  // addSquare method takes in the view from a space and adds the square to the row
  // expects arguments to come in as strings as 'wall' or 'door'
  addSquare(north, south, east, west) {
    let space = new Square(north, south, east, west);
    space.col = this.segment.length;
    this.segment.push(space);
  }
}

export default Row;