# TF2 Random Disguise

This creates a TF2 command called `randomDisguise` which disguises you as a random class and then generates a new random one for the next time.

## How

The command `randomDisguise` first executes the contents of `randDisguise.cfg`, which contains a TF2 disguise script, e.g.:

```go
disguise 2 -1  // Disguise as enemy Sniper
```

Then, it writes to a temporary file in your `cfg` folder. Meanwhile, the Node script is watching for that file to be written, and responds by generating a new disguise script with a randomly selected class, and overwriting `randDisguise.cfg` with the new script.

## Install

### TL;DR

1.  Clone/Download this repo, and name it `random-disguise`
1.  Move the `random_disguise` folder (with an underscore) into your config, remembering the path where you put it
1.  Update your `autoexec.cfg` to initialize it, e.g.: `exec modules/random_disguise/init`
1.  In your Spy's config, bind a key to use the `randomDisguise` script, e.g.: `bind v randomDisguise`
1.  Install [Node for Windows](https://nodejs.org/en/download/)
1.  Update the `config.js` file located in `random-disguise/watcher/config.js` with the correct `WRITE_PATH` and `WATCH_PATH`
1.  Run the watcher in the background of TF2:

    ```bash
    # From root level of this repo
    node watcher
    ```

_[Read more install instructions here](./INSTALL.md)._

### Customize random classes

In [`watcher/config.js`](./watcher/config.js), go to the `CLASSES_IN_POOL` variable. I have `CLASSES.soldier` and `CLASSES.heavy` commented out to exclude them from the options. Feel free to change this to your liking.

_Note: If you change this you'll need to restart the script._

```js
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
```

## ⚖️ Unlicense

This is free is all senses of the word. [UNLICENSE](./UNLICENSE)
