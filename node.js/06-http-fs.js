let http = require('http')
let fs = require('fs')

let server = http.createServer()

server.on('request',(req,res)=>{
  let url = req.url;

  if(url === '/'){
    fs.readFile('./resource/index.html',(err,data)=>{
      if(!err){
        res.setHeader('Content-Type','text/html;charset=utf-8')
        res.end(data)
      }else{
        res.setHeader('Content-Type','text/plain;charset=utf-8')
        res.end('文件读取失败，请稍后重试！')
      }
    })
  }else if(url === '/hg'){
    //url:统一资源定位符
    fs.readFile('./resource/timg.jpg',(err,data)=>{
      if(!err){
        //图片不需要指定编码
        res.setHeader('Content-Type','image/jpeg')
        res.end(data)
      }else{
        res.setHeader('Content-Type','text/plain;charset=utf-8')
        res.end('文件读取失败，请稍后重试！')
      }
    })
  }
})

server.listen(3000,()=>{
  console.log('Server is running...')
})