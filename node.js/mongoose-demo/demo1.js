const mongoose = require('mongoose')

//连接mongodb数据库
mongoose.connect('mongodb://localhost:27017/test', {useNewUrlParser: true, useUnifiedTopology: true})

//创建一个模型，即设计数据库
const Cat = mongoose.model('Cat', { name: String })

//实例化一个cat
const kitty = new Cat({ name: 'Zildjian' })

//持久化保存kitty实例
kitty.save().then(() => console.log('meow'))

// for (let i = 0;i<100;i++) {
//   const kitty = new Cat({name:'喵喵' + i})
//   kitty.save().then(() => console.log('meow'))
// }