const color = require("./color");

const consoled = {
  white: function(text) {
    console.log(color.white, text)
  },
  green: function(text) {
    console.log(color.green, text)
  },
  red: function(text) {
    console.log(color.red, text)
  },
  blue: function(text) {
    console.log(color.blue, text)
  },
  cyan: function(text) {
    console.log(color.cyan, text)
  },
  magenta: function(text) {
    console.log(color.magenta, text)
  },
  black: function(text) {
    console.log(color.black, text)
  },
  gray: function(text) {
    console.log(color.gray, text)
  },
  yellow: function(text) {
    console.log(color.yellow, text)
  },
  bgwhite: function(text) {
    console.log(color.bgwhite, text)
  },
  bggreen: function(text) {
    console.log(color.bggreen, text)
  },
  bgred: function(text) {
    console.log(color.bgred, text)
  },
  bgblue: function(text) {
    console.log(color.bgblue, text)
  },
  bgcyan: function(text) {
    console.log(color.bgcyan, text)
  },
  bgmagenta: function(text) {
    console.log(color.bgmagenta, text)
  },
  bgblack: function(text) {
    console.log(color.bgblack, text)
  },
  bggray: function(text) {
    console.log(color.bggray, text)
  },
  bgyellow: function(text) {
    console.log(color.bgyellow, text)
  },




  //console.log("You have to use colors with consoled.js\nrequire('./modules/consoled.js');\nconsoled.green('yourtext');")
}




const bright = {
  white: function(text) {
    console.log(color.bwhite, text)
  },
  green: function(text) {
    console.log(color.bgreen, text)
  },
  red: function(text) {
    console.log(color.bred, text)
  },
  blue: function(text) {
    console.log(color.bblue, text)
  },
  cyan: function(text) {
    console.log(color.bcyan, text)
  },
  magenta: function(text) {
    console.log(color.bmagenta, text)
  },
  black: function(text) {
    console.log(color.bblack, text)
  },
  gray: function(text) {
    console.log(color.bgray, text)
  },
  yellow: function(text) {
    console.log(color.byellow, text)
  },

  bwhite: function(text) {
    console.log(color.bbgwhite, text)
  },
  bggreen: function(text) {
    console.log(color.bbggreen, text)
  },
  bgred: function(text) {
    console.log(color.bbgred, text)
  },
  bgblue: function(text) {
    console.log(color.bbgblue, text)
  },
  bgcyan: function(text) {
    console.log(color.bbgcyan, text)
  },
  bgmagenta: function(text) {
    console.log(color.bbgmagenta, text)
  },
  bgblack: function(text) {
    console.log(color.bbgblack, text)
  },
  bggray: function(text) {
    console.log(color.bbggray, text)
  },
  bgyellow: function(text) {
    console.log(color.bbgyellow, text)
  }
}


const us = {
  white: function(text) {
    console.log(color.uwhite, text)
  },
  green: function(text) {
    console.log(color.ugreen, text)
  },
  red: function(text) {
    console.log(color.ured, text)
  },
  blue: function(text) {
    console.log(color.ublue, text)
  },
  cyan: function(text) {
    console.log(color.ucyan, text)
  },
  magenta: function(text) {
    console.log(color.umagenta, text)
  },
  black: function(text) {
    console.log(color.ublack, text)
  },
  gray: function(text) {
    console.log(color.ugray, text)
  },
  yellow: function(text) {
    console.log(color.uyellow, text)
  },

  bggreen: function(text) {
    console.log(color.ubggreen, text)
  },
  bgred: function(text) {
    console.log(color.ubgred, text)
  },
  bgblue: function(text) {
    console.log(color.ubgblue, text)
  },
  bgcyan: function(text) {
    console.log(color.ubgcyan, text)
  },
  bgmagenta: function(text) {
    console.log(color.ubgmagenta, text)
  },
  bgblack: function(text) {
    console.log(color.ubgblack, text)
  },
  bggray: function(text) {
    console.log(color.ubggray, text)
  },
  bgyellow: function(text) {
    console.log(color.ubgyellow, text)
  },
}

const fade = {
  white: function(text) {
    console.log(color.fwhite, text)
  },
  green: function(text) {
    console.log(color.fgreen, text)
  },
  red: function(text) {
    console.log(color.fred, text)
  },
  blue: function(text) {
    console.log(color.fblue, text)
  },
  cyan: function(text) {
    console.log(color.fcyan, text)
  },
  magenta: function(text) {
    console.log(color.fmagenta, text)
  },
  black: function(text) {
    console.log(color.fblack, text)
  },
  gray: function(text) {
    console.log(color.fgray, text)
  },
  yellow: function(text) {
    console.log(color.fyellow, text)
  },

  bggreen: function(text) {
    console.log(color.fbggreen, text)
  },
  bgred: function(text) {
    console.log(color.fbgred, text)
  },
  bgblue: function(text) {
    console.log(color.fbgblue, text)
  },
  bgcyan: function(text) {
    console.log(color.fbgcyan, text)
  },
  bgmagenta: function(text) {
    console.log(color.fbgmagenta, text)
  },
  bgblack: function(text) {
    console.log(color.fbgblack, text)
  },
  bggray: function(text) {
    console.log(color.fbggray, text)
  },
  bgyellow: function(text) {
    console.log(color.fbgyellow, text)
  },

}

