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
  res.render('index')
})

router.get('/:sid', (req, res) => {
  // redirect to original website
  const sid = req.params.sid
  Urls.find({ shortUrl: sid })
    .lean()
    .then(output => {
      console.log(output)
      res.redirect(output[0].originUrl)
    })
    .catch(error => {
      res.send('Sorry, it seems like your URL is expired.')
      console.log(error)
    })
})

module.exports = router