const router = require('express').Router()

router.get('/', (req,res,next) => {
    res.status(201).render('home', {
        pageTitle: 'Home',
        cssPaths: ['css/main.css'],
        scriptPaths: ['scripts/fade.js']
    })
})

module.exports = router