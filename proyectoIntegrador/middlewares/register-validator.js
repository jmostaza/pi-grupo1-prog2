const { body } = require("express-validator");
const database= require('../database/models')
const user= database.User


const registerValidation = [

    body("email")
        .notEmpty()
        .withMessage("Debes completar este campo")
        .bail()
        .isEmail()
        .withMessage("Debes ingresar un email válido")
        .custom(function (value, { req }) {
            return user.findOne({
                where: {email : req.body.email}, //no pongo value porque no está ese atributo en el input del email 
            })
            .then(function (user) {
                console.log("user: ", JSON.stringify(user,null,4));
                if (user)
                    throw new Error ("El email ingresado ya existe")
            })
        }),

    body("usuario")
        .notEmpty()
        .withMessage("Debes ingresar un nombre de usuario"),

    body("contrasena")
        .notEmpty()
        .withMessage("Debes ingresar una contraseña")
        .bail()
        .isLength({min: 4})
        .withMessage("Este campo debe contener al menos 4 caracteres")
];

module.exports= registerValidation;