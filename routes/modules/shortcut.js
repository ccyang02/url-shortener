const express = require('express')
const router = express.Router()
const bodyParser = require('body-parser')

const Urls = require('../../models/urls')

router.use(bodyParser.urlencoded({ extended: true }))

router.post('/', (req, res) => {
  res.send()
})

router.get('/:sid', (req, res) => {
  // redirect to original website
  const sid = req.params.sid
})



module.exports = router