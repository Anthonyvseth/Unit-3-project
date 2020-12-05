const { Todo } = require('../models')

const getOne = async (req, res) => {
  const entityId = req.params.id
  try {
    const entity = await Todo.findByPk(entityId)
    res.send(entity)
  } catch (error) {
    throw error
  }
}

const updateOne = async (req, res) => {
  try {
    let entity = parseInt(req.params.id)
    let updatedEntity = await Todo.update(req.body, {
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
    await Todo.destroy({
      where: { id: entityId }
    })
    res.send({
      message: `Deleted todo with id of ${entityId}`,
      options: {
        deleted: true,
        recordId: entityId
      }
    })

  } catch (error) {
    throw error
  }
}

module.exports = {
  getOne,
  updateOne,
  deleteOne
}
