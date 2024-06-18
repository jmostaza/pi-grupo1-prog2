const { body } = require("express-validator");
const database= require('../database/models')
const bcryptjs = require("bcryptjs");
const user= database.User;

const loginValidation = [

    body('email')
    .notEmpty()
    .withMessage('Debes completar con tu Email')
    .bail() // para que me llegue solo el primer error
    .isEmail()
    .withMessage('Debes escribir un formato de correo valido')
    .custom(function (value, {req}) { //value es lo que ingresa el usuario
        return user.findOne({
            where:{email:value}
        })
        .then(function (userToLogin){
            if (!userToLogin) {
                throw new Error ("No existe un usuario con este Email")
            }
        })
    }),

    body('contrasena')
    .notEmpty()
    .withMessage("Debes introducir una contraseña")
    .custom(function (value,{req}) {
        return user.findOne({
            where: {email:req.body.email}
        })
        .then(function (user) {
            // console.log("user: ", JSON.stringify(user,null,4));
            if (user) {
                const passwordOk = bcryptjs.compareSync(value,user.contrasenia);
                if (!passwordOk) {
                    throw new Error ("Contraseña incorrecta")
                }
            }
        })
    })
    
    
];

module.exports = loginValidation;