const { NotImplementedError } = require('../extensions/index.js');

/**
 * Implement class VigenereCipheringMachine that allows us to create
 * direct and reverse ciphering machines according to task description
 * 
 * @example
 * 
 * const directMachine = new VigenereCipheringMachine();
 * 
 * const reverseMachine = new VigenereCipheringMachine(false);
 * 
 * directMachine.encrypt('attack at dawn!', 'alphonse') => 'AEIHQX SX DLLU!'
 * 
 * directMachine.decrypt('AEIHQX SX DLLU!', 'alphonse') => 'ATTACK AT DAWN!'
 * 
 * reverseMachine.encrypt('attack at dawn!', 'alphonse') => '!ULLD XS XQHIEA'
 * 
 * reverseMachine.decrypt('AEIHQX SX DLLU!', 'alphonse') => '!NWAD TA KCATTA'
 * 
 */
 class VigenereCipheringMachine {
  constructor(type) {
    this.type = arguments.length == 0 || type ? true : false;
  }
  encrypt(message, key) {
    if (
      arguments.length == 0 ||
      typeof message !== 'string' ||
      typeof key !== 'string'
    )
      throw new Error('Incorrect arguments!');
    let keyArray = key.split('');
    let i = 0;
    let messageArray = message.split('');
    const keyLength = messageArray.filter((elem) => {
      let char = elem.charCodeAt();
      return (char >= 65 && char <= 90) || (char >= 97 && char <= 122);
    }).length;
    while (keyArray.length < keyLength) {
      keyArray.push(keyArray[i]);
      i++;
    }
    keyArray = keyArray
      .map((elem) => {
        let char = elem.charCodeAt();
        if (char >= 65 && char <= 90) char -= 65;
        else if (char >= 97 && char <= 122) char -= 97;
        return char;
      })
      .reverse();

    messageArray = message.split('').map((elem) => {
      let char = elem.charCodeAt();
      if (char >= 65 && char <= 90) {
        char -= 65;
        char += keyArray.pop(keyArray.length - 1);
        if (char > 25) char -= 26;
        char += 65;
        return String.fromCharCode(char);
      } else if (char >= 97 && char <= 122) {
        char -= 97;
        char += keyArray.pop(keyArray.length - 1);
        if (char > 25) char -= 26;
        char += 65;
        return String.fromCharCode(char);
      } else return elem;
    });

    return this.type ? messageArray.join('') : messageArray.reverse().join('');
  }
  decrypt(message, key) {
    if (
      arguments.length == 0 ||
      typeof message !== 'string' ||
      typeof key !== 'string'
    )
      throw new Error('Incorrect arguments!');
    let keyArray = key.split('');
    let i = 0;
    let messageArray = message.split('');
    const keyLength = messageArray.filter((elem) => {
      let char = elem.charCodeAt();
      return (char >= 65 && char <= 90) || (char >= 97 && char <= 122);
    }).length;
    while (keyArray.length < keyLength) {
      keyArray.push(keyArray[i]);
      i++;
    }
    keyArray = keyArray
      .map((elem) => {
        let char = elem.charCodeAt();
        if (char >= 65 && char <= 90) char -= 65;
        else if (char >= 97 && char <= 122) char -= 97;
        return char;
      })
      .reverse();

    messageArray = message.split('').map((elem) => {
      let char = elem.charCodeAt();
      if (char >= 65 && char <= 90) {
        char -= 65;
        char -= keyArray.pop(keyArray.length - 1);
        if (char < 0) char += 26;
        char += 65;
        return String.fromCharCode(char);
      } else if (char >= 97 && char <= 122) {
        char -= 97;
        char -= keyArray.pop(keyArray.length - 1);
        if (char < 0) char += 26;
        char += 65;
        return String.fromCharCode(char);
      } else return elem;
    });

    return this.type ? messageArray.join('') : messageArray.reverse().join('');
  }
}

module.exports = {
  VigenereCipheringMachine
};
