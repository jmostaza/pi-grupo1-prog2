var express = require('express');
var router = express.Router();
let db= require('../db/index');
let indexController = require ('../controllers/indexController');


/* GET home page. */
router.get('/', indexController.index);

router.get('/register', indexController.register);
router.get('/login', indexController.login);
router.get('/profile', indexController.profile);
router.get('/profileEdit', indexController.profileEdit);
module.exports = router;
