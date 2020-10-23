const fs = require('fs')

fs.readFile('./resource/a.txt','utf8',(err,data)=>{5
  if (err) {
    return console.log('读取失败')
    //抛出异常，阻止程序执行，把错误消息打印到控制台
    throw err
  }
  console.log(data)
  fs.readFile('./resource/b.txt','utf8',(err,data)=>{
    if (err) {
      return console.log('读取失败')
      //抛出异常，阻止程序执行，把错误消息打印到控制台 
      throw err
    }
    console.log(data)
    fs.readFile('./resource/c.txt','utf8',(err,data)=>{
      if (err) {
        return console.log('读取失败')
        //抛出异常，阻止程序执行，把错误消息打印到控制台
        throw err
      }
      console.log(data)
    })
  })
})

