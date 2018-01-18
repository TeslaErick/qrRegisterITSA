var express = require('express');
var router = express.Router();
var cuser   = require('../controllers/users_controllers');
var conf  = require('../config/config')

// Alumnos
router.get('/Alumnos', function(req, res, next) {
  cuser.getListaAlumnos(req, res, conf.modelSQL);
});

router.get('/Alumnos/Insert/:matr/:nom/:apell/:carr/:grup/:aula/:carg',
  function(req, res, next) {
    cuser.getInsertAlumnos(req, res,req.params.matr.toUpperCase(),
                                    req.params.nom.toUpperCase(),
                                    req.params.apell.toUpperCase(),
                                    req.params.carr.toUpperCase(),
                                    req.params.grup.toUpperCase(),
                                    req.params.aula.toUpperCase(),
                                    req.params.carg.toUpperCase(), conf.modelSQL);
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

module.exports = router;