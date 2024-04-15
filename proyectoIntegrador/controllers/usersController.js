const db = require ('../db/index')

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
  }

}

module.exports= usersController;