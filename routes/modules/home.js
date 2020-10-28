const express = require('express')
const router = express.Router()
const bodyParser = require('body-parser')

const Urls = require('../../models/urls')

router.use(bodyParser.urlencoded({ extended: true }))

router.get('/', (req, res) => {
  res.redirect('/index')
})

router.get('/index', (req, res) => {
  // main function for url shortener
  res.send('Hi')
})

module.exports = router