# Install

## TL;DR

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

## Setup

### 1. Clone this repo:

```
git clone https://github.com/rufio-tf2/random-disguise.git
```

### 2. Move `random_disguise`

1.  Move the `random_disguise` folder into your config folder. I put mine here: `tf/custom/rufio-config/modules/`
1.  Remember where you just put it, because you're going to have to use that path when you're setting up the watcher
1.  Add a line to your `autoexec.cfg` that executes `random_disguise/init` (use whatever path you used in the previous step). This is what I put:

    ```go
    exec modules/random_disguise/init
    ```

1.  In your Spy's config, bind a key to `randomDisguise`. I used `v`:

    ```go
    bind v randomDisguise
    ```

### 3. Set up the watcher

This is the hardest part. Make sure all of your paths are correct.

1.  Install [Node for Windows](https://nodejs.org/en/download/)
1.  Move the `random-disguise` folder somewhere permanent. For example, make a TF2 folder and put it there: `C:\Users\<your name>\TF2\random-disguise`
1.  Open `watcher/config.js`, and update the `WRITE_PATH` to point to the `randDisguise.cfg` file contained within the `random_disguise` folder that you installed above
1.  Ensure that the `WATCH_PATH` correctly points to your TF2 `cfg/` folder
1.  Optional: Update `CLASSES_IN_POOL` to contain the classes that you want to be in the random selection pool. I currently have Soldier and Heavy left out of the pool.

    _Note: If you change this you'll need to restart the script._

## Run Watcher

You need to run the watcher in the background of TF2 for this to work. It shouldn't use much of your CPU. (If you notice it is, please create [let me know](https://github.com/rufio-tf2/random-disguise/issues/new).):

```bash
cd random-disguise
node watcher
# Running...
```
