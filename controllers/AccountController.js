const { Account, Todo, Weblink } = require('../models')
const { getCurrentWeather } = require('./OpenWeather')

const getAll = async (req, res) => {
  try {
    const entities = await Account.findAll()
    res.send(entities)
  } catch (error) {
    throw error
  }
}

const getOne = async (req, res) => {
  const entityId = req.params.id
  try {
    const entity = await Account.findByPk(entityId, {
      include: [
        {
          all: true,
          nested: true
        }
      ]
    })
    res.send(entity)
  } catch (error) {
    throw error
  }
}

const createOne = async (req, res) => {
  try {
    let entityBody = {
      ...req.body
    }
    let entity = await Account.create(entityBody)
    res.send(entity)
  } catch (error) {
    throw error
  }
}

const updateOne = async (req, res) => {
  console.log(`HIT account UpdateOne:`, req.body)
  try {
    let entity = parseInt(req.params.id)
    let updatedEntity = await Account.update(req.body, {
      where: { id: entity },
      returning: true
    })
    res.send(updatedEntity)

  } catch (error) {
    throw error
  }
}

const deleteOne = async (req, res) => {
  try {
    let entityId = parseInt(req.params.id)
    await Account.destroy({
      where: { id: entityId }
    })
    res.send({
      message: `Deleted account with id of ${entityId}`,
      options: {
        deleted: true,
        recordId: entityId
      }
    })

  } catch (error) {
    throw error
  }
}

const signIn = async (req, res, next) => {
  const accountEmail = req.body.email
  const accountPassword = req.body.password
  try {
    const account = await Account.findOne({
      where: {
        email: accountEmail,
        password: accountPassword
      },
      include: [
        {
          model: Todo,
          as: 'todos',
        }
      ]
    }
    )
    res.send(account)
  } catch (error) {
    console.log(error)
    return false
  }
}

const createTodo = async (req, res) => {
  const accountId = req.params.account_id
  try {
    let todoBody = {
      accountID: accountId,
      ...req.body
    }
    let todo = await Todo.create(todoBody)
    res.send(todo)
  } catch (error) {
    throw error
  }
}

const createWeblink = async (req, res) => {
  const accountId = req.params.account_id
  console.log("HIT createWeblink with accountId: ", accountId)
  try {
    let weblinkBody = {
      accountID: accountId,
      ...req.body
    }
    let weblink = await Weblink.create(weblinkBody)
    res.send(weblink)
  } catch (error) {
    throw error
  }
}

const getWeather = async (req, res) => {
  console.log('HIT getWeather')
  const account = await getAccount(req.params.id)

  console.log('getWeather Zip: ', account)
  try {
    const weather = await getCurrentWeather(account.zipCode)
    console.log('Weather: ', weather)
    res.send(weather)
  } catch (error) {
    throw error
  }
}

const getAccount = async (accountId) => {
  try {
    const account = await Account.findByPk(accountId)
    return account
  } catch (error) {
    throw error
  }
}


module.exports = {
  getAll,
  getOne,
  createOne,
  updateOne,
  deleteOne,
  signIn,
  createTodo,
  createWeblink,
  getWeather
}
