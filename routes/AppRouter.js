const Router = require('express').Router()

const AccountRouter = require('./AccountRouter')
const TodoRouter = require('./TodoRouter')

Router.get('/', (req, res) => res.send('This is root!*'))

Router.use('/accounts', AccountRouter)
Router.use('/todos', TodoRouter)


module.exports = Router