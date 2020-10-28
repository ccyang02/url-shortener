const express = require('express')
const router = express.Router()
const home = require('./modules/home')
const shortcut = require('./modules/shortcut')

router.use('/', home)
router.use('/shortcut', shortcut)

module.exports = router