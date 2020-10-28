const express = require('express')
const routes = require('./routes')
const app = express()

require('./config/mongoose')
PORT = 3000

app.use(routes)

app.get('/', (req, res) => {
  res.send('Index')
})

app.listen(PORT, () => {
  console.log(`App is running on localhost:${PORT}`)
})