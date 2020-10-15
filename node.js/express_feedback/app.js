let express = require('express')

let app = express()

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

app.get('/pinglun',(req,res)=>{
  let comment = req.query
  comment.dateTime = '2020-02-02 10:11:12'
  comments.unshift(comment)
  res.redirect('/')
})

app.listen(3000,()=>{
  console.log('server is running...');
})