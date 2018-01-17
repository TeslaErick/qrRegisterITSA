var mongoose = require('../config/config'),
    Schema =  mongoose.Schema;

var Users_schema = new Schema({
    matricula   :   String,
    nombre      :   String,
    apellidos   :   String,
    semestre    :   String,
    tipoSangre  :   String,
    direccion   :   String,
    telefono    :   String,
    tutor       :   String,
    teltutor    :   String
})





module.exports  =   Users_schema