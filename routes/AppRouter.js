const Router = require('express').Router()

const AccountRouter = require('./AccountRouter')

Router.get('/', (req, res) => res.send('This is root!*'))

Router.use('/accounts', AccountRouter)


module.exports = Router