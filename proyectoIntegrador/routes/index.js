var express = require('express');
var router = express.Router();
let db= require('../db/index');
let indexController = require ('../controllers/indexController');


/* GET home page. */
router.get('/', indexController.index);


module.exports = router;
