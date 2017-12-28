const mongoose = require('mongoose')
const Schema = mongoose.Schema

// mongoose.connect('mongodb://localhost/regifter_app', {
//   useMongoClient: true
// })

mongoose.Promise = global.Promise

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
            required: [true, 'Gift title is required!']
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
        }
    },
    {
        timestamps: {}
    }
)
const StoreSchema = new Schema (
    {
        name: {
            type: String,
            required: [true, 'Store name is required!']
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
            required: [true, 'First name is required!']
        },
        lastName: {
            type: String,
            required: [true, 'Last name is required!']
        },
        username: {
            type: String,
            required: [true, 'Username is required!']
        },
        email: {
            type: String
        },
        photoURL: {
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