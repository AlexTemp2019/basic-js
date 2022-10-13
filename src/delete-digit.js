const { NotImplementedError } = require('../extensions/index.js');

/**
 * Given some integer, find the maximal number you can obtain
 * by deleting exactly one digit of the given number.
 *
 * @param {Number} n
 * @return {Number}
 *
 * @example
 * For n = 152, the output should be 52
 *
 */
function deleteDigit(n) {
  const iterator = (n+"").split(""); 
  let result = 0;
  for(let i = 0; i<iterator.length; i++) {
    const current = [...iterator];
    current.splice(i, 1);
    let newNumber = parseInt(current.join(""));
    result = result > newNumber ? result : newNumber;
  }
  return result;
}

module.exports = {
  deleteDigit
};
