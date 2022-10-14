const { NotImplementedError } = require('../extensions/index.js');

/**
 * Create a repeating string based on the given parameters
 *  
 * @param {String} str string to repeat
 * @param {Object} options options object 
 * @return {String} repeating string
 * 
 *
 * @example
 * 
 * repeater('STRING', { repeatTimes: 3, separator: '**', 
 * addition: 'PLUS', additionRepeatTimes: 3, additionSeparator: '00' })
 * => 'STRINGPLUS00PLUS00PLUS**STRINGPLUS00PLUS00PLUS**STRINGPLUS00PLUS00PLUS'
 *
 */
 function repeater(str, options) {
  const string = str + "";
  const repeatTimes = options?.repeatTimes || 1;
  const separator = options?.separator || "+";
  const addition = options?.addition === undefined ? "" : options.addition+'';
  const additionRepeatTimes = addition ? options?.additionRepeatTimes || 1 : 0;
  const additionSeparator = options?.additionSeparator || "|";
  let newStr = [];
  for (let i = 1; i <= repeatTimes; i++) {
    let additionArr = [];
    for (let j = 1; j <= additionRepeatTimes; j++) {
      additionArr.push(addition);
    }
    additionArr = additionArr.join(additionSeparator);
    newStr.push(string + additionArr);
  }
  newStr = newStr.join(separator);
  return newStr;
}

module.exports = {
  repeater
};
