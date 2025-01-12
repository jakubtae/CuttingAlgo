import chalk from "chalk";
import { Piece, Pieces } from "./materials/pieces.js";
import { Board, Boards } from "./materials/boards.js";

const startingAlgorithms = (
  Pieces: Piece[],
  Boards: Board[],
  BoardId: number
) => {
  Boards = Boards.filter((board) => board.groupId === BoardId);
  console.log(Boards);
};

startingAlgorithms(Pieces, Boards, 1);
