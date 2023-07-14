//'use strict';   YA NO ES NECESARIO
//evento ready: verifica que toda la pagina este cargada
$(document).ready(function(){

//Seleccion de parrafos por id
var rojo=$('#rojo').css('background','red');
var amarillo=$('#amarillo').css('background','yellow')
                           .css('color', 'red');
var verde=$('#verde').css('background', 'green')
                     .css('color','white');
//selectores de clase
var miClase=$('.zebra');
    miClase.css("padding","20px");
$('.sinBorde').click(function(){
    $(this).addClass("zebra");
});
//Selectores por etiqueta
var parrafos=$('p').css("cursor","pointer");
parrafos.click(function(){
    var thiss=$(this);
    if(thiss.hasClass('zebra')){
        thiss.addClass('nuevaClase');
    }        
});
//selecccion de varias etiquetas
$('p,a').addClass('grande');
//seleccion por atributos
$('[title="Google"]').css('background','green')
                     .css("color","white");
$('[title="Facebook"]').css('background','blue')
                       .css("color", "white");   

var busqueda=$('#caja').find(".resaltado");
console.log(busqueda);
                       
var busqueda2 = $('#elemento2').parent().parent().find(".resaltado");
console.log(busqueda2);
});
