$(document).ready(function(){
    // Evento mouseover y mouseout

     var caja = $("#caja");
    // caja.mouseover(function(){
    //     $(this).css("background","green");
    // });
    // caja.mouseout(function(){
    //     $(this).css("background","blue");
    // });

    function cambiarVerde(){
        $(this).css("background-color","green");
    }
    function cambiarAzul(){
        $(this).css("background-color","blue");
    }

    // Hover
    caja.hover(cambiarVerde,cambiarAzul);

    // Click y doble click
    caja.click(function(){
        $(this).css("background","pink")
               .css("color","white");


    });

    caja.dblclick(function(){
        $(this).css("background","black")
                .css("color","white");
    });

    // Evento on

    caja.on("click",function(){
        $(this).css("background","yellow")
                .css("color","white");
    });

    // Evento focus y blur
    var nombre = $("#nombre");
    var datos = $("#datos");
    nombre.focus(function(){
        $(this).css("border","2px solid blue");
    });

    nombre.blur(function(){
        $(this).css("border","1px solid red");
    });

    // Mousedown y mouseup
    datos.mousedown(function(){
        $(this).css("border-color","yellow");
    });

    datos.mouseup(function(){
        $(this).css("border-color","red");
    });
    //mousmove
    $(document).mousemove(function(){
        $('body').css("cursor","none");
        $("#sigueme").css("left",event.clientX)
                     .css("top",event.clientY);
    });
});