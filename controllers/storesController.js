const express = require('express')
router = express.Router({mergeParams: true})

const User = require('../db/models/user')

router.get('/', (req, res)=>{
    const userId = req.params.userId
    User.findById(userId)
    .then((user)=>{
        res.render('stores/index', {
            userFullName: `${user.firstName} ${user.storeAddress}`,
            userId: user._id,
            stores: user.stores,
            userPhoto: user.photoUrl,
            pageTitle: 'Stores'
        })
    })
    .catch((err)=>{
        console.log(err)
    })
})

router.get('/new', (req, res)=>{
    const userId = req.params.userId
    res.render('stores/new', {
        userId,
        pageTitle: 'New_Store'
    })
})

router.post('/', (req, res)=>{
    const userId = req.params.userId
    const newStore = req.body

    User.findById(userId)
    .then((user)=>{
        user.stores.push(newStore)
        return user.save()
    })
    .then(()=>{
        console.log("Updated user store")
        res.redirect(`/users/${userId}/stores`)
    })
    .catch((err)=>{
        console.log(err)
    })
})

module.exports = router 