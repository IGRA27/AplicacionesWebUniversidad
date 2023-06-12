'use strict'
//import Vue from 'vue' CONSULTAR
function mensaje(){
    console.log(Hola);
    alert("Bienvenido");
    return "OK";
}
//llamar funcion 
var resultado=mensaje()
console.log(resultado);

function suma(numero1, numero2){
    console.log("SUMA: "+(numero1+numero2));
}
suma(4,2);

function calculadora(numero1, numero2){
    console.log("SUMA: "+(numero1+numero2));
    console.log("RESTA: "+(numero1-numero2));
    console.log("PRODUCTO: "+(numero1*numero2));
    console.log("DIVISION: "+(numero1/numero2));
}
calculadora(5,2);