//同步、异步、简单文件写入不适合大文件写入，性能较差，容易内存溢出
let fs = require("fs");

//流式文件写入
//创建一个可写流
let ws = fs.createWriteStream("hello.txt");
//通过监听流的open和close事件来监听流的打开和关闭
//on()可以为对象绑定一个事件
//once()可以为对象绑定一次性的事件，该事件会在触发一次以后自动失效

ws.once("open", function() {
    console.log("流打开了");
});
ws.once("close", function() {
    console.log("流关闭了");
});
ws.write("通过可写流写入的内容");
ws.write("今天天气不错");
ws.write("锄禾日当午");
ws.write("红掌拨清波");
ws.write("清波真漂亮");

//关闭流
ws.end();