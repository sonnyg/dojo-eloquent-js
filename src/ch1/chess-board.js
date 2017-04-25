var chessBoard = "";
var size = 8;

for (var row = 0; row < size; row += 1) {
  if (row > 0) {
    chessBoard += (row % 2 != 0) ? "\n " : "\n";
  }

  for (var col = 0; col < size; col += 1) {
    chessBoard += (col % 2 != 0) ? " " : " #";
  }
}

console.log(chessBoard);
