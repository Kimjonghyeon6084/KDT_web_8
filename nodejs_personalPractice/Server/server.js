const express = require('express')
const db = require('./models/index')
const path = require('path')
const app = express()

app.use(express.static(path.join(__dirname + '../client/build')));

app.get('/', (req, res) => {
  res.sendFile(path.join(__dirname + '/../client/build/index.html'))
})

db.sequelize.sync({force: false}).then(() => {
  app.listen(8000, () => {
    console.log('localhost:8000');
    
  })
})