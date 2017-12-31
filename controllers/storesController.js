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
    res.render('stores/new')
})

// router.post('/', (req, res)=>{
//     const newStore = new Store ({
//         name: req.body.name,
//         storeAddress: req.body.storeAddress,
//     })
//     newStore.save()
//     .then(()=>{
//         console.log("Saved new store to the database")
//         res.redirect(`/users/${userId}`)
//     })
//     .catch((err)=>{
//         console.log(err)
//     })
// })


module.exports = router 