let express= require('express');
let router= express.Router()
let database= require('../database/models')
let productosController = require ('../controllers/productosController');


router.get('/detalle/:id', productosController.detalle);
router.get('/productAdd', productosController.productAdd);
router.get('/searchResults' , productosController.searchResults);

// router.get('/prueba', productosController.prueba)

module.exports= router;