const express = require('express')
const ejs = require('ejs')

const connectToDatabase = require('./src/databases/dbConnect')
const knexFile = require('./knexfile')

const pageRouter = require('./src/routers/pageRouter')
const apiRouter = require('./src/routers/apiRouter')

const app = express()

const appConnectionWithDatabase = connectToDatabase(knexFile.development)

app.locals.db = appConnectionWithDatabase

app.engine('ejs', ejs.renderFile)
app.set('view engine', 'ejs')
app.set('views', `${__dirname}/src/views`)

app.use(express.static(`${__dirname}/public`))

app.use('/', pageRouter)
app.use('/api', apiRouter)
app.use(function(req, res) {
  res.render('404.ejs')
})

const PORT = process.env.PORT || 3000;

app.listen(3000, function() {
  console.log(`App running in PORT: ${PORT}`)
})