Included is sampleCharacter.json as a guideline (mostly done but needs some additions).
# Setup
Install packages with:
```shell
jspm install
npm install
```

Run with:
```shellhn
gulp watch
```

# Features
## Upload Character
Uploads character info from valid .json file into app. Adds additional submenu items in nav-right and shows Ability Scores on the Welcome page.

## Carry Capacity Calculator
Generates a table based on size and biped/quadraped and highlights your relevant row.

*Special thanks to Cevah from the Pazio forums for the base value formula*

## Character Creation
Creates a new character based on input name and using a point-buy stat calculator.

## Dice Roller
Input any valid dice roll string to generate results. Shows last 10 rolls history.

## Displays
- Feats and Flaws
- Traits & Drawbacks
- Equipment - *Displays Weapons, Armor, Wondrous Items, and Rings and their details.*
- Inventory
- Classes - *Includes levels, if Prestige, and Archetype*
- Characteristics
- Stats - *Ability Scores, Offensive & Defensive Stats*

## TO-DO
- Change fields to editable
