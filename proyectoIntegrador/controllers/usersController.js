const database = require('../database/models')
const users = database.User;
const bcrypt = require("bcryptjs");
const { validationResult } = require("express-validator")

let usersController = {

  //ESTE REGISTER MANDA A LA PAGINA DE REGISTRO
  showRegister: function (req, res) {
    if (req.session.users != undefined) { //si hay un usuario logueado
      res.redirect("/")
    } else {
      return res.render("register")
    };
  },
  // ESTE REGISTER REGISTA AL USER EN LA BASE DE DATOS
  register: function (req, res) {

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
  logout: function (req, res) {
    //Destruir la sessión
    req.session.destroy();

    //Destruir la cookie
    res.clearCookie("userId");

    //redireccionar a home
    return res.redirect("/");
  },

  profile: function (req, res) {
    let id = req.params.id
    users.findByPk(id, {
      include: [
        // {association: 'comentario'},
        {
          association: 'producto',
          include: [
            { association: "comentario" }
          ]
        }
      ],
      order: [
        //como verifico que es esta primero el ultimo cargado???
        ['created_at', 'DESC']
      ]
    })

      .then(function (data) {
        // console.log('USERRR:', JSON.stringify(data,null,4));
        
        res.render('profile', { listado: data })
      })
      .catch(function (e) {
        console.log(e);
      })
  },

  profileEdit: function (req, res) {
    let id = req.params.id
    users.findByPk(id)
      .then(function (data) {
        if(req.session.user){
          if(id == req.session.user.id){
            console.log(req.session.user);
          res.render('profileEdit', { listado: data });
        }
        else{
          console.log(req.session.user);
          res.redirect('/')
        }
       
      }
      else{
        res.redirect('/')
      }
  }
)
    
      .catch(function (e) {
        console.log(e);
      })

  },
  update: function (req, res) {
    const id = req.params.id
    let usuario = {
      email: req.body.email,
      contrasenia: bcrypt.hashSync(req.body.contrasenia, 10),
      fecha: req.body.fecha,
      dni: req.body.nroDocumento,
      foto: req.body.foto,
      id: req.session.user.id
      

    }

    let errors = validationResult(req)
    if (!errors.isEmpty()) { // pregunto si hay errores 
      console.log("errors : ", JSON.stringify(errors, null, 4));
      return res.render('profileEdit', { errors: errors.mapped(), old: req.body })
    } else {
      console.log();
      users.update(usuario,
        {
        where: {id: req.params.id}
      })
        .then(function (data) {
          req.session.user= usuario
          console.log('USUARIOOO:' ,JSON.stringify(req.session.user, null,4));
          return res.redirect('/')
        })
        .catch(function (e) {
          console.log(e);
        })
    }
  }
}

module.exports = usersController;