export interface Piece {
  width: number;
  height: number;
  grainDirection: boolean;
  readonly area: number;
}

// Utility function to create a Piece object
function createPiece(
  width: number,
  height: number,
  grainDirection: boolean
): Piece {
  return {
    width,
    height,
    grainDirection,
    get area() {
      return this.width * this.height;
    },
  };
}

// Array of initial data
const rawPieces = [
  { width: 300, height: 500, grainDirection: false },
  { width: 800, height: 900, grainDirection: false },
  { width: 1800, height: 900, grainDirection: false },
  { width: 2800, height: 900, grainDirection: false },
];

// Convert raw data to valid `Piece` objects
export const Pieces: Piece[] = rawPieces.map(
  ({ width, height, grainDirection }) =>
    createPiece(width, height, grainDirection)
);
