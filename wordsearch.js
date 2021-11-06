const transpose = function(matrix) {
  // Put your solution here
  const transposedMatrix = [];
  for (let y = 0; y < matrix.length; y++) {
    for (let x = 0; x < matrix[0].length; x++) {
      transposedMatrix[x] = transposedMatrix[x] ?? [];
      transposedMatrix[x][y] = matrix[y][x];
    }
  }
  return transposedMatrix;
};

const wordSearch = (letters, word) => {
  const horizontalJoin = letters.map((ls) => ls.join(""));

  for (const h of horizontalJoin) {
    if (h.includes(word)) {
      return true;
    } else {
      const verticalJoin = transpose(letters).map((ls) => ls.join(""));
      for (const v of verticalJoin) {
        if (v.includes(word)) {
          return true;
        }
      }
    }
  }
  return false;
};

// we recieve a set of letters and one word
// we wil check to see if that word exist in the 2D array horizontoly or vertically.
module.exports = wordSearch;
