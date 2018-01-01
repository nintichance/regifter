const mongoose = require('mongoose')
const Schema = mongoose.Schema
 

// mongoose.connect('mongodb://localhost/regifter_app', {
//   useMongoClient: true
// })

mongoose.Promise = global.Promise

mongoose.plugin(schema => { schema.options.usePushEach = true })

// const db = mongoose.connection

// db.on('error', (err) => {
//     console.log(err)
// })

// db.once('open', () => {
//     console.log("database has been connected!")
// })

const GiftSchema = new Schema (
    {
        title: {
            type: String,
        },
        description: {
            type: String
        },
        price: {
            type: Number
        },
        giftFrom: {
            type: String
        },
        photoUrl: {
            type: String,
            default: 'https://cdn.vectorstock.com/i/thumb-large/66/69/santa-hat-vector-296669.jpg'
        },
    },
    {
        timestamps: {}
    }
)
const StoreSchema = new Schema (
    {
        name: {
            type: String,
        },
        storeAddress: {
            type: String
        },
        giftsToReturn: [GiftSchema]
    }
)
const UserSchema = new Schema (
    {
        firstName: {
            type: String,
        },
        lastName: {
            type: String,
        },
        username: {
            type: String,
        },
        email: {
            type: String
        },
        photoUrl: {
            type: String,
            default: 'https://cdn.vectorstock.com/i/thumb-large/66/69/santa-hat-vector-296669.jpg'
        },
        stores: [StoreSchema]
    },
    {
        timestamps: {}
    }
)

const User = mongoose.model('User', UserSchema)

module.exports = {
    UserSchema,
    StoreSchema,
    GiftSchema
  }