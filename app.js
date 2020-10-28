const express = require('express')
const routes = require('./routes')
const exphbs = require('express-handlebars')
const app = express()

require('./config/mongoose')
PORT = 3000

app.engine('handlebars', exphbs({ defaultLayout: 'main' }))
app.set('view engine', 'handlebars')
app.use(routes)
app.use(express.static('public'))

app.listen(PORT, () => {
  console.log(`App is running on localhost:${PORT}`)
})