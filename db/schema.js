const mongoose = require('mongoose')
const Schema = mongoose.Schema

mongoose.connect('mongodb://localhost/regifter_app', {
  useMongoClient: true
})

mongoose.Promise = global.Promise

const db = mongoose.connection

db.on('error', (err) => {
    console.log(err)
})

db.once('open', () => {
    console.log("database has been connected!")
})

const GiftSchema = new Schema (
    {
        title: String,
        description: String,
        price: Number,
        giftFrom: String,
        photoURL: String
    }
)
const StoreSchema = new Schema (
    {
        storeName: String,
        storeAddress: [
            {
                streetNumber: Number,
                streetName: String,
                city: String,
                state: String,
                zip: Number
            }
        ],
        gifts: [GiftSchema]
    }
)
const UserSchema = new Schema (
    {
        firstName: String,
        lastName: String,
        username: String,
        email: String,
        photoURL: String,
        stores: [StoreSchema]
    }
)

const User = mongoose.model('User', UserSchema)


module.exports = {
    UserSchema,
    StoreSchema,
    GiftSchema
  }