'use strict'
var Auto=require('../models/auto');
var Cliente=require('../models/cliente');
var fs=require('fs');
var path=require('path');

var controller = {
    home: function(req,res){
        return res.status(200).send({
            //eliminar corchetes y poner "<h1>Hola, bienvenido soy el controlador</h1>"
            message: "Soy la home"
        });
    },
    /*save:function(req,res){
        return res.status(200).send(
            "<h1>Hola mundo desde el controlador</h1>"
        );
    },*/
    
    //getAutos:function(req,res){
        /*
        Auto.find({}).sort().exec((err,autos)=>{
            if(err) return res.status(500).send({message:"Error al devolver los datos"});
            if(!autos) return res.status(404).send({message:"No hay autos para mostrar"});
            return res.status(200).send({autos});
        })*/
        //Auto.find({}).then(autos=>{})
    //}, 
    getAutos: async function (req, res) {

        try {
    
          const autos = await Auto.find({}).sort();
    
          if (autos.length === 0) {
    
            return res.status(404).send({ message: 'No hay autos para mostrar' });
    
          }
    
          return res.status(200).send({ autos });
    
        } catch (err) {
    
          return res.status(500).send({ message: 'Error al devolver los datos' });
    
        }
    
      },    
    

    /*saveAuto:function(req,res){
        var params=req.body;
        console.log(params);
        return res.status(200).send({
            message: "Soy el metodo saveAuto"
        });*/
        //return res.status(201).send(
        //    "<h2>Guardando datos de auto</h2>"
        //)
        /*
        return new Promise((resolve, reject) => {


        var auto=new Auto();
        var params=req.body;
        auto.marca=params.marca;
        auto.modelo=params.modelo;
        auto.color=params.color;
        auto.anio=params.anio;
        auto.precio=params.precio;

        auto.save()
        .then(autoStored=>{
            resolve({auto:autoStored});
        })
        .catch(err=>{
            reject(err);
        })

       
        })
        .then(data=>{
            return res.status(201).send(data);
        })
        .catch(err=>{
            return res.status(500).send({message: 'Error al guardar'});
        })
    } */

    saveAuto:async function(req,res){
        try{    
            var auto=new Auto();
            var params=req.body;
            auto.marca=params.marca;
            auto.modelo=params.modelo;
            auto.color=params.color;
            auto.anio=params.anio;
            auto.precio=params.precio;
            auto.imagen=null;

            const autoStored=await auto.save();
            if(!autoStored){
                return res.status(404).send({message: 'No se ha podido guardar el auto'});

            }
            return res.status(201).send({auto:autoStored});

        }catch(err){
            return res.status(500).send({message: 'Error al guardar'});
        }
    },

    getAuto:async function(req,res){
        
        try{
            var autoId=req.params.id;
            if(!auto){
                return res.status(404).send({message: 'El auto no existe'});
            }
            var auto=await Auto.findById(autoId);
           if(!auto){
                return res.status(404).send({message: 'El auto no existe'});
           }
            return res.status(200).send({auto});
        }catch(err){
            return res.status(500).send({message: 'Error al devolver los datos'});
        }
    },

    deleteAuto: async function(req,res){
        try{
            var autoId=req.params.id;
            var autoRemoved=await Auto.findByIdAndRemove(autoId);
            if(!autoRemoved){
                return res.status(404).send({message: 'El auto no se puede eliminar'});
            }
            return res.status(200).send({auto:autoRemoved});
        }catch(err){
            return res.status(500).send({message: 'Error al eliminar los datos'});
        }
    },
    updateAuto: async function(req,res){
        try{
            var auto = req.params.autoId;
            var update = req.body;
            var autoUpdated = await Auto.findByIdAndUpdate(auto, update, {new:true});
            if(!autoUpdated){
                return res.status(404).send({message: 'No se ha podido actualizar el auto'});
            }
            return res.status(200).send({auto: autoUpdated});

        }catch(err){
            return res.status(500).send({message: 'Error al actualizar los datos'});

        }        
    },
    uploadImagen:async function(req,res){

        try {
    
          var autoId=req.params.id;
    
          var fileName='Imagen no subida';
    
          if(req.files){
    
            var filePath=req.files.imagen.path;
    
            var fileSplit=filePath.split('\\');
    
            fileName=fileSplit[1];
    
            var extSplit=fileName.split('.');
    
            var fileExt=extSplit[1];
    
            if(fileExt==='png' || fileExt==='jpg' || fileExt==='jpeg' || fileExt==='gif'|| fileExt==='PNG'){
    
              var autoUpdated= await Auto.findByIdAndUpdate(autoId,{imagen:fileName},{new:true});
    
              if(!autoUpdated) return res.status(404).send({message:'El auto no existe y no se puede subir la imagen'});
    
              return res.status(200).send({auto:autoUpdated});
    
            }else{
    
              fs.unlink(filePath,(err)=>{
    
                return res.status(200).send({message:'Extensión no válida'});
    
              });
    
            }
    
          }else{
    
            return res.status(200).send({message: fileName});
    
          }
    
        } catch (err) {
    
          return res.status(500).send({ message: 'La imagen no se ha subido' });
    
        }
    
      },
    getImagen: async function(req,res){
        try {
            var file=req.params.imagen;
            var path_file='./uploads/'+file;

            var exists=await fs.promises.access(path_file)
            .then(()=>true)
            .catch(()=>false);
            if(exists) return res.sendFile(path.resolve(path_file));
            else return res.status(200).send({message: 'Image File not found'});           
        } catch (err) {
            return res.status(500).send({message: 'Error al devolver la imagen'});
            
        }
        
    },

    //CLIENTES:
    //guardar cliente:
    saveCliente:async function(req,res){
        try{    
            var cliente=new Cliente();
            var params=req.body;
            cliente.nombre=params.nombre;
            cliente.apellido=params.apellido;
            cliente.ci=params.ci;
            cliente.telefono=params.telefono;
            cliente.direccion=params.direccion;            

            const clienteStored=await cliente.save();
            if(!clienteStored){
                return res.status(404).send({message: 'No se ha podido guardar el cliente'});

            }
            return res.status(201).send({cliente:clienteStored});

        }catch(err){
            return res.status(500).send({message: 'Error al guardar'});
        }
    },

    //Ver todos los clientes
    getClientes: async function (req, res) {
        try {    
          const clientes = await Cliente.find({}).sort();    
          if (clientes.length === 0) {    
            return res.status(404).send({ message: 'No hay clientes para mostrar' });    
          }    
          return res.status(200).send({ clientes });    
        } catch (err) {    
          return res.status(500).send({ message: 'Error al devolver los datos' });    
        }    
      },   
      
      //Ver cliente mediante id:
      getCliente:async function(req,res){        
        try{
            var clienteId=req.params.id;
            if(!cliente){
                return res.status(404).send({message: 'El cliente no existe'});
            }
            var auto=await Auto.findById(clienteId);
           if(!cliente){
                return res.status(404).send({message: 'El cliente no existe'});
           }
            return res.status(200).send({cliente});
        }catch(err){
            return res.status(500).send({message: 'Error al devolver los datos'});
        }
    },

    //Borrar cliente
    deleteCliente: async function(req,res){
        try{
            var clienteId=req.params.id;
            var clienteRemoved=await Cliente.findByIdAndRemove(clienteId);
            if(!clienteRemoved){
                return res.status(404).send({message: 'El cliente no se puede eliminar'});
            }
            return res.status(200).send({cliente:clienteRemoved});
        }catch(err){
            return res.status(500).send({message: 'Error al eliminar los datos'});
        }
    },

    //Actualizar Cliente
    updateCliente: async function(req,res){
        try{
            var cliente = req.params.clienteId;
            var update = req.body;
            var clienteUpdated = await Cliente.findByIdAndUpdate(cliente, update, {new:true});
            if(!clienteUpdated){
                return res.status(404).send({message: 'No se ha podido actualizar el cliente'});
            }
            return res.status(200).send({cliente: clienteUpdated});

        }catch(err){
            return res.status(500).send({message: 'Error al actualizar los datos'});

        }        
    },
    



}

module.exports = controller;