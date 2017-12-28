const mongoose = require('mongoose')
mongoose.connect('mongodb://localhost/regifter_app', {
  useMongoClient: true
})


const Gift = require('./models/gift')
const Store = require('./models/store')
const User = require('./models/user')

mongoose.Promise = global.Promise 

const ninti = new User ({
    firstName: 'Ninti',
    lastName: 'Chance',
    username: 'nintichance',
    email: 'ninti@ninti.com',
    photoUrl: 'https://vignette.wikia.nocookie.net/gemcrust/images/c/c2/Steven_Universe_-_With_Weapon3.png/revision/latest?cb=20160911190428',
    stores: [{
        name: 'Marshalls',
        storeAddress: [
            {
                streetNumber: 1000,
                streetName: 'Cobb Pkwy',
                city: 'Smyrna',
                state: 'Georgia',
                zip: 30308
            }
        ],
        giftsToReturn: [ {
            title: 'Calendar',
            description: 'It/s not as interesting as a notebook in my perspective',
            price: 5.99,
            giftFrom: 'Ninti herself!',
            photoURL: 'https://cdn.vectorstock.com/i/thumb-large/66/69/santa-hat-vector-296669.jpg'
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