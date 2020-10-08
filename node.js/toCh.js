let http = require('http')
const { send } = require('process')

let server = http.createServer()

server.on('request',(req,res)=>{
  res.send('hello')
})

server.listen(3000,()=>{
  console.log('server runing...')
})