//express对于没有设定的请求路径默认返回can not get xxx
//定制404，需要通过中间件配置

//只需要在自己路由之后增加一个
app.use((req,res)=>{
  //所有未处理的请求路径都会跑到这
})
