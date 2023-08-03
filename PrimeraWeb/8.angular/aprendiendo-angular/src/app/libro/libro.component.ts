import {Component, OnInit, DoCheck, OnDestroy} from "@angular/core";

@Component({
    selector: 'libro',
    templateUrl: './libro.component.html'
})
//NO CORRECTO.-en templateURl: <h2>Soy el componente Libro</h2> y aqui haria todo 

export class LibroComponent implements OnInit, DoCheck, OnDestroy {
    public titulo: string;
    public listado: string;
    constructor() {
        this.titulo="Componente Libros";
        this.listado="Lista de libros";
    }
    cambiarTitulo(){
        this.titulo="Soy el nuevo titulo";
    }
    //metodo que se ejecuta cada vez que se carga el componente
    ngOnInit() {
        console.log("Soy el Init");
    }
    //metodo que se cuando se realiza un cambio
    ngDoCheck() {
        console.log("Soy el DoCheck");
    }
    //metodo que se cuando se destruye el componente
    ngOnDestroy() {
        console.log("Soy el OnDestroy");
    }
}