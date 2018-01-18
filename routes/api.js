var express = require('express');
var router = express.Router();
var cuser   = require('../controllers/users_controllers');
var conf  = require('../config/config')

// Alumnos
router.get('/Alumnos', function(req, res, next) {
  cuser.getListaAlumnos(req, res, conf.modelSQL);
});

router.get('/Alumnos/Insert/', function(req, res, next) {
  cuser.getListaAlumnos(req, res, conf.modelSQL);
});

router.get('/Alumnos/Update', function(req, res, next) {
  cuser.getListaAlumnos(req, res, conf.modelSQL);
});

router.get('/Alumnos/Delete/:Matr', function(req, res, next) {
  cuser.getListaAlumnos(req, res, conf.modelSQL);
});


// cañones
router.get('/Canones', function(req, res, next) {
  cuser.getListaCanones(req, res, conf.modelSQL);
});

router.get('/Canones/Insert', function(req, res, next) {
  cuser.getListaCanones(req, res, conf.modelSQL);
});

router.get('/Canones/Update', function(req, res, next) {
  cuser.getListaCanones(req, res, conf.modelSQL);
});

router.get('/Canones/Delete/:NoSerieAct', function(req, res, next) {
  cuser.getListaCanones(req, res, conf.modelSQL);
});


router.get('/insert/user/:mat/:nombre/:apell/:sem/:dir/:tel', function(req, res, next) {
    
  });

router.get('/update/user/:mat/:nombre/:apell/:sem/:dir/:tel', function(req, res, next) {
    
  });

router.get('/delete/user/:mat', function(req, res, next) {
    
  });
module.exports = router;