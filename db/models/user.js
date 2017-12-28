const Schema = require('../schema')
const mongoose = require('mongoose')

const User = mongoose.model('User', Schema.UserSchema)
module.exports = User
