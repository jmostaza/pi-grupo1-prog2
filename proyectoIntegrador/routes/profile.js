let express= require('express');
let router= express.Router()
let db= require('../db/index');
let productosControllers = require ('../controllers/productosControllers');

// router.get('/perfil', productosControllers.perfil)

module.exports= router;