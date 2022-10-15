const { NotImplementedError } = require('../extensions/index.js');

/**
 * Implement chainMaker object according to task description
 * 
 */
 const chainMaker = {
  chain: [],
  getLength() {
    return this.chain.length;  
  },
  addLink(value) {
    const chainLink = arguments.length === 0 ? `( )` : `( ${value} )`;
    this.chain.push(chainLink);
    return this;
  },
  removeLink(position) {
    if (typeof position != 'number' || position < 1 || position > this.getLength()) {
      this.chain = [];     
      throw new Error("You can't remove incorrect link!");
    }
    this.chain.splice(position - 1, 1);
    return this;
  },
  reverseChain() {
    this.chain.reverse();
    return this;
  },
  finishChain() {
    let result = [...this.chain].join('~~');
    this.chain = [];
    return result;
  }
};

module.exports = {
  chainMaker
};
