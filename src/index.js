
function towelSort(matrix) {
  // If the matrix is empty, return an empty array
  if (matrix.length === 0) {
    return [];
  }

  // Initialize an empty array to hold the sorted elements
  let sortedArray = [];

  // Iterate over each row of the matrix
  for (let i = 0; i < matrix.length; i++) {
    // If the row index is even, append the row to the sorted array as is
    if (i % 2 === 0) {
      sortedArray = sortedArray.concat(matrix[i]);
    }
    // If the row index is odd, append the row in reverse order to the sorted array
    else {
      sortedArray = sortedArray.concat(matrix[i].reverse());
    }
  }

  return sortedArray;
}
module.exports = function towelSort (matrix) {
  return [];
}
