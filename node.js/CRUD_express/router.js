//路由模块
//职责：处理路由

let fs = require('fs')
let Student = require('./student')

let express = require('express')

//创建一个路由容器
let router = express.Router()

//把路由都挂载到rputer路由容器中
router.get('/students',(req,res)=>{
  //第二个参数是可选的，传入utf8把读取的文件直接按照utf8转码
  // fs.readFile('./db.json','utf8',(err,data)=>{
  //   if (err) {
  //     return res.status(500).send('server error.')
  //   }
  //   //从文件中读取的数据是字符串，一定要用json手动转换成对象
  //   let students = JSON.parse(data).students;
  //   res.render('index.html',{
  //     fruits:[
  //       '苹果',
  //       '苹果',
  //       '苹果'
  //     ],
  //     students:students
  //   })
  // })
  Student.find((err,students)=>{
    if (err) {
      return res.status(500).send('server error.')
    }
    res.render('index.html',{
      fruits:[
        '苹果',
        '苹果',
        '苹果'
      ],
      students:students
    })
  })
})

router.get('/students/new',(req,res)=>{
  res.render('new.html')
})

router.post('/students/new',(req,res)=>{
  // console.log(req.body);
  // 将数据保存到db.json中
  //先读取出来转成对象，然后往对象中push，然后把对象转成字符串，然后写入文件
  new Student(req.body).save((err)=>{
    if (err) {
      return res.status(500).send('server error.')
    }
    res.redirect('/students')
  })
})

//渲染编辑学生页面
router.get('/students/edit',(req,res)=>{
  //在客户端的列表页中处理连接问题（需要有id参数）
  // res.render('edit.html',{
  //   student:
  // })
  //replace，正则表达将取得的id带有的所有的"替换成空
  Student.findById(req.query.id.replace(/"/g,''),(err,student)=>{
    if (err) {
      return res.status(500).send('Server error')
    }
    res.render('edit.html',{
      student:student
    })
  })
})

router.post('/students/edit',(req,res)=>{
  //获取表单数据，更新，student.update，发送响应
  let id = req.body.id.replace(/"/g,'')
  Student.findByIdAndUpdate(id,req.body,(err)=>{
    if (err) {
      return res.status(500).send('server error')
    }
    res.redirect('/students')
  })
})

//处理删除学生
router.get('/students/delete',(req,res)=>{
  //获取要删除的id，根据id执行删除操作，根据操作结果发送响应数据
  let id = req.query.id.replace(/"/g,'')
  Student.findByIdAndRemove(id,(err)=>{
    if (err) {
      return res.status(500).send('server error')
    }
    res.redirect('/students')
  })
})


// 把router导出
module.exports = router

