const fs = require('fs');
const { WRITE_PATH } = require('../config');
const { noop } = require('./util');

function write(cfgScript, handleSuccess = noop) {
  if (!WRITE_PATH) {
    console.error('No WRITE path found.');
    return;
  }

  fs.writeFile(WRITE_PATH, cfgScript, (error) => {
    if (error) {
      return console.error(error);
    }
    return handleSuccess();
  });
}

function remove(path, handleSuccess = noop) {
  if (!path) {
    console.error('No path found.');
    return;
  }

  fs.unlink(path, handleSuccess);
}

module.exports = Object.freeze({
  remove,
  write
});
