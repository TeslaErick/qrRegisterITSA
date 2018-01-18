var express = require('express');
var router = express.Router();
var cuser   = require('../controllers/users_controllers');
var conf  = require('../config/config')

router.get('/', function(req, res, next) {
    cuser.getListaAlumnos(req, res, conf.modelSQL);
  });

router.get('/insert/user/:mat/:nombre/:apell/:sem/:dir/:tel', function(req, res, next) {
    
  });

router.get('/update/user/:mat/:nombre/:apell/:sem/:dir/:tel', function(req, res, next) {
    
  });

router.get('/delete/user/:mat', function(req, res, next) {
    
  });
module.exports = router;