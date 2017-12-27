const express = require('express')
const app = express()


const mongoose = require('mongoose')
mongoose.connect('mongodb://localhost/regifter_app', {
  useMongoClient: true
})

const db = mongoose.connection

db.on('error', function (err) {
  console.log(err)
})

db.once('open', function () {
  console.log('database has been connected!')
})

const PORT = process.env.PORT || 5700
app.listen(PORT, ()=>{
    console.log(`Application listening on port ${PORT}`)
})