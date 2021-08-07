class TicTacToe {
  constructor() {
    this.winner = null;
    this.step = true;
    this.noTurns = false;

    this.field = [
      [null, null, null],
      [null, null, null],
      [null, null, null],
    ];
  }

  getCurrentPlayerSymbol() {
    return this.step ? "x" : "o";
  }

  nextTurn(rowIndex, columnIndex) {
    const winComb = [
      [0, 1, 2],
      [3, 4, 5],
      [6, 7, 8],
      [0, 3, 6],
      [1, 4, 7],
      [2, 5, 8],
      [0, 4, 8],
      [2, 4, 6],
    ];

    if (this.field[rowIndex][columnIndex] === null) {
      this.field[rowIndex][columnIndex] = this.step ? "x" : "o";
      this.step = !this.step;
    }

    const field = this.field.flat();

    for (let i = 0; i < winComb.length; i++) {
      const [a, b, c] = winComb[i];
      if (field[a] && field[a] === field[b] && field[a] === field[c]) {
        this.winner = field[a];
      }
    }

    this.noTurns = !this.field.some((el) => el.includes(null));
  }

  isFinished() {
    return this.winner || this.noTurns ? true : false;
  }

  getWinner() {
    return this.winner;
  }

  noMoreTurns() {
    return this.noTurns;
  }

  isDraw() {
    return !this.winner && this.noTurns ? true : false;
  }

  getFieldValue(rowIndex, colIndex) {
    return this.field[rowIndex][colIndex];
  }
}

module.exports = TicTacToe;
