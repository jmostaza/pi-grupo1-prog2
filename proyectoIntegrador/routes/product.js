let express= require('express');
let router= express.Router()
let db= require('../db/index');
let productosController = require ('../controllers/productosController');


router.get('/detalle/:id', productosController.detalle);
router.get('/productAdd', productosController.productAdd);
router.get('/searchResults' , productosController.searchResults);

module.exports= router;