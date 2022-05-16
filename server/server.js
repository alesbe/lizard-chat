const express = require('express')
const app = express()

app.get('/', function (req, res) {
  res.send('Lizard Chat')
})

app.listen(8000)