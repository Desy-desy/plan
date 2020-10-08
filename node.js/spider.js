/*
node.js可以模拟发送http请求
下载文件
把下载的二进制文件写入本地
*/
const https = require("https");
const fs = require("fs")
const url = 'https://www.baidu.com';
//发送get请求
https.get(url, function(response) {
    let data = "";
    response.on('data', function(chunk) {
        data += chunk;
    })
    response.on('end', function() {
        console.log("http响应结束");
        fs.writeFile("hello.html", data, { flag: "w" }, function(err) {
            if (!err) {
                console.log("写入成功");
            } else {
                console.log(err);
            }
        });
    })
});