'use strict';
//fetch ajax realizar peticiones a servicios api rest 
//services remotes
//se recibe un url que devuelve un json

/*PRIMERA FORMA DE HACERLO:
var divUsuarios=document.querySelector("#usuarios");
//obtener el elemnto con id usuarios
var usuarios=[];
fetch('https://jsonplaceholder.typicode.com/users')
.then(data=>data.json())
.then(data=>{
    usuarios=data;
    console.log(usuarios);
    console.map((data,i)=>{
        let nombre=document.createElement('h3');
        nombre.innerHTML=i+"-"+data.name+"-"+data.address.street;
        divUsuarios.append(nombre);
    })
})
*/

//segunda forma:
var divUsuarios = document.querySelector("#usuarios");
var divUsuarioGeorge=document.querySelector("#usuarioGeorge");
function getUsuarios(){
    return fetch('https://jsonplaceholder.typicode.com/users');
}
function getUsuarioGeorge(){
    return fetch('https://reqres.in/api/users/1');

}
function listadoUsuarios(){
    divUsuarios.map((data,i)=>{
        let nombre=document.createElement('h3');
        nombre.innerHTML=i+"-"+data.name+"-"+data.address.street;
        divUsuarios.append(nombre);
        document.querySelector('.loading').style.display="none";

});
}
function mostrarUsuarioGeorge(usuario){
    let nombre=document.createElement('h3');
    nombre.innerHTML=usuario.data.first_name;
    divUsuarioGeorge.append(nombre);
    let avatar=document.createElement('img');
    avatar.src=usuario.data.avatar;
    divUsuarioGeorge.append(nombre);
    divUsuarioGeorge.append(avatar);
    document.querySelector('#usuarioGeorge .loading').style.display="none";

}
getUsuarios()
.then(data=>data.json())
.then(users=>{
    listadoUsuarios(users); //
})
.then(data=>{
    return getUsuarioGeorge();

})
.then(data=>data.json())
.then(user=>{
    mostrarUsuarioGeorge(user); // return
})
.catch(error=>{
    alert("Error en la peticion");

})
try{
    var numero = 2;
    console.log(numero);
    var vector=new Array(999999999999999999999999999);

}catch(error){
    alert("Error"+error);
}