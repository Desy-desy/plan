//数据操作文件模块，只处理数据，不关心业务。
//封装异步API，node精华
let fs = require('fs')

let dbPath = './db.json'
//获取所有学生列表
//callback中的第一个参数是err，第二个参数是结果，
exports.find = function (callback) {
  fs.readFile(dbPath,'utf8',(err,data)=>{
    if (err) {
      return callback(err)
    }
    callback(null,JSON.parse(data).students)
  })
}
// find(function (err,data) {

// })

//根据id获取学生对象
exports.findById = (id,callback)=>{
  fs.readFile(dbPath,'utf8',(err,data)=>{
    if (err) {
      return callback(err)
    }
    let students = JSON.parse(data).students
    let ret = students.find((item)=>{
      return item.id === parseInt(id)
    })
    callback(null,ret)
  })
}

//添加学生
exports.save = function (student,callback) {
  fs.readFile(dbPath,'utf8',(err,data)=>{
    if (err) {
      return callback(err)
    }
    let students = JSON.parse(data).students
    //处理id唯一不重复
    student.id = students[students.length - 1].id+1
    //把用户传递的对象保存到数组中
    students.push(student)
    let fileData = JSON.stringify({
      students:students
    })
    fs.writeFile(dbPath,fileData,(err)=>{
      if (err) {
        return callback(err)
      }
      //成功就没有错误，所以错误对象是null
      callback(null)
    })
  })
}

// save({
//   name:'xx',
//   age:18
// }),(err)=>{
//   if (err) {
//     console.log('保存失败')
//   } else {
//     console.log('保存成功')
//   }
// }

//更新学生
exports.updateById = function (student,callback) {
  fs.readFile(dbPath,'utf8',(err,data)=>{
    if (err) {
      return callback(err)
    }
    let students = JSON.parse(data).students

    //把id统一转换为数字类型
    student.id = parseInt(student.id)

    //es6中的数组方法：find,接收一个函数作为参数,当符合条件时，find会终止遍历，返回遍历项
    let stu = students.find(function(item){
      return item.id === student.id
    })
    //遍历拷贝对象
    for (let key in student) {
      stu[key] = student[key]
    }
    //数组转化成字符串保存到文件中
    let fileData = JSON.stringify({
      students:students
    })
    fs.writeFile(dbPath,fileData,(err)=>{
      if (err) {
        return callback(err)
      }
      callback(null)
    })
  })
}

//删除学生
exports.deleteById = function (id,callback) {
  fs.readFile(dbPath,'utf8',(err,data)=>{
    if (err) {
      return callback(err)
    }
    let students = JSON.parse(data).students
    //findIndex专门用来根据条件查找元素下标,es6语法
    let deleteId = students.findIndex((item)=>{
      return item.id === parseInt(id)
    })
    //根据下标从数组中删除对应的学生对象
    students.splice(deleteId,1)
    
    let fileData = JSON.stringify({
      students:students
    })
    fs.writeFile(dbPath,fileData,(err)=>{
      if (err) {
        return callback(err)
      }
      callback(null)
    })
  })
}