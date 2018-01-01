const mongoose = require('mongoose')
mongoose.connect('mongodb://localhost/regifter_app', {
  useMongoClient: true
})


const Gift = require('./models/gift')
const Store = require('./models/store')
const User = require('./models/user')

mongoose.Promise = global.Promise


const steven = new User({
  firstName: 'Steven',
  lastName: 'Universe',
  username: 'stewball',
  email: 'steven@thecrystalgems.com',
  photoUrl: 'https://vignette.wikia.nocookie.net/gemcrust/images/c/c2/Steven_Universe_-_With_Weapon3.png/revision/latest?cb=20160911190428',
  stores: [{
    name: 'Centiniel Socks',
    storeAddress: '123 Store Drive',
    giftsToReturn: [{
      title: 'Bubble Blaster 300',
      description: 'Blasted bubbles through the front door',
      price: 0.00,
      giftFrom: 'Amethyst!',
      photoURL: 'https://cdn.vectorstock.com/i/thumb-large/66/69/santa-hat-vector-296669.jpg'
    }]
  }]
})
const peri = new User({
  firstName: 'Peridot',
  lastName: 'Universe',
  username: 'trust_no_clod',
  email: 'peri@thecrystalgems.com',
  photoUrl: 'http://i0.kym-cdn.com/photos/images/original/001/088/980/3ed.gif',
  stores: [{
    name: 'Toilet Factry',
    storeAddress: '123 Store Drive',
    giftsToReturn: [{
      title: 'Livable Bidet',
      description: 'Gotta new house with Lapis',
      price: 68.99,
      giftFrom: 'Amethyst!',
      photoURL: 'https://cdn.vectorstock.com/i/thumb-large/66/69/santa-hat-vector-296669.jpg'
    }]
  }]
})
const onion = new User({
  firstName: 'Onion',
  lastName: 'the Troublemaker',
  username: 'onion',
  email: 'leader@theoniongang.com',
  photoUrl: 'http://vignette1.wikia.nocookie.net/steven-universe/images/8/89/Hes_Onion.png/revision/latest?cb=20160714080818',
  stores: [{
    name: 'Dangerous Fun',
    storeAddress: '123 Store Drive',
    giftsToReturn: [{
      title: 'Laser Gun',
      description: 'meh',
      price: 150.99,
      giftFrom: 'Me!',
      photoURL: 'https://cdn.vectorstock.com/i/thumb-large/66/69/santa-hat-vector-296669.jpg'
    }]
  }]
})

User.remove()
  .then(() => {
    return User.remove()
  })
  .then(() => {
    console.log('seeds are planted')
    return steven.save()
  })
  .then(() => {
    console.log('seeds are planted')
    return onion.save()
  })
  .then(() => {
    console.log('seeds are planted')
    return peri.save()
    mongoose.connection.close()
  })
  .catch(err => {
    console.log(err)
  })
