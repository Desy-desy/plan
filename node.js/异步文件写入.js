let fs = require("fs");

fs.open("hello.txt", "w", function(err, fd) {
    //判断是否出错
    if (!err) {
        //如果没有出错，则对文件进行写入操作
        console.log(fd);
        fs.write(fd, "异步写入的内容", function(err) {
            if (!err) {
                console.log("写入成功!")
            }
            fs.close(fd, function(err) {
                if (!err) {
                    console.log("文件已关闭！")
                }
            })
        })
    } else {
        console.log(err);
    }
});

console.log("程序向下执行!")