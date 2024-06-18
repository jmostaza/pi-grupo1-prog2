const { body } = require("express-validator");
const database= require('../database/models');


const productAddValidations = [
body('foto')
    .notEmpty()
    .withMessage('Este campo es obligatorio'),

body('nombre_producto')
    .notEmpty()
    .withMessage('Este campo es obligatorio'),

body('descripcion')
    .notEmpty()
    .withMessage('Este campo es obligatorio')
];

module.exports= productAddValidations;