const { NotImplementedError } = require('../extensions/index.js');

/**
 * Given an array of domains, return the object with the appearances of the DNS.
 *
 * @param {Array} domains
 * @return {Object}
 *
 * @example
 * domains = [
 *  'code.yandex.ru',
 *  'music.yandex.ru',
 *  'yandex.ru'
 * ]
 *
 * The result should be the following:
 * {
 *   '.ru': 3,
 *   '.ru.yandex': 3,
 *   '.ru.yandex.code': 1,
 *   '.ru.yandex.music': 1,
 * }
 *
 */
 function getDNSStats(arr) {
  const arrRev = arr.map((elem) => elem.split(".").reverse());
  const arrRes = [];
  for (const elem of arrRev) {
    let elemLen = elem.length;
    for (let i = 1; i <= elemLen; i++) {
      arrRes.push("." + elem.slice(0, i).join("."));
    }
  }
  
  const result = {};

  for (const elem of arrRes) {
    if (result[elem]) {
      result[elem]+= 1;
    } else {
      result[elem] = 1;
    }
  }
  
  return result;
}

module.exports = {
  getDNSStats
};
