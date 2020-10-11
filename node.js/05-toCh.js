let http = require('http')
const { send } = require('process')

let server = http.createServer()

server.on('request',(req,res)=>{
  //在服务端默认发送的数据，是utf8编码
  //在浏览器中不知道是utf8编码的内容，浏览器会按照当前操作系统的默认编码解析
  // res.setHeader('Content-Type','text/plain;charset=utf-8')
  // res.end('hello 世界')

  let url = req.url;

  if(url === '/plain'){
    res.setHeader('Content-Type','text/plain;charset=utf-8')
    res.end('hello 世界')
  }else if(url === '/html'){
    res.setHeader('Content-Type','text/html;charset=utf-8')
    res.end('<p>hello html</p>')
  }
})

server.listen(3000,()=>{
  console.log('server runing...')
})