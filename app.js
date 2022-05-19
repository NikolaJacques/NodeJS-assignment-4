const express = require('express')
const app = express()
const bodyParser = require('body-parser')
const userRoutes = require('./routes/users')
const homeRoutes = require('./routes/home')
const userAddedRoutes = require('./routes/userAdded')
const { userAddedRouter } = userAddedRoutes

app.set('view engine', 'ejs')
app.use(bodyParser.urlencoded({ extended: false }));
app.use(express.static('public'))
app.use(userRoutes)
app.use(userAddedRouter)
app.use(homeRoutes)

app.listen(3000)
