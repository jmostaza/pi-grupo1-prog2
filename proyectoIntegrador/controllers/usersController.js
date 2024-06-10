const db = require ('../db/index')
const database= require('../database/models')

let usersController = {
login : function(req, res) {
    res.render('login' , {listado:db});
  },

  register : function(req, res) {
    res.render('register' , {listado:db});
  },

  profile : function(req, res) {
    res.render('profile' , {listado:db});
  },

  profileEdit : function(req, res) {
    res.render('profileEdit' , {listado:db});
  },

    prueba: function(req,res){
    database.User.findAll()
    .then(function(data){
      console.log('datos de user:', JSON.stringify(data, null, 4));
      res.send(data)
    })
    .catch(function(e){
      console.log(e);
    })

}
}

module.exports= usersController;