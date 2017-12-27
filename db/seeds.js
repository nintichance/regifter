const mongoose = require('mongoose')
mongoose.connect('mongodb://localhost/regifter_app', {
  useMongoClient: true
})


const Gift = require('../models/gift')
const Store = require('../models/store')
const User = require('../models/user')

mongoose.Promise = global.Promise 

const ninti = new User ({
    firstName: 'Ninti',
    lastName: 'Chance',
    username: 'nintichance',
    email: 'ninti@ninti.com',
    photoURL: '/Users/nintichance/Desktop/ninti_reg.jpg',
    stores: [{
        storeName: 'Marshalls',
        storeAddress: [
            {
                streetNumber: 1000,
                streetName: 'Cobb Pkwy',
                city: 'Smyrna',
                state: 'Georgia',
                zip: 30308
            }
        ],
        gifts: [ {
            title: 'Calendar',
            description: 'It/s not as interesting as a notebook in my perspective',
            price: 5.99,
            giftFrom: 'Ninti herself!',
            photoURL: 'img@example.com'
        }]
    }]
})

User.remove()
  .then(() => {
    return User.remove()
  }).then(() => {
    console.log('ninti is saved')
    return ninti.save()
    mongoose.connection.close()
  })
  .catch(err => {
    console.log(err)
  })