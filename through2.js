const fs = require('fs');
const through = require('through2');
fs.createReadStream('./compose.js').pipe(through(function (chunk, enc, callbakck){
  console.log('===>', chunk);
  this.push(chunk);
  callbakck();
}))
.pipe(fs.createWriteStream('out.txt'))
.on('finish', () => {
  
});