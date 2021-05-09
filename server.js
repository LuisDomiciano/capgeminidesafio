const express = require('express')
const server = express()
const port = 3000
const advertisementRouter = require('./src/route/routes')

server.use(express.json())

server.use('/', advertisementRouter)

server.listen(port, ()=> {
  console.log('Server is running')
})
