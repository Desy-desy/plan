let http = require('http')
let fs = require('fs')

let server = http.createServer();

let wwwDir = 'F:/test/www'

server.on('request',(req,res)=>{
  let url = req.url
  let filePath = '/index.html'
  if (url !== '/') {
    filePath = url 
  }

  fs.readFile(wwwDir + filePath,(err,data)=>{
    if(err){
      res.end('404 Not Found')
    }
    res.end(data)
  })
})

server.listen(3000,()=>{
  console.log('server running...');
})