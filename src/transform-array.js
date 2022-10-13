const { NotImplementedError } = require("../extensions/index.js");

/**
 * Create transformed array based on the control sequences that original
 * array contains
 *
 * @param {Array} arr initial array
 * @returns {Array} transformed array
 *
 * @example
 *
 * transform([1, 2, 3, '--double-next', 4, 5]) => [1, 2, 3, 4, 4, 5]
 * transform([1, 2, 3, '--discard-prev', 4, 5]) => [1, 2, 4, 5]
 *
 */
function transform(arr) {
  if (!Array.isArray(arr))
  throw new Error("'arr' parameter must be an instance of the Array!");
const result = [];
const length = arr.length;
const prvDis = "--discard-prev";
const prvDbl = "--double-prev";
const nxtDis = "--discard-next";
const nxtDbl = "--double-next";
const sequences = [prvDis, prvDbl, nxtDis, nxtDbl];

for (let i = 0; i < length; i++) {
  let current = arr[i];
  let next = arr[i + 1];
  let prev = arr[i - 1];
  let prevBef = arr[i - 2];
  if (i && !current && prev === nxtDis) {
    result.pop();
  } else if (!current) {
    continue;
  } else if (
    !i &&
    (current === prvDis || current === prvDbl || current === nxtDis)
  ) {
    continue;
  } else if (i === length - 1 && (current === nxtDis || current === nxtDbl)) {
    return result;
  } else if (
    (prev === nxtDis && next === prvDbl) ||
    (prev === nxtDis && next === prvDis)
  ) {
    continue;
  } else if (current === nxtDbl) {
    result.push(next);
  } else if (current === prvDis && prevBef !== nxtDis) {
    result.pop();
  } else if (prev === nxtDis) {
    result.push(current);
  } else if (current === prvDbl && prevBef !== nxtDis ) {
    result.push(prev);
  } else if (!sequences.includes(current)) {
    result.push(current);
  }
}
return result;
}

module.exports = {
  transform,
};
