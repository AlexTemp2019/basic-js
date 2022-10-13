const { NotImplementedError } = require('../extensions/index.js');

/**
 * Given two strings, find the number of common characters between them.
 *
 * @param {String} s1
 * @param {String} s2
 * @return {Number}
 *
 * @example
 * For s1 = "aabcc" and s2 = "adcaa", the output should be 3
 * Strings have 3 common characters - 2 "a"s and 1 "c".
 */
function getCommonCharacterCount(s1, s2) {
  let couther;
  let stack;
  let result = 0;

  if (s1.length <= s2.length) {
    couther = s1;
    stack = s2;
  } else {
    couther = s2;
    stack = s1;
  }  
 
  for (let i = 0; i < couther.length; i++) {
    let j = stack.indexOf(couther[i]);
    if (j >= 0) {
      result++;
      stack = stack.replace(couther[i], "");
    }
  }
  return result;
}

module.exports = {
  getCommonCharacterCount
};
