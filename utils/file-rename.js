const fs = require('fs')
const files = fs.readdirSync(__dirname)


for (const file of files) {
  if (file.endsWith('.md')) {
    fs.rename(
      __dirname + '/' + item,
      __dirname + '/' + item.replace('.md', '') + '/index.md',
      err => console.log(err)
    )
  }
}
