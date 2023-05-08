const consoled = require("./consoled")
consoled.white("consoled.js is a colored console module for NodeJS runtime environment made by rednexie")
consoled.white("Github: https://github.com/rednexie")
consoled.white("Website: https://rednexie.github.io/")
consoled.white("consoled.js works without ANY dependencies except the file 'color.js'")
consoled.white(`You only have to include 'const consoled = require("consoled.js")' to use consoled.js in your nodejs code.'`)
consoled.white("List of the colors in consoled.js:\n")

consoled.white("white")
consoled.black("black")
consoled.gray("gray")
consoled.red("red")
consoled.yellow("yellow")
consoled.green("green")
consoled.cyan("cyan")
consoled.blue("blue")
consoled.magenta("magenta")
consoled.white("\nAnd background colors: \n")
consoled.bgwhite("white background")
consoled.bgblack("black background")
consoled.bggray("gray background")
consoled.bgred("red background")
consoled.bgyellow("yellow background")
consoled.bggreen("green background")
consoled.bgcyan("cyan background")
consoled.bgblue("blue background")
consoled.bgmagenta("magenta background")
consoled.white("\nAlso supports:\n")
consoled.fade.white("Faded colors")
consoled.bright.white("Bright colors")
consoled.usfade.white("fade + underscore")
consoled.brightfade.white("Bright and faded at the same time(doesn't make sense)")
consoled.brightus.white("Bright + underscore")
consoled.brightusfade.white("All!(this doesn't also make sense)")
console.log('\x1b[41m\x1b[37m%s\x1b[0m', 'Thanks for using consoled.js!');
