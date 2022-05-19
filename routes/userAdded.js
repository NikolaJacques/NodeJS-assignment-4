const router = require('express').Router()
const data = []

router.post('/add-user', (req,res,next) => {
    data.push(req.body.username)
    res.status(302).redirect('/user-added')
})

router.get('/user-added', (req,res,next) => {
    res.status(201).render('userAdded', {
        pageTitle: 'User added',
        cssPaths: ['css/main.css', 'css/userAdded.css'],
        scriptPaths: ['scripts/redirecting.js']
    })
})

module.exports = {
    userAddedRouter: router,
    data: data
}