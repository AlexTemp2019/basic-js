const { NotImplementedError } = require('../extensions/index.js');

/**
 * Given a string, return its encoding version.
 *
 * @param {String} str
 * @return {String}
 *
 * @example
 * For aabbbc should return 2a3bc
 *
 */
function encodeLine(str) {
  const result = [];
  let count = 1;

for (let i = 0; i < str.length; i++) {
  if (str[i] === str[i + 1]) {
      count++;
  } else {
    count = count === 1 ? ""+str[i] : count+str[i];
    result.push(count);
    count = 1;
  }
}
return result.join("");
}

module.exports = {
  encodeLine
};
