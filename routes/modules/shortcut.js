const express = require('express')
const router = express.Router()
const bodyParser = require('body-parser')
const tools = require('../../utils/tools')

const Urls = require('../../models/urls')

router.use(bodyParser.urlencoded({ extended: true }))

router.post('/', (req, res) => {
  const originUrl = req.body.inputUrl
  const shortUrl = tools.encode(Date.now(), originUrl)
  console.log(`${req.originalUrl}/${shortUrl}`)

  Urls.create({ originUrl, shortUrl })
    .then(() => res.send('shortcut'))
    .catch(error => console.log(error))
})

router.get('/:sid', (req, res) => {
  // redirect to original website
  const sid = req.params.sid
})



module.exports = router