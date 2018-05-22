# spiral-matrix-traversal
Traverse a 2D matrix of integers in clockwise spiral fashion and return a 1D array of numbers 

## Use
Call `spiral(matrix)` to return a 1D array of the numbers of a 2D array in clockwise spiral order

## Info
I used a `trampoline` function to prevent out-of-memory conditions and call the base function recursively until all numbers have been processed.