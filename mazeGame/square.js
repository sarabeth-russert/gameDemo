'use strict';


// square class representing each space on the board
// constructor expects arguments to come in as strings with 'wall' or 'door' as options
class Square {
  constructor(north, south, east, west) {
    this.north = north;
    this.south = south;
    this.east = east;
    this.west = west;
    this.start = false;
    this.end = false;
  }
    
    makeStart() {
      this.start = true;
    }
    makeEnd() {
      this.end = true;
    }
}

export default Square;






