import chalk from "chalk";
import { Piece, Pieces } from "./materials/pieces.js";
import { Board, Boards } from "./materials/boards.js";
import { sawWidth } from "./materials/sawWidth.js";

interface Area {
  x: number;
  y: number;
  width: number;
  height: number;
  AreaId: number;
}

interface PlacedPieces {
  x: number;
  y: number;
  width: number;
  height: number;
  pieceId: number;
  AreaId: number;
}

interface PossibleAnswersInterface {
  id: string;
  PlacedPieces: PlacedPieces[];
}

const PlacedPieces: PlacedPieces[] = [];
const PossibleAnswers: PossibleAnswersInterface[] = [];
const placingAlgorithm = (
  Pieces: Piece[],
  pieceIndex: number,
  areaToPlaceIn: Area
) => {
  const piece = Pieces[pieceIndex];
  if (!piece) return false; // Stop if the piece does not exist

  if (
    piece.width > areaToPlaceIn.width ||
    piece.height > areaToPlaceIn.height
  ) {
    console.log(chalk.red("Piece is too big for the area"));
    return false;
  }

  // Check if the piece can be placed by height
  if (piece.width <= areaToPlaceIn.height) {
    console.log(chalk.green("Placing piece by height"));
    PlacedPieces.push({
      x: areaToPlaceIn.x,
      y: areaToPlaceIn.y,
      width: piece.height,
      height: piece.width,
      pieceId: piece.id,
      AreaId: areaToPlaceIn.AreaId,
    });
  } else {
    console.log(chalk.green("Placing piece by width"));
    PlacedPieces.push({
      x: areaToPlaceIn.x,
      y: areaToPlaceIn.y,
      width: piece.width,
      height: piece.height,
      pieceId: piece.id,
      AreaId: areaToPlaceIn.AreaId,
    });
  }

  console.log(`Placed piece ID: ${piece.id}`);
  const nextPiece = Pieces[pieceIndex + 1];
  if (!nextPiece) {
    console.log(chalk.blue("No more pieces to place"));
    return true;
  }
  console.log(`Next piece to place:`, nextPiece);
  let SideArea = {
    x: areaToPlaceIn.x + piece.width,
    y: areaToPlaceIn.y,
    width: areaToPlaceIn.width - piece.width - sawWidth,
    height: areaToPlaceIn.height,
    AreaId: areaToPlaceIn.AreaId + 1,
  };
  let BottomArea = {
    x: areaToPlaceIn.x,
    y: areaToPlaceIn.y + piece.height,
    width: piece.width,
    height: areaToPlaceIn.height - piece.height - sawWidth,
    AreaId: areaToPlaceIn.AreaId + 1,
  };
  console.log(chalk.blue("Side Area: "), SideArea);
  console.log(chalk.blue("Bottom Area: "), BottomArea);
  //! Find the best area to place the piece in by summing up all the areas, judging them by already wasted space
  // Recursively place the next piece in both the bottom and side areas and create a copycat array of the placed pieces
  const placedPiecesCopy = [...PlacedPieces];
  placingAlgorithm(Pieces, pieceIndex + 1, {
    x: piece.width,
    y: 0,
    width: areaToPlaceIn.width - piece.width,
    height: areaToPlaceIn.height,
    AreaId: 1,
  });
};

const startingAlgorithms = (
  Pieces: Piece[],
  Boards: Board[],
  BoardId: number,
  sawWidth: number
) => {
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
    if (piece.width < piece.height) {
      let temp = piece.width;
      piece.width = piece.height;
      piece.height = temp;
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

  // Start placing pieces using the sorted array
  placingAlgorithm(sortedPieces, 0, {
    x: 0,
    y: 0,
    width: Board.width,
    height: Board.height,
    AreaId: 1,
  });

  console.log(chalk.green("\n\nPlaced Pieces : \n\n"), PlacedPieces);
};

startingAlgorithms(Pieces, Boards, 1, sawWidth);
