let bodyParser = require('body-parser')
let express = require('express')

let app = express()

app.use(bodyParser.urlencoded({ extended: false}))
app.use(bodyParser.json())

app.use('/public/',express.static('./public/'))

//配置使用art—template模板引擎
app.engine('html',require('express-art-template'))

//rebder默认为views目录，如果想修改，可以app.set('views'),render函数默认路径)

let comments = [
  {
    name:'张三',
    message:'你好啊',
    dateTime:'2020-02-02'
  }
]

app.get('/',(req,res)=>{
  res.render('index.html',{
    comments: comments
  })
})

app.get('/admin',(req,res)=>{
  res.render('admin/index.html',{
    title:'管理系统'
  })
})

app.get('/post',(req,res)=>{
  res.render('post.html')
})

// app.get('/pinglun',(req,res)=>{
//   let comment = req.query
//   comment.dateTime = '2020-02-02 10:11:12'
//   comments.unshift(comment)
//   res.redirect('/')
// })

//当以post请求/post的时候，执行指定的处理函数
//可以让不同的请求方法让一个路径使用多次
app.post('/post',(req,res)=>{
  // console.log('收到表单post请求了')
  //获取post请求数据，处理，发送响应
  //req.query只能拿get请求参数
  //配置body-parser 中间件（插件，专门来解析表单post请求体）
  let comment = req.body
  comment.dateTime = '2020-02-02 20:20:20'
  comments.unshift(comment)
  res.redirect('/')
})

app.listen(3000,()=>{
  console.log('server is running...');
})