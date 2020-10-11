let fs = require('fs')

fs.readdir('F:/test/www',(err,files)=>{
  if (err) {
    return console.log('目录不存在');
  }
  console.log(files);
})