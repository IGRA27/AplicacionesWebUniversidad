'use strict';
var mongoose=require('mongoose');
var Schema=mongoose.Schema;
var ClienteSchema=Schema({
    nombre: String,
    apellido: String,
    ci: String,
    telefono: String,
    direccion: String

});

module.exports=mongoose.model('Cliente',ClienteSchema);