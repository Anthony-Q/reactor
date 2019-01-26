const Board = function(size) {
  this.color = Board.WHITE;
  this.size = size;
  this.board = this.createBoard(size);
  this.last_move = false;
  this.terrain = false; //for implementing terrain later.
};

Board.EMPTY = 0;
Board.BLACK = 1;
Board.WHITE = 2;
Board.BROWN = 3;
Board.GREEN = 4;
Board.BLUE = 5;
Board.RED = 6;
Board.PURPLE = 7;
Board.GREY = 8;
Board.Board.prototype.createBoard = function(size) {
  var row = [];
  for (var i = 0; i < size; i++) {
    row[i] = [];
    for (var x = 0; x < size; x++) {
      row[i][x] = Board.EMPTY;
    }
  }
};

Board.prototype.play = function(i, x) {
  if (this.board[i][x] !== Board.EMPTY) {
    return false;
  }
};
