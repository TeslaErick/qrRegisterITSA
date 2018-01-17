var conn    =   require('../models/coon_model');
var query   =   require('../models/query_model');

function getListaAlumnos(req, res, conf) {
    conn.exeConnDb(query.SQLQuery.Alumnos, (data, err) =>  {
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
    getListaCanones
}