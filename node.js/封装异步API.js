//调用fn，得到内部的data
//console.log(fn())
function fn(callback) {
  //不成立，只能得到undefined，函数不会等定时器执行完
  // setTimeout(function (){
  //   let data = 'hello'
  //   return data 
  // },1000)


  //不成立，只能得到默认数据，定时器是异步的
  // let data = '默认数据'
  // setTimeout(function (){
  //   data = 'hello'
  // },1000)
  // return data

  setTimeout(function () {
    let data = 'hello'
    callback(data)
  },1000)

}

//如果需要获取一个函数中异步操作的结果，必须通过回调函数来获取
fn(function (data){
  console.log(data);
})

