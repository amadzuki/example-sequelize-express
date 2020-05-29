const models = require("../../models")
const User = models.User

module.exports = {
  getAll: async (req, res, next) => {
    const users = await User.findAll()

    res.send({
      message: "Get all users",
      users: users,
    })
  },

  getById: (req, res, next) => {
    res.send({
      message: "Get user by id",
      users: {},
    })
  },
}
