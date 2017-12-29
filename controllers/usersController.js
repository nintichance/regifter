const express = require('express')
router = express.Router()

const User = require('../db/models/user')

router.get('/', (req, res)=>{
    User.find()
    .then((users)=>{
        res.render('users/index', {
            users
        })
    })
    .catch((err)=>{
        console.log(err)
    })
})
router.get('/new', (req, res)=>{
   res.render('users/new')
})
router.post('/', (req, res)=>{
    const newUser = new User ({
        firstName: req.body.firstName,
        lastName: req.body.lastName,
        username: req.body.username,
        email: req.body.email,
        photoUrl: req.body.photoUrl
    })
    newUser.save()
    .then(()=>{
        console.log("Saved new user to the database")
        res.redirect('/users')
    })
    .catch((err)=>{
        console.log(err)
    })
})



module.exports = router 