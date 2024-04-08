let express= require('express');
let router= express.Router()
let db= require('../db/index');
let productosControllers = require ('../controllers/productosControllers');

router.get('/', productosControllers.productos);
router.get('/cafes', productosControllers.cafes);

router.get('/matcha', productosControllers.matcha);
router.get('/detalle/:id', productosControllers.detalle);

module.exports= router;