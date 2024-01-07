/**
 * Import dependencies from node_modules
 * see commented examples below
 */

// import 'some-node-module';
// import SomeModule from 'some-node-module';

/**
 * Write any other JavaScript below
 */

+( function() {
  const { readFileSync } = require('fs')

  const posthtml = require('posthtml')
  const include = require('posthtml-include')

  const html = readFileSync('participantes.html')

  posthtml([ include({ encoding: 'utf8' }) ])
      .process(html)
      .then((result) => console.log(result.html))
} )();
