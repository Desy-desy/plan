function add (x,y,callback) {
  console.log(1)
  setTimeout(function () {
    var ret = x + y
    callback(ret)
    console.log(2)
  },1000)
}

add(10,20,function (ret) {
  console.log(ret)
})
console.log(3)

// console.log(add(10,20))  ==>undefined


// function add (x,y) {
//   console.log(1)
//   setTimeout(function () {
//     var ret = x + y
//     console.log(ret)
//   },1000)
// }

// console.log(add(10,20));