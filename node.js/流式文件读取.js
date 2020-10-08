let fs = require("fs");

let rs = fs.createReadStream("spider.js");

let ws = fs.createWriteStream("s.js");
//pipe()可以将可读流中的内容，直接输出到可写流中；
rs.pipe(ws);