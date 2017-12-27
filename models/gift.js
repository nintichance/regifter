const Schema = require('../db/schema')
const mongoose = require('mongoose')

const Gift = mongoose.model('Gift', Schema.GiftSchema)
module.exports = Gift
