'use strict'
var mongoose = require('mongoose');
var port='3600';
mongoose.promise=global.Promise;
mongoose.set("strictQuery",false);
var app=require('./app');

//mongoose.connect('mongodb://localhost:27017/concesionario')
mongoose.connect('mongodb://127.0.0.1:27017/concesionario')
.then(()=>{
    console.log("Conexion establecida con la BDD");
    app.listen(port,()=>{        
        console.log("Conexión establecida en url: localhost:3600 o 127.0.0.1:3600");
    })
    
})
.catch(err=>console.log(err))