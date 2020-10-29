const mongoose = require('mongoose')
const Schema = mongoose.Schema

const urlSchema = new Schema({
  originUrl: {
    type: String,
    required: true
  },
  shortUrl: {
    type: String,
    required: true
  },
  createdTime: {
    type: Date,
    expires: 10800,
    default: Date.now()
  }
})

module.exports = mongoose.model('Url', urlSchema)