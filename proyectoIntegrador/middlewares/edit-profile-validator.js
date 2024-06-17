const {body}= require('express-validator');
const database= require('../database/models')
const user= database.User

let editProfileValidation= [
    body('email')
    .notEmpty()
    .withMessage('Debes completar este campo').bail()
    .isEmail()
    .withMessage('Debes ingresar un email valido').bail()
    .custom(function(value, {req}){
        return user.findOne({
            where:{
                email: req.body.email,
            }
        })
        .then(function(user){
            if(user){
                throw new Error('El email ingresado ya existe')
            }
           
        })
    }),
    body('contrasenia')
    .custom(function(value, {req}){
        if(value && value.length<4){
            throw new Error('La contraseña debe tener al menos 4 caracteres')
        }
        return true
    })
    

]

module.exports= editProfileValidation;