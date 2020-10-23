const mongoose = require('mongoose')

const Schema = mongoose.Schema

//连接数据库
mongoose.connect('mongodb://localhost/itcast')

//设计文档结构（表结构）
//字段名称就是表结user构中的属性名称
//约束的目的是保证数据完整性，不要有脏数据
let userSchema = new Schema({
  username: {
    type: String,
    required:true //必须有，不能为空
  },
  password: {
    type: String,
    require: true
  },
  email:{
    type: String
  }
})

//将文档结构发布为模型
//mongoose.model方法就是用来将一个架构发布为model
//第一个参数：传入一个大写名词单数字符串来表示你的数据库名称
//    mongoose会自动将大写名词的 字符串生成小写复数的集合名称，如User => users
//第二个参数：架构Schema
//返回值：模型构造函数
const User = mongoose.model('User',userSchema)

//新增数据
// let admin = new User({
//   username:'张三',
//   password:'123456',
//   email:'admin@admin.com'
// })

// admin.save((err,ret)=> {
//   if (err) {
//     console.log('保存失败');
//   }
//   console.log('保存成功')
//   console.log(ret)
// })

//查询数据
//查询所有
// User.find((err,ret)=> {
//   if (err) {
//     console.log('查询失败')
//   }
//   console.log(ret)
// })

// 用户注册
// 1.判断用户是否存在，如果存在结束注册
// 2.不存在就注册（保存）一条用户信息
User.find()
  .then((data) => {
    console.log(data)
  })

// User.findOne({
//   username:'aaa'

// })
// .then((user) => {
//   if (user) {
//     //用户存在
//     console.log('用户已存在');
//   } else {
//     return new User({
//       username:'aaa',
//       password:'123456',
//       email:'adfasdf'
//     }).save()
//   }
// })
// .then((ret) => {

// })

// 按条件查询
// User.find({
//   username:'张三'
// },(err,ret)=> {
//   if (err) {
//     console.log('查询失败')
//   }
//   console.log(ret)
// })

//只查询一个,没有条件只查询第一个
// User.findOne({
//     username:'张三'
//   },(err,ret)=> {
//     if (err) {
//       console.log('查询失败')
//     }
//     console.log(ret)
//   })

//删除数据
// User.remove({
//   username:'张三'
// },(err,ret) => {
//   if (err) {
//     console.log('删除失败')
//   }
//   console.log('删除成功')
//   console.log(ret)
// })

//根据id更新数据
// User.findByIdAndUpdate('5f8d55338cd57e043cb5825e',{
//   password:'123'
// },(err,ret) => {
//   if (err) {
//     console.log('更新失败')
//   }
//   console.log('更新成功')
// })
// User.findByIdAndUpdate('5f8d55338cd57e043cb5825e',{
//   password:'123'
// },(err,ret) => {
//   if (err) {
//     console.log('更新失败')
//   }
//   console.log('更新成功')
// })