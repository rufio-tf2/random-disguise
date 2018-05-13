const noop = () => {};

function getRandomInt(min, max) {
  const intMin = Math.ceil(min);
  const intMax = Math.floor(max);
  return Math.floor(Math.random() * (intMax - intMin)) + intMin;
}

function sample(arr) {
  const index = getRandomInt(0, arr.length);
  return arr[index];
}

function cloneShallow(arr) {
  return arr.map(e => e);
}

/* eslint-disable no-param-reassign */
function shuffle(arr) {
  // Note: Mutates arr
  let counter = arr.length;

  while (counter > 0) {
    const index = Math.floor(Math.random() * counter);
    counter -= 1;

    const temp = arr[counter];
    arr[counter] = arr[index];
    arr[index] = temp;
  }

  return arr;
}
/* eslint-enable no-param-reassign */

function getShuffled(arr) {
  return shuffle(cloneShallow(arr));
}

function invert(obj) {
  return Object.entries(obj).reduce((accumulator, pair) => {
    const [key, value] = pair;
    accumulator[value] = key;
    return accumulator;
  }, {});
}

function startCase(str) {
  let result = str[0].toUpperCase();
  for (let i = 1; i < str.length; i += 1) {
    result += str[i].toLowerCase();
  }
  return result;
}

module.exports = Object.freeze({
  getShuffled,
  invert,
  noop,
  sample,
  startCase
});
