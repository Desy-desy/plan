let template = require('art-template')
let fs = require('fs')


fs.readFile('./art-template.html',(err,data)=>{
  if(err){
    return console.log('读取文件失败');
  }
  data = data.toString();
  let ret= template.render(data,{
    name:'Jack',
    age:18,
    hobbies:[
      'eat',
      'sleep',
      'dance'
    ]
  })
console.log(ret);
})
