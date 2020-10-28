const express = require('express')
const router = express.Router()
const bodyParser = require('body-parser')
const tools = require('../../utils/tools')

const Urls = require('../../models/urls')

router.use(bodyParser.urlencoded({ extended: true }))

router.post('/', (req, res) => {
  const originUrl = req.body.inputUrl
  const shortToken = tools.encode(Date.now(), originUrl)
  const shortUrl = `${req.get('host')}/${shortToken}`
  // console.log(shortUrl)

  Urls.create({ originUrl, shortUrl: shortToken })
    .then(() => res.render('index', { originUrl, shortUrl }))
    .catch(error => console.log(error))
})



module.exports = router