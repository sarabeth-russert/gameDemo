'use strict';

// gameBoard class constructs the board
// anticpates rows will be passed in
// defines a starting and ending space
// contains a move method
class GameBoard {
  constructor() {
    this.maze = [];
    this.start = null;
    this.end = null;
    this.current = this.start;
  }

  // adds a row to the maze matrix
  // adds row property to the square object
  addRow(row) {
    let tempArray = []
    row.segment.forEach(square => {
      square.row = this.maze.length;
      tempArray.push(square);
    })

    this.maze.push(tempArray);

    // console.log(`Row ${this.maze.length} has been added`);
  }

  // adds a start space to the game and onto the appropriate square object
  // expects 1 based row and col as the input
  addStartSpace(row, col) {
    this.start = this.maze[row - 1][col - 1]
    this.start.makeStart();
  }

  // adds an end space to the game and onto the appropriate square object
  // expects 1 based row and col as the input
  addEndSpace(row, col) {
    this.end = this.maze[row - 1][col - 1]
    this.end.makeEnd();
  }

  // look method takes in a string - north, south, east, west
  look() {
    if (this.current === null) {
      this.current = this.start;
    }
    if (this.current === this.start) {
      console.log('You are on the starting square');
    }
    console.log(`When you look north you see a ${this.current.north}`);
    console.log(`When you look south you see a ${this.current.south}`);
    console.log(`When you look east you see a ${this.current.east}`);
    console.log(`When you look west you see a ${this.current.west}`);
  }

  // allows a player to move from their current square to a new space on the board moving one space in the given direction
  // expects a string of 'north, south, east, west'
  move(direction) {
    if (this.current === null) this.current = this.start;
    switch(direction) {
      case 'north':
        if (this.current.north === 'door') {
          this.current = this.maze[this.current.row - 1][this.current.col]; 
          console.log('You have moved one square north')
          if (this.current === this.end) {
            console.log('Congratulations! You have reached the end of the maze!')
          }
        }
        else console.log('You can not walk through walls!');
        break;
      case 'south':
        if (this.current.south === 'door') {
          this.current = this.maze[this.current.row + 1][this.current.col]; 
          console.log('You have moved one square south')
          if (this.current === this.end) {
            console.log('Congratulations! You have reached the end of the maze!')
          }
        }
        else console.log('You can not walk through walls!');
        break;
      case 'east':
        if (this.current.east === 'door') {
          this.current = this.maze[this.current.row][this.current.col - 1];
          console.log('You have moved one square east')
          if (this.current === this.end) {
            console.log('Congratulations! You have reached the end of the maze!')
          }
        }
        else console.log('You can not walk through walls!');
        break;
      case 'west':
        if (this.current.west === 'door') {
          this.current = this.maze[this.current.row][this.current.col + 1]; 
          console.log('You have moved one square west')
          if (this.current === this.end) {
            console.log('Congratulations! You have reached the end of the maze!')
          }
        }
        else console.log('You can not walk through walls!');
        break;
      default:
        console.log('Please enter a valid direction to move');
        break;
    }

  }
}

export default GameBoard;




