require('dotenv').config()
const express = require('express')
const server = express()
const port = process.env.PORT
const advertisementRouter = require('./src/route/routes')
const mongoose = require('mongoose')

server.use(express.json())
server.use('/', advertisementRouter)

mongoose.connect(process.env.URI_BD, {
  useNewUrlParser: true,
  useUnifiedTopology: true
}).then(()=> console.log('Conexao bem sucedida'))
  .catch(error => console.log('Falha ao conectar a base de dados\n', error))

server.listen(port, ()=> {
  console.log('Server is running')
})
