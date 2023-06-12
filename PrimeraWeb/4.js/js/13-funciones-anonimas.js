'use strict'
function nombrePersona(nombre){
    console.log("Nombre: " + nombre);
}
nombrePersona("Juan");

var nombreP =(nombre)=>{
    return "El nombres es: " + nombre;
}

console.log(nombreP("Ricardo"));

function cuadrado(numero){
    console.log("El cuadrado de " + numero + " es: " + (numero*numero));
}

cuadrado(3);
var potencia=(numero)=>{
    console.log("La potencia de " + numero + " es: " + (numero*numero));
}
console.log(potencia(4));

function sumar(num1,num2){
    console.log("La suma de " + num1 + " y " + num2 + " es: " + (num1+num2));
}
sumar(2,3);

var suma=(num1,num2)=>{ 
    console.log("La suma de " + num1 + " y " + num2 + " es: " + (num1+num2));
}
console.log(suma(2,3));