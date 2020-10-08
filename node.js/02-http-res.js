//加载http核心模块
let http = require("http");

//返回server实例
let server = http.createServer();

//提供对数据的服务,注册request请求事件，
//request请求事件处理函数，接受两个参数：request 请求对象  response 响应对象
server.on('request',(request,response)=>{
  console.log("收到客户端请求,请求路径是："+request.url)
  //response对象有一个方法：write可以用来给客户端发送响应数据
  //write可以使用多次，但是最后一定要使用end来结束响应
  let url = request.url;
  // if(url==="/"){
  //   response.end("hello");
  // }else if(url==="/login"){
  //   response.end("加载中");
  // }else{
  //   response.end("404 Not Found.")
  // }
  if(url === "/products"){
    let products = [
      {
        name:'苹果X',
        price:8888
      },
      {
        name:'菠萝X',
        price:5555
      }
    ]
    //响应内容只能是二进制数据或者字符串
    response.end(JSON.stringify(products));//将数组转换成字符串
  }
});

//绑定端口号，启动服务器
server.listen(3000,()=>{
  console.log('服务器启动成功，可以通过http://127.0.0.1:3000访问')
})
