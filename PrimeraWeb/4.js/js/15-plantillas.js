'use strict';
//plantillas de texto
var nombre=prompt("Ingresar su nombre");
var apellido=prompt("Ingrasar su apellido");
var cadena="<h1>Mi nombre es: </h1>"+nombre+
            "<br><h1>Mi apellido es: </h1>" +apellido;
document.write(cadena);
//comilla invertida:
var cadena2=` 
<h1>Nombre </h1>${nombre}
<br><h1>Apellido</h1>${apellido}
`;
document.write(cadena2);

