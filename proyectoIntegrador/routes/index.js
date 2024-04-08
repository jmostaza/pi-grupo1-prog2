var express = require('express');
var router = express.Router();
let db= require('../db/index');

/* GET home page. */
router.get('/', function(req, res) {
  res.send(db);
});

module.exports = router;
