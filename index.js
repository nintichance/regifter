const express = require('express')
const app = express()

const mongoose = require('mongoose')


mongoose.Promise = global.Promise 
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


const bodyParser = require('body-parser');
app.use(bodyParser.urlencoded({
    extended: true
}))

app.set('view engine', 'hbs')
app.set('views', './views')

app.use(express.static('public'))

// const giftsController = require('./controllers/giftsController')
// app.use('/gifts', giftsController)

// const storesController = require('./controllers/storesController')
// app.use('/stores', storesController)

const usersController = require('./controllers/usersController')
app.use('/users', usersController)













const PORT = process.env.PORT || 5700
app.listen(PORT, ()=>{
    console.log(`Application listening on port ${PORT}`)
})