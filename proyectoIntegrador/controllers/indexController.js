const db = require ('../db/index')

let indexController = {
    index : function(req, res) {
        res.render('index' , {listado:db});
      },
  
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

    searchResults : function(req, res) {
      res.render('searchResults' , {listado:db});
    }
}

module.exports= indexController;