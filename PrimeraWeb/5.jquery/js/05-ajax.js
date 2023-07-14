$(document).ready(function(){
    //AJAX Permite peticiones asincronicas a un servidor sin necesidad de recargar pagina
    //por get e incrustar en la pagina ante un request se obtiene un response
    //$("#datos").load("https://reqres.in/api/users");
$.get("https://reqres.in/api/users",{page:1},function(response){
    response.data.forEach((element, index)=>{
        $("#datos").append("<p>"+element.first_name+" "+element.last_name+"</p>")
    })
})
$("#formulario").submit(function(e){
    e.preventDefault();//evitar redireccion
    var usuario={
        nombre:$('input[name="nombre"]').val(),
        sitio:$('input[name="sitio"]').val(),

    };
    $.ajax({
        type: 'POST',
        url:$(this).attr("action"),
        data:usuario,
        beforeSend:function(){
            console.log("Usuario enviado")
        },
        success:function(response){
            console.log(response)
        },
        error:function(){
            console.log("Error al enviar");
        },
        timeout:1000

    });
    return false;
});
});