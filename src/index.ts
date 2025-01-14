import chalk from "chalk";
import { Piece, Pieces } from "./materials/pieces.js";
import { Board, Boards } from "./materials/boards.js";
import { sawWidth } from "./materials/sawWidth.js";

function ProcessPieces(Pieces: Piece[], Boards: Board[], BoardId: number) {
  Boards = Boards.filter((board) => board.groupId === BoardId);
  const Board = Boards[0];
  const BoardBiggerDimension = Math.max(Board.width, Board.height);
  const BoardSmallerDimension = Math.min(Board.width, Board.height);
  console.log(chalk.green("\n\n Using this board : \n"), Board);

  if (Board.grainDirection === false) {
    console.log(
      chalk.red(
        "\n This board does not have a grain direction. \n This means you can rotate pieces"
      )
    );
  }

  const sortedPieces = Pieces.filter((piece) => {
    if (Board.grainDirection === false) {
      if (piece.width < piece.height) {
        console.log(chalk.yellow("\n Rotating piece : \n"), piece);
        let temp = piece.width;
        piece.width = piece.height;
        piece.height = temp;
      }
    }
    return (
      piece.width <= BoardBiggerDimension &&
      piece.height <= BoardSmallerDimension
    );
  })
    .sort((a, b) => b.width - a.width)
    .map((piece, i) => {
      piece.id = i + 1;
      return piece;
    });

  console.log(chalk.green("\n Pieces that fit the board : \n"), sortedPieces);
  return sortedPieces;
}

function Algorithm(
  Pieces: Piece[],
  Boards: Board[],
  BoardId: number,
  sawWidth: number
) {
  const sortedPieces = ProcessPieces(Pieces, Boards, BoardId);
  console.log(sortedPieces.length);
}

Algorithm(Pieces, Boards, 1, sawWidth);
