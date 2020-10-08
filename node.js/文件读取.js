/*
同步文件读取
异步文件读取
简单文件读取
流式文件读取
*/
const fs = require("fs");

fs.readFile("spider.js", (err, data) => {
    if (!err) {
        console.log(data); //返回buffer,因为读取的不一定是字符串
        //将读取文件写入另一个文件中
        fs.writeFile("hello.js", data, (err) => {
            if (!err) {
                console.log("文件写入成功");
            }
        })
    }
})


//创建一个可读流
let rs = fs.createReadStream("spider.js");
let ws = fs.createWriteStream("a.js")

rs.once("open", () => {
    console.log("可读流打开了~~");
});
rs.once("close", () => {
        console.log("可读流关闭了~~");
    })
    //如果要读取一个可读流中的数据，必须要为可读流绑定一个data事件，data事件绑定完毕，他会自动开始读取数据；
rs.on("data", (data) => {
  console.log(data);
})