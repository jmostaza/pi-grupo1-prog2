let express= require('express');
let router= express.Router()
let db= require('../db/index');
let productosController = require ('../controllers/productosController');

router.get('/', productosController.productos);
router.get('/cafes', productosController.cafes);

router.get('/matcha', productosController.matcha);
router.get('/detalle/:id', productosController.detalle);

module.exports= router;