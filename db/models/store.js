const Schema = require('../schema')
const mongoose = require('mongoose')

const Store = mongoose.model('Store', Schema.StoreSchema)
module.exports = Store
