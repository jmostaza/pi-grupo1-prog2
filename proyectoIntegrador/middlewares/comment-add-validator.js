const { body } = require("express-validator");
const database= require('../database/models');



let commentValidations= [
    body("comentario") 
        .notEmpty()
        .withMessage("No puede enviar un comentario vacío.")
        .isLength({min:3})
        .withMessage("El comentario debe tener al menos 3 caracteres.")
];

module.exports = commentValidations