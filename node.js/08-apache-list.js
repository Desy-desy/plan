let http = require('http')
let fs = require('fs')

let server = http.createServer()

let wwwDir = 'F:/test/www'

server.on('request',(req,res)=>{
  let url = req.url
  fs.readFile('./template.html',(err,data)=>{
    if(err){
      return res.end('404 Not Found')
    }
    // fs.readdir(wwwDir,(err,files)=>{
    //   if (err) {
    //     return res.end('Can not find www dir.');
    //   }
    //   console.log(files);
    // })
    data = data.toString()

    //字符串解析替换
    console.log(data);

    res.end(data)
  })

})

server.listen(3000,()=>{
  console.log('running...');
})