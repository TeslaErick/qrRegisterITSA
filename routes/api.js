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
    // cuser.getInsertAlumnos(req, res,req.body.Matricula.toUpperCase(),
    //                                 req.body.Nombre.toUpperCase(),
    //                                 req.body.Apellidos.toUpperCase(),
    //                                 req.body.Carrera.toUpperCase(),
    //                                 req.body.Grupo.toUpperCase(),
    //                                 req.body.Aula.toUpperCase(),
    //                                 req.body.Cargo.toUpperCase(), 
    //                                 conf.modelSQL);
    console.log(req.body);
    res.status(200).send({message: 'ok'})
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