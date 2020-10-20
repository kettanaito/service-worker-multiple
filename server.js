const path = require('path')
const express = require('express')

const app = express()

app.use(express.static(path.resolve(__dirname, 'static')))

app.get('/', (req, res) => {
  res.sendFile(path.resolve(__dirname, 'index.html'))
})

app.listen(8020, () => {
  console.log('http://localhost:8020')
})
