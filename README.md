consoled.js is a module for coloring the console output, works in Nodejs, made by rednexie

consoled.js doesn't require ANY dependencies.

Tested on already on Linux and Windows 

If you want to take a look at the methods/colors consoled.js supports, view 'example.png'
Usage:
consoled.color(text): Prints the colored text to the console. color can be one of these: white, black, gray, red, yellow, green, cyan, blue, magenta
consoled.bgcolor(text): Prints the background-colored text to the console. color can be one of these: white, black, gray, red, yellow, green, cyan, blue, magenta

consoled.us.color(text): Prints the colored and underlined text to the console. color can be one of these: white, black, gray, red, yellow, green, cyan, blue, magenta
consoled.fade.color(text): Prints the colored and faded text to the console. color can be one of these: white, black, gray, red, yellow, green, cyan, blue, magenta
consoled.bright.color(text): Prints the colored and bright text to the console. color can be one of these: white, black, gray, red, yellow, green, cyan, blue, magenta

consoled.usfade.color(text): Prints the colored, underscored and faded text to the console. color can be one of these: white, black, gray, red, yellow, green, cyan, blue, magenta

consoled.brightus.color(text): Prints the colored, underscored and bright text to the console. color can be one of these: white, black, gray, red, yellow, green, cyan, blue, magenta

There may be some issues with white colors in Windows command prompt, and with yellow on Windows Powershell.