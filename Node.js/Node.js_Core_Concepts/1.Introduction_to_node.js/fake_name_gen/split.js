// A CLI tool to split a string into an array of substrings

const { program } = require('commander');

program
    .option('--first')
    .option('-s, --separator <char>');

program.parse();

const options = program.opts();
const limit = options.first ? 1 : undefined;
console.log(program.args[0].split(options.separator, limit));

// Try this in the terminal: node split.js -s / --fits a/b/c
// node split.js -s --first / a/b/c