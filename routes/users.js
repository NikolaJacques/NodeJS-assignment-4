const router = require('express').Router()
const userAddedRoutes = require('./userAdded')
const { data } = userAddedRoutes

router.get('/users', (req,res,next) => {
    res.status(201).render('users', {
        users: data, 
        pageTitle: 'Userss',
        cssPaths: ['css/main.css','css/users.css'],
        scriptPaths: ['scripts/fade.js']
    })
})

module.exports = router