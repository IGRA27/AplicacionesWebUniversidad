'use strict'
window.addEventListener('load', () => {
    //alamacenar informacion de forma local
    if(typeof(Storage)!='undefined'){
        console.log("Localstorage disponible");
    }else{
        console.log("Localstorage no disponible");
    }
    //guardar datos
    //key-value
    localStorage.setItem('nombre', "Luis");
    //recuperar 
    console.log(localStorage.getItem('nombre'));
    //guardar un json 

    var user={
        nombre:"ana",
        correo:"ana@epn.edu.ec",
        sitio:"fis.epn.edu.ec"
    };
    console.log(user);
    //convertir de json a string 
    localStorage.setItem('user', JSON.stringify(user));
    //como cadena de texto 
    console.log(localStorage.getItem("user"));
    //convertir de string a json  
    var users=JSON.parse(localStorage.getItem("user"));
    console.log(users);
    //borrar datos
    localStorage.removeItem('nombre');
    //vaciar todo
    localStorage.clear();

});