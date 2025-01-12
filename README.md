# Cutting Algorithm

My try to create a working cutting algorithm that produces the most optimal usage of an area
After this works I will transform it into an npm package

### Logic

The goal of the algorithm is to find the solution which leaves the least wasted materials with the fewest pieces with the biggest area.
The input is determined based on those factos :

- Pieces to cut :
  - Dimensions
  - GrainDirection
- Boards
  - Dimensions
  - GrainDirection
- Saw Width

First it will only use whole boards not the pieces.
Also we will assume there is no grain direction. This is I guess the more complex version since it allows every piece to be placed in both dimension
