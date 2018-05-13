/* eslint-disable  */
const { CLASSES } = require('./lib/constants');

const WRITE_PATH =
  'C:\\Program Files (x86)\\Steam\\steamapps\\common\\Team Fortress 2\\tf\\custom\\rufio-config\\cfg\\modules\\random_disguise\\randDisguise.cfg';

// chokidar prefers forward-slashes
// Must watch file in top-level of cfg/ folder
const WATCH_PATH =
  'C:/Program Files (x86)/Steam/steamapps/common/Team Fortress 2/tf/cfg/can_delete_random_disguise.cfg';

const CLASSES_IN_POOL = [
  CLASSES.scout,
  // CLASSES.soldier,
  CLASSES.pyro,
  CLASSES.demoman,
  // CLASSES.heavy,
  CLASSES.engineer,
  CLASSES.medic,
  CLASSES.sniper,
  CLASSES.spy
];

module.exports = Object.freeze({
  WATCH_PATH,
  WRITE_PATH,
  CLASSES_IN_POOL
});
