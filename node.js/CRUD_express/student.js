const mongoose = require('mongoose')

mongoose.connect('mongodb://localhost/itcast',{ useMongoClient: true})

let Schema = mongoose.Schema

let studentSchema = new Schema({
  name:{
    type: String,
    required: true
  },
  gender: {
    type: Number,
    enum:[0,1],//限定0或者1，枚举
    default: 0
  },
  age: {
    type: Number
  },
  hobbies: {
    type: String
  }
})

//直接导出模型构造函数
module.exports = mongoose.model('Student',studentSchema)

