const fs = require('fs');
const path = require('path');
const ghPages = require('gh-pages')


const indexPath = path.join(__dirname, './dist/index.html')
fs.readFile(indexPath, 'utf8', (err, data) => {
  if (err) throw err;

  const result = data.replace(/\<base href=\"\/\"\>/, '<base href="/critical-failure/">')
  fs.writeFile(indexPath, result, 'utf8', function (err) {
    if (err) return console.log(err);
  });
})

ghPages.publish('dist');