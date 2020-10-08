//require用来加载模块的
//node中没有全局作用域，只有模块作用域
// console.log('a start');
let bExports = require('./b.js');
// console.log('a end');
console.log(bExports.foo);
console.log(bExports.add(1,1));