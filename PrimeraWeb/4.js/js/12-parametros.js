'use strict'

// parametros REST y SPREAD

function listadoAutos(autos1, autos2, ...resto_de_autos){
    console.log("Auto 1: " + autos1);
    console.log("Auto 2: " + autos2);
    console.log(resto_de_autos);
}

listadoAutos("Ford", "Chevrolet", "Toyota", "Nissan", "Honda");

var autor = ["Kia", "Pedro", "Luis"];
listadoAutos(...autor, "jeep");