const { Weblink } = require('../models')

const getOne = async (req, res) => {
  const entityId = req.params.id
  try {
    const entity = await Weblink.findByPk(entityId)
    res.send(entity)
  } catch (error) {
    throw error
  }
}

const updateOne = async (req, res) => {
  console.log("HIT updateWeblink")
  try {
    let entity = parseInt(req.params.id)
    let updatedEntity = await Weblink.update(req.body, {
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
    await Weblink.destroy({
      where: { id: entityId }
    })
    res.send({
      message: `Deleted weblink with id of ${entityId}`,
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
