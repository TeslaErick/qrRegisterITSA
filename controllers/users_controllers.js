var conn    =   require('../models/coon_model');
var query   =   require('../models/query_model');
var path    =   require('path');
var fs      =   require('fs');
var QRCode  =   require('qrcode')


function getListaAlumnos(req, res, conf) {
    conn.exeConnDb(query.SQLQuery.Alumnos, 
    (data, err) =>  {
        if (err) {
            res.status(500).send({
                message :   `500: Error Interno al realizar consulta ${err}`
            })
        }else{
            // res.setHeader('Access-Control-Allow-Origin', '*');
            // // Request methods you wish to allow
            // res.setHeader('Access-Control-Allow-Methods', 'GET, POST, OPTIONS, PUT, PATCH, DELETE');
            // // Request headers you wish to allow
            // res.setHeader('Access-Control-Allow-Headers', 'X-Requested-With,content-type');
            // // Set to true if you need the website to include cookies in the requests sent
            // // to the API (e.g. in case you use sessions)
            // res.setHeader('Access-Control-Allow-Credentials', true);
            res.writeHead(200,{"Content-Type" : "application/json"});
            res.status(200).write(JSON.stringify(data));
        }
        res.end();
    }, conf)
}

function getInsertAlumnos(req, res, matr, nom, apell, carr, grup, aula, cargo, conf) {
    conn.exeConnDb(query.SQLQuery.InstAlumnos + `('${matr}','${nom}','${apell}','${carr}','${grup}','${aula}','${cargo}')`,
    (data, err) =>  {
        if (err) {
            res.status(500).send({
                message :   `500: Error Interno al realizar consulta ${err}`,
                //query: query.SQLQuery.InstAlumnos + `('${matr}','${nom}','${apell}','${carr}','${grup}','${aula}','${cargo}')`
            })
        }else{
            var pat = '../qrRegisterITSA/save/'+ matr +'_'+ nom+'.png'
            var info = `${matr}`
            QRCode.toFile(pat,info,{color: {dark: '#00F', light: '#0000'}},(err) => {
                if (!err) console.log('done')//es.status(200).send({ message :   `Alumno Ingresado Correctamente`})
            })
            res.status(200).send({ message :   `Alumno Ingresado Correctamente`})
        }
        res.end();
    }, conf)
}

function getUpdateAlumnos(req, res, matr, nom, apell, carr, grup, aula, cargo, conf) {
    conn.exeConnDb(query.SQLQuery.InstAlumnos + '('+ matr +','+ nom +','+ apell +','+ carr +','+ grup +','+ aula +','+ cargo +')',
    (data, err) =>  {
        if (err) {
            res.status(500).send({
                message :   `500: Error Interno al realizar consulta ${err}`
            })
        }else{
            res.status(200).send({
                message :   `Alumno Ingresado Correctamente`
            })
        }
        res.end();
    }, conf)
}

function getDeleteAlumnos(req, res, matr, conf) {
    conn.exeConnDb(query.SQLQuery.InstAlumnos + '('+ matr +','+ nom +','+ apell +','+ carr +','+ grup +','+ aula +','+ cargo +')',
    (data, err) =>  {
        if (err) {
            res.status(500).send({
                message :   `500: Error Interno al realizar consulta ${err}`
            })
        }else{
            res.status(200).send({
                message :   `Alumno Ingresado Correctamente`
            })
        }
        res.end();
    }, conf)
}

function getListaCanones(req, res, conf) {
    conn.exeConnDb(query.SQLQuery.Cañones, (data, err) =>  {
        if (err) {
            res.status(500).send({
                message :   `500: Error Interno al realizar consulta ${err}`
            })
        }else{
            res.writeHead(200,{"Content-Type" : "application/json"});
            res.status(200).write(JSON.stringify(data));
        }
        res.end();
    }, conf)
}


module.exports = {
    getListaAlumnos,
    getInsertAlumnos,
    getListaCanones
}