const express = require('express')
const router = express.Router()
const bodyParser = require('body-parser')
const tools = require('../../utils/tools')

const Urls = require('../../models/urls')

router.use(bodyParser.urlencoded({ extended: true }))

router.post('/', (req, res) => {
  const originUrl = req.body.inputUrl
  const shortToken = tools.encode(Date.now(), originUrl)
  const shortUrl = `https://${req.get('host').split(':')[0]}/${shortToken}`
  console.log(shortUrl)

  Urls.create({ originUrl, shortUrl })
    .then(() => res.render('index', { originUrl, shortUrl }))
    .catch(error => console.log(error))
})

router.get('/:sid', (req, res) => {
  // redirect to original website
  const sid = req.params.sid
})



module.exports = router