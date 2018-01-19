var express = require('express');
var router = express.Router();
var cuser   = require('../controllers/users_controllers');
var conf  = require('../config/config')

// Alumnos
router.get('/', function(req, res, next) {
  res.render('index', { 
    title:  'QRegister',
    text:   'Ejemplo de ruta valida http://localhost:3001/api/v1/Alumnos'
  });
});

router.get('/Alumnos', function(req, res, next) {
  cuser.getListaAlumnos(req, res, conf.modelSQL);
});

router.post('/Alumnos/Insert/', //:matr/:nom/:apell/:carr/:grup/:aula/:carg
  function(req, res, next) {
    cuser.getInsertAlumnos(req, res,req.query.matricula.toUpperCase(),
                                    req.query.nombre.toUpperCase(),
                                    req.query.apellidos.toUpperCase(),
                                    req.query.carrera.toUpperCase(),
                                    req.query.grupo.toUpperCase(),
                                    req.query.aula.toUpperCase(),
                                    req.query.cargo.toUpperCase(), 
                                    conf.modelSQL);
    console.log(req.query.matricula)
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