const { getShuffled } = require('./util');

class Shuffler {
  constructor(stack) {
    this.stack = stack;
    this.state = {
      shuffledStack: getShuffled(stack)
    };
  }

  shuffle() {
    this.state.shuffledStack = getShuffled(this.stack);
  }

  pop() {
    if (!this.state.shuffledStack.length) {
      this.shuffle();
    }
    return this.state.shuffledStack.pop();
  }
}

module.exports = Shuffler;
