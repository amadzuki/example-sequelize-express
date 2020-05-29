const User = require("../../models/user")

module.exports = {
  getAll: (req, res, next) => {
    res.send({
      message: "Get all users",
      users: [],
    })
  },

  getById: (req, res, next) => {
    res.send({
      message: "Get user by id",
      users: {},
    })
  },
}
