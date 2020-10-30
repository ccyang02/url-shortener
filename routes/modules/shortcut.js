const express = require('express')
const router = express.Router()
const bodyParser = require('body-parser')
const tools = require('../../utils/tools')

const Urls = require('../../models/urls')

router.use(bodyParser.urlencoded({ extended: true }))

router.post('/', (req, res) => {
  const originUrl = req.body.inputUrl
  let shortToken = tools.encode(Date.now(), originUrl)
  let shortUrl = `http://${req.get('host')}/${shortToken}`

  // also use database to check if duplicated shortUrl exist
  Urls.find({ shortUrl: shortToken })
    .lean()
    .then(output => {
      if (output.length === 0) {
        Urls.create({ originUrl, shortUrl: shortToken })
          .then(() => res.render('index', { originUrl, shortUrl }))
          .catch(error => console.log(error))
      } else {
        res.render('index', { originUrl, shortUrl: 'Fail, please try again.' })
      }
    })


})

module.exports = router