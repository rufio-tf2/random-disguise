const chokidar = require('chokidar');
const Shuffler = require('./lib/shuffler');
const FileService = require('./lib/FileService');
const { CLASSES, TEAMS } = require('./lib/constants');
const { invert, startCase } = require('./lib/util');
const { CLASSES_IN_POOL, WATCH_PATH } = require('./config');

const CLASSES_BY_VALUE = invert(CLASSES);

function getScript(tf2Class, team = TEAMS.enemy) {
  return `disguise ${tf2Class} ${team}`;
}

function onSuccess(newClass, type = 'NULL') {
  const d = new Date();
  const timeStamp = d.toLocaleTimeString();
  const className = startCase(CLASSES_BY_VALUE[newClass]);
  const message = `${timeStamp}: ${className} (${type})`;
  return console.log(message);
}

function updateScript(newClass, type) {
  const script = getScript(newClass);
  FileService.write(script, () => onSuccess(newClass, type));
}

function run() {
  FileService.remove(WATCH_PATH);

  const randomClasses = new Shuffler(CLASSES_IN_POOL);

  const watcher = chokidar.watch(WATCH_PATH, {
    disableGlobbing: true
  });

  updateScript(randomClasses.pop(), 'INIT');
  watcher
    .on('add', () => updateScript(randomClasses.pop(), 'NEXT'))
    .on('change', () => updateScript(randomClasses.pop(), 'NEXT'));

  console.log('Running...');
}

run();
