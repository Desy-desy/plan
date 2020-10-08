let foo 
console.log("b.js的文件执行了")
exports.foo = 'hello'
exports.add = (x,y)=>{
  return x+y;
}