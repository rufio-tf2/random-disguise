const CLASSES = {
  scout: 1,
  sniper: 2,
  soldier: 3,
  demoman: 4,
  medic: 5,
  heavy: 6,
  pyro: 7,
  spy: 8,
  engineer: 9
};

const TEAMS = {
  blue: 1,
  red: 2,
  enemy: -1,
  friendly: -2
};

module.exports = Object.freeze({
  CLASSES,
  TEAMS
});
