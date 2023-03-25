const { Command } = require('commander')
const program = new Command();

program 
    .command('server')
    .argument('<script>')
    .option('-p, --port <number>', 'port number', 80)
    .action(function () {
        console.error(`Run srver %s on port %s`, this.args[0], this.opts().port)
    })

program.parse()

// try this : `node action_this.js server --port 8080 index.js` in the terminal