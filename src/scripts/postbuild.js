const fs = require('fs');
const path = require("path");
const shell = require("shelljs");

const log = message => {
    console.log('[POSTBUILD]:', message)
}

const index = path.join(__dirname, "../../dist/index.html");
const commitId = encodeURI(shell.exec('git rev-parse HEAD', {
    silent: true
}).stdout.replace('\n', ''));


const header = {
    before: '<meta name="commit" content="TBD" />',
    after: `<meta name="commit" content="${commitId}" />`
}

log('Writing commit hash to index in dist folder...')

fs.readFile(index, 'utf8', (err, data) => {
    if (err) throw err;
    const content = data.replace(header.before, header.after);
    fs.writeFile(index, content, (err) => {
        if (err) throw err;
        log('Completed...')
    })
})