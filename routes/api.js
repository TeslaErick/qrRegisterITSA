var express = require('express');
var router = express.Router();
var cuser   = require('../controllers/users_controllers');
var conf  = require('../config/config')

router.get('/', function(req, res, next) {
    cuser.getListaAlumnos(req, res, conf.modelSQL);
  });

module.exports = router;