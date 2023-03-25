//  In a multi-command program, you have an action handler for each command (or stand-alone executables for the commands)

const { Command } = require('commander');
const program = new Command();

program
    .name('--string-split')
    .description('CLI to some JavaScript to string uitlity functions')
    .version('0.8.0');

program.command('split')
    .description('Split a string into substrings and display as an array')
    .argument('<string>', 'string to split')
    .option('--first', 'display just the first substring')
    .option('-s, --separator <char>', 'separator character', ',')
    .action((str, options) => {
        const limit = options.first ? 1 : undefined;
        console.log(str.split(options.separator, limit));
    })

program.parse()

// Try this in the terminal: node string-util.js help split
// node string-util.js split --separator=/ a/b/c
