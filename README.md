Included is sampleCharacter.json as a template/guideline. I'll eventually add a Character Creation section once the rest of the app is complete (when the format is solidified).

# Setup
Install packages with:
```shell
jspm install
npm install
```

Run with:
```shell
gulp watch
```

# Features
## Upload Character
Uploads character info from valid .json file into app. Adds additional submenu items in nav-right and shows Ability Scores on the Welcome page.

## Carry Capacity Calculator
Generates a table based on size and biped/quadraped and highlights your relevant row.

*Special thanks to Cevah from the Pazio forums for the base value formula*

## Feats & Flaws
Displays Feats & Flaws details of uploaded character.

## Equipment
Displays Weapons, Armor, Wondrous Items, and Rings and their details.
