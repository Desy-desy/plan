//在es6中新增了一个API Promise，是一个构造函数
const fs = require('fs')

//创建promise容器
//promise一旦创建，就开始执行里面的代码
let p1 = new Promise((resolve,reject) => {
  fs.readFile('./resource/a.txt','utf8',(err,data) => {
    if (err) {
      //把容器的pending状态变为rejected
      reject(err)
    }
    //把容器的pending状态改为resolved
    resolve(data)
  })
})

let p2 = new Promise((resolve,reject) => {
  fs.readFile('./resource/b.txt','utf8',(err,data) => {
    if (err) {
      //把容器的pending状态变为rejected
      reject(err)
    }
    //把容器的pending状态改为resolved
    resolve(data)
  })
})

let p3 = new Promise((resolve,reject) => {
  fs.readFile('./resource/c.txt','utf8',(err,data) => {
    if (err) {
      //把容器的pending状态变为rejected
      reject(err)
    }
    //把容器的pending状态改为resolved
    resolve(data)
  })
})
//当p1成功了然后就是（then）做指定操作
//then方法接收到的function就是容器中的resolve函数
p1
  .then((data) => {
    console.log(data)
    //当p1读取成功的时候,当前函数return的结果就可以在后面的then中function接收到
    return p2
  },(err) => {
    console.log('读取文件失败了',err)
  })
  .then((data) => {
    console.log(data)
    return p3
  })
  .then((data) => {
    console.log(data)
  })