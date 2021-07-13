var mongoose = require('mongoose');

var esquema = new mongoose.Schema({
    nombre: String,
    apellido: String,
    fechaNacimiento: mongoose.SchemaTypes.Mixed
});

module.exports = mongoose.model('usuarios',esquema); // primer parametro nombreColeccion en DB