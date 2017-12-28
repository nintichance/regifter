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





module.exports = router 