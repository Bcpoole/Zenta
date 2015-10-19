#Zenta

Zenta is built with [Aurelia](http://www.aurelia.io/). Its purpose is to serve as an organized display of all your character's data for the [Pathfinder Roleplaying Game](http://paizo.com/pathfinder/), and to provide additional useful tools.

*Included is sampleCharacter.json as a guideline (mostly done but needs some revisions).*
## Running The App

To run the app, follow these steps.

1. Ensure that [NodeJS](http://nodejs.org/) is installed. This provides the platform on which the build tooling runs.
2. From the project folder, execute the following command:

  ```shell
  npm install
  ```
3. Ensure that [Gulp](http://gulpjs.com/) is installed. If you need to install it, use the following command:

  ```shell
  npm install -g gulp
  ```
4. Ensure that [jspm](http://jspm.io/) is installed. If you need to install it, use the following command:

  ```shell
  npm install -g jspm
  ```
  > **Note:** jspm queries GitHub to install semver packages, but GitHub has a rate limit on anonymous API requests. It is advised that you configure jspm with your GitHub credentials in order to avoid problems. You can do this by executing `jspm registry config github` and following the prompts.
5. Install the client-side dependencies with jspm:

  ```shell
  jspm install -y
  ```
  >**Note:** Windows users, if you experience an error of "unknown command unzip" you can solve this problem by doing `npm install -g unzip` and then re-running `jspm install`.
6. To run the app, execute the following command:

  ```shell
  gulp watch
  ```
7. Browse to [http://localhost:9000](http://localhost:9000) to see the app. You can make changes in the code found under `src` and the browser should auto-refresh itself as you save files.

## Features
### Upload Character
Uploads character info from valid .json file into app. Adds additional submenu items in nav-right and shows Ability Scores on the Welcome page.

### Carry Capacity Calculator
Generates a table based on size and biped/quadruped and highlights your relevant row. Supports [Ant Haul](http://www.d20pfsrd.com/magic/all-spells/a/ant-haul) and [Muleback Cords](http://www.d20pfsrd.com/magic-items/wondrous-items/wondrous-items/m-p/muleback-cords).

*Special thanks to Cevah from the Pazio forums for the base value formula*

### Character Creation
Creates a new character based on input name and using a point-buy stat calculator (budget isn't enforced so you can use other systems to generate your stats).

### Dice Roller
Input any valid dice roll string to generate results. Shows last 10 rolls history.

### Displays
Displays are listed on the character name dropdown in the nav-right once a character is loaded.
- Classes - *Includes levels, if Prestige, and Archetype*
- Characteristics
- Equipment - *Displays Weapons, Armor, Wondrous Items, and Rings and their details*
- Feats and Flaws
- Inventory
- Spells
- Stats - *Ability Scores, Offensive & Defensive Stats*
- Traits & Drawbacks

## TO-DO
- Add dialogs (with edit versions)
- Delete options
- Skills overhaul
- Class/Class UI overhaul