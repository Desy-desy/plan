//加载http核心模块
let http = require("http");

//返回server实例
let server = http.createServer();

//提供对数据的服务,注册request请求事件，
server.on('request',()=>{
  console.log("收到客户端请求")
})

//绑定端口号，启动服务器
server.listen(3000,()=>{
  console.log('服务器启动成功，可以通过http://127.0.0.1:3000访问')
})
