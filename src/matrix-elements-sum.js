const { NotImplementedError } = require('../extensions/index.js');

/**
 * Given matrix, a rectangular matrix of integers,
 * just add up all the values that don't appear below a "0".
 *
 * @param {Array<Array>} matrix
 * @return {Number}
 *
 * @example
 * matrix = [
 *  [0, 1, 1, 2],
 *  [0, 5, 0, 0],
 *  [2, 0, 3, 3]
 * ]
 *
 * The result should be 9
 */
function getMatrixElementsSum(matrix) {
  let sum;
  let ElementsSum;
  let sumResults = [];
  for (let i = 0; i < matrix[0].length; i++) {
    sum = 0;
    for (let j = 0; j < matrix.length; j++) {
     if (matrix[j][i] === 0) {
      break;
     } else {
      sum += matrix[j][i];
     }
     sumResults.push(sum);
    }
  }
  for (let l = 0; l < sumResults.length; l++) {
    ElementsSum += sumResults[l];
  } 
  return ElementsSum;
}

module.exports = {
  getMatrixElementsSum
};
