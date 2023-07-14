'use strict'
window.addEventListener('load', () => {
    var pelicula={
        titulo:"Maze Runner",
        anio:2015,
        pais:"USA",
        idiomas:["Ingles", "Español", "Japones"]
    };
    console.log(pelicula);
    console.log(pelicula.titulo);
    console.log(pelicula.idiomas[0]);
    pelicula.anio=2023;
    console.log(pelicula);

    var peliculas=[
        {titulo:"XMEN", anio:2019, pais:"USA"},
        {titulo:"Transformers", anio:2019, pais:"USA"},
        {titulo:"Advengers", anio:2019, pais:"USA"},
        {titulo:"Robocop", anio:2019, pais:"USA", estreno:2023},
        pelicula
    ];
    console.log(peliculas);
    var divPeliculas=document.querySelector("#peliculas");
    var index;
    //elemento in arreglo
    for(index in peliculas){
        var parrafo=document.createElement("p");
        parrafo.append(peliculas[index].titulo+'-'+peliculas[index].anio);
        divPeliculas.append(parrafo);
    }

});