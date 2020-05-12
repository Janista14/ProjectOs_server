const express = require('express')
const app = express()

app.get('/triangle/:base/:height', function (req, res) {
  res.header('Access-Control-Allow-Origin', '*')
  res.send({ result: 0.5 * req.params.base * req.params.height })
})

app.listen(2000)