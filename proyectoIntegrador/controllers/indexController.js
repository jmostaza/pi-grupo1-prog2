const database = require("../database/models")
const users = database.User
const products = database.Product

let indexController = {
  index: function (req, res) {
    products.findAll({
      include: [
        { association: "usuario" },
      ],
      order: [
        ["created_at", "DESC"]
      ]
    })
      .then(function (productos) {
        //console.log("RELACIÓN: ", JSON.stringify(productos,null,4))
        return res.render("index", { listado: productos })
      })
      .catch(function (error) {
        console.log(error);
      })
  }
}

module.exports = indexController;