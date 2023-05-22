var currentPlayer = 'X';
var board = [
  ['', '', ''],
  ['', '', ''],
  ['', '', '']
];

function makeMove(row, col) {
  if (board[row][col] === '') {
    board[row][col] = currentPlayer;
    document.getElementsByClassName('cell')[row * 3 + col].innerText = currentPlayer;
    if (checkWin()) {
      alert(currentPlayer + ' wins!');
      resetGame();
    } else if (checkDraw()) {
      alert('It\'s a draw!');
      resetGame();
    } else {
      currentPlayer = currentPlayer === 'X' ? 'O' : 'X';
    }
  }
}

function checkWin() {
  // Check rows
  for (var i = 0; i < 3; i++) {
    if (board[i][0] !== '' && board[i][0] === board[i][1] && board[i][1] === board[i][2]) {
      return true;
    }
  }

  // Check columns
  for (var j = 0; j < 3; j++) {
    if (board[0][j] !== '' && board[0][j] === board[1][j] && board[1][j] === board[
