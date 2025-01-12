import chalk from "chalk";
import { Piece, Pieces } from "./materials/pieces.js";
import { Board, Boards } from "./materials/boards.js";
import { sawWidth } from "./materials/sawWidth.js";

const startingAlgorithms = (
  Pieces: Piece[],
  Boards: Board[],
  BoardId: number,
  sawWidth: number
) => {
  Boards = Boards.filter((board) => board.groupId === BoardId); // making sure to only use one type of board
  const Board = Boards[0];
  console.log(chalk.green("\n\n Using this board : \n"), Board);
  if (Board.grainDirection === false) {
    console.log(
      chalk.red(
        "\n This board does not have a grain direction. \n This means you can rotate pieces"
      )
    );
  }
  Pieces = Pieces.filter((piece) => {
    return piece.width <= Boards[0].width && piece.height <= Boards[0].height;
  }); // removing pieces that are bigger than the board
  console.log(chalk.green("\n Pieces that fit the board : \n"), Pieces);
};

startingAlgorithms(Pieces, Boards, 1, sawWidth);
