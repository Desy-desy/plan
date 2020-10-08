let fs = require("fs");
//检查文件是否存在
// let isExists = fs.existsSync("spider.js");
// console.log(isExists);

//获取文件状态.返回一个对象，这个对象中保存了当前对象相关信息
fs.stat("spider.js",(err,stat)=>{
  console.log(stat.isFile());
});