const usfade = {
  white: function(text) {
    console.log(color.ufwhite, text)
  },
  green: function(text) {
    console.log(color.ufgreen, text)
  },
  red: function(text) {
    console.log(color.ufred, text)
  },
  blue: function(text) {
    console.log(color.ufblue, text)
  },
  cyan: function(text) {
    console.log(color.ufcyan, text)
  },
  magenta: function(text) {
    console.log(color.ufmagenta, text)
  },
  black: function(text) {
    console.log(color.ufblack, text)
  },
  gray: function(text) {
    console.log(color.ufgray, text)
  },
  yellow: function(text) {
    console.log(color.ufyellow, text)
  },

  bgwhite: function(text) {
    console.log(color.ufbgwhite, text)
  },
  bggreen: function(text) {
    console.log(color.ufbggreen, text)
  },
  bgred: function(text) {
    console.log(color.ufbgred, text)
  },
  bgblue: function(text) {
    console.log(color.ufbgblue, text)
  },
  bgcyan: function(text) {
    console.log(color.ufbgcyan, text)
  },
  bgmagenta: function(text) {
    console.log(color.ufbgmagenta, text)
  },
  bgblack: function(text) {
    console.log(color.ufbgblack, text)
  },
  bggray: function(text) {
    console.log(color.ufbggray, text)
  },
  bgyellow: function(text) {
    console.log(color.ufbgyellow, text)
  },
}

const brightusfade = {
  white: function(text) {
    console.log(color.bufwhite, text)
  },
  green: function(text) {
    console.log(color.bufgreen, text)
  },
  red: function(text) {
    console.log(color.bufred, text)
  },
  blue: function(text) {
    console.log(color.bufblue, text)
  },
  cyan: function(text) {
    console.log(color.bufcyan, text)
  },
  magenta: function(text) {
    console.log(color.bufmagenta, text)
  },
  black: function(text) {
    console.log(color.bufblack, text)
  },
  gray: function(text) {
    console.log(color.bufgray, text)
  },
  yellow: function(text) {
    console.log(color.bufyellow, text)
  },

  bgwhite: function(text) {
    console.log(color.bufbgwhite, text)
  },
  bggreen: function(text) {
    console.log(color.bufbggreen, text)
  },
  bgred: function(text) {
    console.log(color.bufbgred, text)
  },
  bgblue: function(text) {
    console.log(color.bufbgblue, text)
  },
  bgcyan: function(text) {
    console.log(color.bufbgcyan, text)
  },
  bgmagenta: function(text) {
    console.log(color.bufbgmagenta, text)
  },
  bgblack: function(text) {
    console.log(color.bufbgblack, text)
  },
  bggray: function(text) {
    console.log(color.bufbggray, text)
  },
  bgyellow: function(text) {
    console.log(color.bufbgyellow, text)
  },
}

const brightfade = {
  white: function(text) {
    console.log(color.bfwhite, text)
  },
  green: function(text) {
    console.log(color.bfgreen, text)
  },
  red: function(text) {
    console.log(color.bfred, text)
  },
  blue: function(text) {
    console.log(color.bfblue, text)
  },
  cyan: function(text) {
    console.log(color.bfcyan, text)
  },
  magenta: function(text) {
    console.log(color.bfmagenta, text)
  },
  black: function(text) {
    console.log(color.bfblack, text)
  },
  gray: function(text) {
    console.log(color.bfgray, text)
  },
  yellow: function(text) {
    console.log(color.bfyellow, text)
  },

  bgwhite: function(text) {
    console.log(color.bfbgwhite, text)
  },
  bggreen: function(text) {
    console.log(color.bfbggreen, text)
  },
  bgred: function(text) {
    console.log(color.bfbgred, text)
  },
  bgblue: function(text) {
    console.log(color.bfbgblue, text)
  },
  bgcyan: function(text) {
    console.log(color.bfbgcyan, text)
  },
  bgmagenta: function(text) {
    console.log(color.bfbgmagenta, text)
  },
  bgblack: function(text) {
    console.log(color.bfbgblack, text)
  },
  bggray: function(text) {
    console.log(color.bfbggray, text)
  },
  bgyellow: function(text) {
    console.log(color.bfbgyellow, text)
  },
}

const brightus = {
  white: function(text) {
    console.log(color.bufwhite, text)
  },
  green: function(text) {
    console.log(color.bufgreen, text)
  },
  red: function(text) {
    console.log(color.bufred, text)
  },
  blue: function(text) {
    console.log(color.bufblue, text)
  },
  cyan: function(text) {
    console.log(color.bufcyan, text)
  },
  magenta: function(text) {
    console.log(color.bufmagenta, text)
  },
  black: function(text) {
    console.log(color.bufblack, text)
  },
  gray: function(text) {
    console.log(color.bufgray, text)
  },
  yellow: function(text) {
    console.log(color.bufyellow, text)
  },

  bgwhite: function(text) {
    console.log(color.bufbgwhite, text)
  },
  bggreen: function(text) {
    console.log(color.bufbggreen, text)
  },
  bgred: function(text) {
    console.log(color.bufbgred, text)
  },
  bgblue: function(text) {
    console.log(color.bufbgblue, text)
  },
  bgcyan: function(text) {
    console.log(color.bufbgcyan, text)
  },
  bgmagenta: function(text) {
    console.log(color.bufbgmagenta, text)
  },
  bgblack: function(text) {
    console.log(color.bufbgblack, text)
  },
  bggray: function(text) {
    console.log(color.bufbggray, text)
  },
  bgyellow: function(text) {
    console.log(color.bufbgyellow, text)
  },
}







module.exports = consoled;
module.exports.bright = bright;
module.exports.us = us;
module.exports.fade = fade;
module.exports.usfade = usfade;
module.exports.brightus = brightus;
module.exports.brightfade = brightfade;
module.exports.brightusfade = brightusfade;
