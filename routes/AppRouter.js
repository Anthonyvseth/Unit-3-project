const Router = require('express').Router()

const AccountRouter = require('./AccountRouter')
const TodoRouter = require('./TodoRouter')
const WeblinkRouter = require('./WeblinkRouter')

Router.get('/', (req, res) => res.send('This is root!*'))

Router.use('/accounts', AccountRouter)
Router.use('/todos', TodoRouter)
Router.use('/weblinks', WeblinkRouter)

module.exports = Router