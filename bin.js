#!/usr/bin/env node

// Log all arguments passed to the script
console.log(process.argv);

// Access the arguments directly (skipping the first two)
const args = process.argv.slice(2);
console.log('Command-line arguments:', args);



const yargs = require('yargs')
const OpenMovieDatabase = require('./index')

const omdb = new OpenMovieDatabase(yargs.argv.key)

if (yargs.argv.title) {
  omdb.get({ t: yargs.argv.title }).then((results) => {
    console.log(results)
  })
}

if (yargs.argv.search) {
  omdb.get({ s: yargs.argv.search }).then((results) => {
    console.log(results.Search)
  })
}

if (!yargs.argv.key) {
    return console.log('You must provide a key argument with an OMDb API Key')
  }
  
  if (!yargs.argv.title && !yargs.argv.search) {
    return console.log(
      'You must provide either a title or search argument - you have provided neither'
    )
  }
  
  if (yargs.argv.title && yargs.argv.search) {
    return console.log(
      'You must provide either a title or search argument - not both'
    )
  }