let fs = require("fs");

//interval 设置检查间隔
fs.watchFile("hello.txt",{interval:1000},(curr,prev)=>{
  console.log("修改前前文件大小："+prev.size);
  console.log("修改后文件大小："+curr.size);
})