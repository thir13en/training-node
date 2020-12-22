# Filesystem


### How to download a file or image
```javascript
const fs = require('fs')
const request = require('request')

const download = (url, path, callback) => {
  request.head(url, (err, res, body) => {
    request(url)
      .pipe(fs.createWriteStream(path))
      .on('close', callback)
  })
}

const url = 'https://…'
const path = './images/image.png'

download(url, path, () => {
  console.log('✅ Done!')
})
```
