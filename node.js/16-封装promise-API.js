const fs = require('fs')

function pReadFile(filePath) {
  return new Promise((resolve,reject) => {
    fs.readFile(filePath,'utf8',(err,data) => {
      if (err) {
        reject(err)
      }
      resolve(data)
    })
  })
}

pReadFile('./resource/a.txt')
  .then((data) => {
    console.log(data)
    return pReadFile('./resource/b.txt')
  })
  .then((data) => {
    console.log(data)
    return pReadFile('./resource/c.txt')
  })
  .then((data) => {
    console.log(data)
  })