var express = require('express');
const usersController = require('../controllers/usersController');
var router = express.Router();
const registerValidation= require("../middlewares/register-validator");
const loginValidation = require ("../middlewares/login-validator");
const editProfileValidation= require('../middlewares/edit-profile-validator')

/* GET users listing. */
router.get('/', function(req, res, next) {
  res.send('respond with a resource');
});

router.get('/register', usersController.showRegister);
router.get('/login', usersController.showLogin);
router.get('/profile/:id', usersController.profile);
router.get('/profileEdit/:id', usersController.profileEdit);

router.post('/register', registerValidation, usersController.register);
router.post('/login', loginValidation, usersController.login);
router.post('/logout', usersController.logout);
router.post('/profileEdit/:id',editProfileValidation, usersController.update)


module.exports = router;
