var express = require('express');
const usersController = require('../controllers/usersController');
var router = express.Router();

/* GET users listing. */
router.get('/', function(req, res, next) {
  res.send('respond with a resource');
});

router.get('/register', usersController.register);
router.get('/login', usersController.login);
router.get('/profile', usersController.profile);
router.get('/profileEdit', usersController.profileEdit);

router.get('/prueba', usersController.prueba)

module.exports = router;
