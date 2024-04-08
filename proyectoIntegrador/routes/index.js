var express = require('express');
var router = express.Router();
let db= require('../db/index');
let productosControllers = require ('../controllers/productosControllers');

/* GET home page. */
router.get('/', productosControllers.index);

module.exports = router;
