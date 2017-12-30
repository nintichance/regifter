const express = require('express')
router = express.Router()

const User = require('../db/models/user')

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

router.get('/:userId', (req, res) => {
    const userId = req.params.userId
    
    User.findById(userId)
      .then((user) => {
        res.render('users/show', {
            user
        })
      })
      .catch((err) => {
        console.log(err)
      })
  })

  router.get('/:userId/edit', (req,res)=>{
      const userId = req.params.userId 
      console.log(userId)
      User.findById(userId)
      .then((user)=>{
          res.render('users/edit', {
              user
          })
      })
  })

  router.get('/:userId/delete', (req, res) => {
    const userId = req.params.userId

    User.findByIdAndRemove(userId)
    .then(()=>{
        res.redirect('/users')
    })
    .catch((err)=>{
        console.log(err)
    })
})

router.put('/:userId', (req, res)=>{
    console.log('banana')
    const userId = req.params.userId
    const updatedUserInfo = req.body
    console.log(userId)
    console.log(updatedUserInfo)
      User.findByIdAndUpdate(userId, updatedUserInfo)
      .then(()=>{
          res.redirect(`/users/${userId}`)
      })
      .catch((err)=>{
          console.log(err)
      })
})

// router.put('/:userId', (request, response) => {
//     const userId = request.params.userId
//     const updatedUserInfo = request.body
  
//     User.findByIdAndUpdate(userId, updatedUserInfo, {new: true})
//       .then(() => {
//         response.redirect(`/users/${userId}`)
//       })
//   })


module.exports = router 