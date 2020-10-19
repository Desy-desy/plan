//find接收一个方法作为参数，方法内部返回一个条件
//find会遍历所有的元素，执行给定的带有条件返回值的函数
//符合该条件的元素会作为find方法的返回值
//如果遍历结束还没有符合该条件的元素，则返回undefined

let users = [
  {id:1,name:'张三'},
  {id:2,name:'张四'},
  {id:3,name:'张五'},
  {id:4,name:'张六'}
]

Array.prototype.myFind = (conditionFunc)=>{
  for (let i = 0;i < this.length;i++){
    if (conditionFunc(this[i],i)) {
      return this[i]
    }
  }
}

let ret = users.myFind(function (item,index){
  return item.id === 3
})

console.log(ret)