'use strict'
var express=require('express');
var ConcesionarioController = require('../controllers/concesionario');
var router=express.Router();
var multipart=require('connect-multiparty');
var multiPartMiddleWare=multipart({uploadDir:'./uploads'})
//pagina de inicio
router.get('/home', ConcesionarioController.home);
//guardar informacion
router.post('/guardar-auto', ConcesionarioController.saveAuto);
//ver informacion de todos los autos
router.get('/autos', ConcesionarioController.getAutos);
//ver informacion de un solo auto 
router.get('/autos/:id', ConcesionarioController.getAuto);
//eliminar info
router.delete('/autos/:id', ConcesionarioController.deleteAuto);
//actualizar info
router.put('/autos/:id', ConcesionarioController.updateAuto);
//agregar imagenes:
router.post('/subir-imagen/:id', multiPartMiddleWare, ConcesionarioController.uploadImagen);
//Recuperar imagenes:
router.get('/obtener-imagen/:imagen', ConcesionarioController.getImagen);

//DEBER CLIENTES CRUDE
//Clientes:
//guardar informacion y agregar cliente
router.post('/guardar-cliente', ConcesionarioController.saveCliente);
//ver informacion de todos los clientes
router.get('/clientes', ConcesionarioController.getClientes);
//ver informacion de un solo cliente
router.get('/clientes/:id', ConcesionarioController.getCliente);
//eliminar info
router.delete('/clientes/:id', ConcesionarioController.deleteCliente);
//actualizar info
router.put('/clientes/:id', ConcesionarioController.updateCliente);


module.exports = router;