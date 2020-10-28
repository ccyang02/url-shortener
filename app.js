const express = require('express')
const app = express()
PORT = 3000

app.get('/', (req, res) => {
  res.send('Index')
})

app.listen(PORT, () => {
  console.log(`App is running on localhost:${PORT}`)
})