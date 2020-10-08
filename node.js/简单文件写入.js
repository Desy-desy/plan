let fs = require("fs");

fs.writeFile("hello.txt", "这是通过writefile写入的内容", { flag: "a" }, function(err) {
    if (!err) {
        console.log("写入成功");
    } else {
        console.log(err);
    }
});

//向指定文件夹写文件
fs.writeFile("F:\\test\\txt\\hello.txt", "这是通过writefile写入的内容", { flag: "a" }, function(err) {
    if (!err) {
        console.log("写入成功");
    } else {
        console.log(err);
    }
});