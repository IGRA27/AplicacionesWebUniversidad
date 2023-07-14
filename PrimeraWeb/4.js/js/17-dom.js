'use strict'
//DOM - DOCUMENT OBJECT MODL
//Todos los elementos existen en una pagina, 2 formas de encontrar los elementos

//PRIMERA FORMA:
/*
*
var caja=document.getElementById('micaja');
console.log(caja);
 */
//SEGUNDA FORMA:
var caja=document.querySelector('#micaja');
console.log(caja);
caja.style.background="green";
caja.style.color="white";
caja.style.pading="15px";
caja.innerHTML="Nuevo Texto";
caja.className="test";
//Encontrar elementos por su etiqueta:
var todosLosDivs=document.getElementsByTagName('div');
console.log(todosLosDivs);

var contenidoDiv2=todosLosDivs[2].textContent;
console.log(contenidoDiv2);

var contenidoDiv3=todosLosDivs[3];
contenidoDiv3.innerHTML="otro texto";
contenidoDiv3.style.background="red";

var seccion=document.querySelector("#miSeccion");
var valor;
for(valor in todosLosDivs) {
    if(typeof todosLosDivs[valor].textContent=="string"){
        var parrafo=document.createElement('p');
        var texto=document.createTextNode(todosLosDivs[valor].textContent);
        parrafo.append(texto);
        seccion.append(parrafo);
    }
}

var hr=document.createElement('hr');
seccion.append(hr);

//encontrar elementos por su clase:
var divRojos=document.getElementsByClassName('rojo');
var divAmarillo=document.getElementsByClassName('amarillo');
console.log(divRojos);
divAmarillo[0].style.background="yellow";

var div;
for(div in divRojos){
if(divRojos[div].className=='rojo'){
    divRojoses[div].style.background='red';
}
}

//query selector permite seleccionar un elemento o el 1 elemento
var id=documento.querySelectorAll('#encabezado');
console.log(id);

var claseRojo=document.querySelector('.rojo');
console.log(claseRojo);

var etiqueta=document.querySelector('div');
console.log(etiqueta);

