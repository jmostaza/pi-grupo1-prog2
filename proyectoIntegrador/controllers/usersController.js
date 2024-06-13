const db = require('../db/index')
const database = require('../database/models')
const users = database.User;
const bcrypt = require("bcryptjs");
const { validationResult } = require("express-validator")

let usersController = {

  //ESTE REGISTER MANDA A LA PAGINA DE REGISTRO
  showRegister: function (req, res) {
    return res.render("register")
  },

  // ESTE REGISTER REGISTA AL USER EN LA BASE DE DATOS
  register: function (req, res) {

    if (req.session.user != undefined) { //si hay un usuario logueado
      res.redirect("/")
    }

    let errors = validationResult(req);
    if (!errors.isEmpty()) { // pregunto si hay errores 
      console.log("errors : ", JSON.stringify(errors, null, 4));
      return res.render("register", { errors: errors.mapped(), old: req.body })
    } else {
      let user = {
        email: req.body.email,
        usuario: req.body.usuario,
        contrasenia: bcrypt.hashSync(req.body.contrasena, 10),
        fecha: req.body.fechaNac,
        dni: req.body.dni,
        foto: req.body.fotoPerfil
      }
      users.create(user)
        .then(function (user) {
          console.log("user : ", user)
          return res.redirect("/users/login")
        })
        .catch(function (error) {
          console.log(error);
        })
    }
  },

  showLogin: function (req, res) {
    return res.render('login')
  },

  login: function (req, res) {

    let resultValidation = validationResult(req)
    if (!resultValidation.isEmpty()) {
      console.log("resultValidation", resultValidation);
      return res.render('login', { errors: resultValidation.mapped(), oldData: req.body })
    } else {
      //Busco el usuario que se quiere loguear
      users.findOne({
        where: [{
          email: req.body.email,
        }]
      })
        .then(function (usuario) {
          console.log('PASSWORD : ', usuario.contrasenia);
          let validPassword = bcrypt.compareSync(req.body.contrasena, usuario.contrasenia)
          console.log('validPassword? :', validPassword);
          req.session.user = usuario
          // si tildo recordarme --> creamos la cookie
          if (req.body.recordarme != undefined) {
            // console.log("acaaaaa",usuario);

            res.cookie("userId", usuario.id, { maxAge: 1000 * 60 * 5 })
          }
          return res.redirect('/')
        })
        .catch(function (error) {
          console.log(error);
        });

    }

  },
  // ACA VA LOGOUT

  profile: function (req, res) {
    res.render('profile', { listado: db });
  },

  profileEdit: function (req, res) {
    res.render('profileEdit', { listado: db });
  },

  prueba: function (req, res) {
    database.User.findAll()
      .then(function (data) {
        console.log('datos de user:', JSON.stringify(data, null, 4));
        res.send(data)
      })
      .catch(function (e) {
        console.log(e);
      })

  }
}

module.exports = usersController;