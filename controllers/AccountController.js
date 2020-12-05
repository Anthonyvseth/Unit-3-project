const { User, Account, Profile } = require('../models')

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
    const entity = await Account.findByPk(entityId)
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
      }}
    )
    res.send(account)
  } catch (error) {
    console.log(error)
    return false
  }
  // response.status(401).send({ msg: 'Unauthorized' })
}

module.exports = {
  getAll,
  getOne,
  createOne,
  updateOne,
  deleteOne,
  signIn
}
