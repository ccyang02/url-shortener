const express = require('express')
const router = express.Router()
const bodyParser = require('body-parser')
const tools = require('../../utils/tools')

const Urls = require('../../models/urls')

router.use(bodyParser.urlencoded({ extended: true }))

router.post('/', (req, res) => {
  console.log(req.body.inputUrl)
  console.log(tools.encode(Date.now(), req.body.inputUrl))

  res.send('shortcut')
})

router.get('/:sid', (req, res) => {
  // redirect to original website
  const sid = req.params.sid
})



module.exports = router