let http = require('http')
let fs = require('fs')
let url = require ('url')
let template = require('art-template')

let comments = [
  {
    name:'张三',
    message:'你好啊',
    dateTime:'2020-02-02'
  }
]

http
  .createServer((req,res)=>{
    let parseObj = url.parse(req.url,true)

    let pathname = parseObj.pathname

    if (pathname === '/'){
      fs.readFile('./views/index.html',(err,data)=>{
        if (err) {
          return res.end('404 not found.')
        }
        let htmlStr = template.render(data.toString(),{
          comments:comments
        })
        res.end(htmlStr)
      }) 
    } else if (pathname === '/post') {
      fs.readFile('./views/post.html',(err,data)=>{
        if (err) {
          return res.end('404 not found.')
        }
        res.end(data)
      })
    } else if ( pathname.indexOf('/public/') === 0) {
      fs.readFile('.'+ pathname,(err,data)=>{
        if (err) {
          return res.end('404 not found.')
        }
        res.end(data)
      })
    } else if (pathname === '/pinglun') {
      //使用url中的parse方法把请求路径中的查询字符串解析成对象
      // res.end(JSON.stringify(parseObj.query))

      //接下来获取表单提交的数据parseObj.query、生成日期到对象中
      //存储到数组，让用户重定向到首页
      let comment = parseObj.query
      comment.dateTime = '2020-20-20  17:20:20'
      comments.unshift(comment)
      //服务端存储好数据,接下来重定向
      //状态码设置为302临时重定向、响应头中通过location告诉客户端
      //客户端发现服务器响应的状态码是302，会自动去响应头中找location
      res.statusCode = 302
      res.setHeader('Location','/')
      res.end()
    } else {
      fs.readFile('./views/404.html',(err,data)=>{
        if (err) {
          return res.end('404 not found.')
        }
        res.end(data)
      })
    }
  })
  .listen(3000,()=>{
    console.log('running...');
  })