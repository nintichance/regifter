const Schema = require('../schema')
const mongoose = require('mongoose')

const Gift = mongoose.model('Gift', Schema.GiftSchema)
module.exports = Gift
