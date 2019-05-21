'use strict'

var path = require('path')
var sugly = require('sugly')

// create the void.
var $void = sugly()
require('./profile')($void)

// prepare the path of app home directory.
var srcHome = path.join(__dirname, 'sugly')
var being = $void.createBootstrapSpace(path.join(srcHome, '@'))

// export a sugly module to JS.
module.exports = being.$import('module')

// If there're multiple public sugly modules, they can be exported like
/*
module.exports = {
  module1: being.$import('module1'),
  module2: being.$import('module2'),
  ...
}
*/
