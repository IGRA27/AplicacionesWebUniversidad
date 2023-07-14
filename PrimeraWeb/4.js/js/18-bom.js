'use strict';
//BOM BROWSER OBJECT MODEL
function getBom(){
    console.log(window.innerHeight);
    console.log(window.innerWidth);
    console.log(window.height);
    console.log(window.width);
}
getBom();
function abrirVentana(url){
    window.open(url,"", "width=400 height=400");
}
abrirVentana("https://fis.epn.edu.ec");
function redirect(url){
    window.location.href = url;
}
redirect("http://fis.epn.edu.ec");