const fs = require('fs')
const express = require('express')
const app = express()

// request.url === '/'
app.get('/', function(req, res) {
  fs.readFile(`${__dirname}/src/views/home.html`, 'utf-8', function(error, content) {
  	console.log(content)
  	res.send(content)
  })  
})

const PORT = process.env.PORT || 3000;

app.listen(3000, function() {
  console.log(`App running in PORT: ${PORT}`)
})