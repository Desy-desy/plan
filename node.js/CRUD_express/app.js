//app.js入门模块
//职责：创建服务、做一些服务相关配置、模板引擎、body-parser解析表单post请求体、提供静态资源服务、挂载路由、监听端口启动服务
let express = require('express')
let router = require('./router')
let bodyParser = require('body-parser')

let app = express()

app.use('/node_modules',express.static('./node_modules'))
app.use('/public',express.static('./public'))

app.engine('html',require('express-art-template'))

//配置body-parser解析post表单请求体
app.use(bodyParser.urlencoded({ extended:false }))
app.use(bodyParser.json())

//把路由容器挂载到app服务中
app.use(router)

app.listen(3000,()=>{
  console.log('server is running');
})

module.exports = app