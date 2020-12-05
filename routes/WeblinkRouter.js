const Router = require('express').Router()
const controller = require('../controllers/WeblinkController')

Router.get('/:id', controller.getOne)
Router.put('/:id', controller.updateOne)
Router.delete('/:id', controller.deleteOne)

module.exports = Router