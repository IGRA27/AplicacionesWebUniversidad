import {Component} from "@angular/core";

@Component({
    selector: 'libro',
    templateUrl: './libro.component.html'
})

export class LibroComponent{
    public titulo: string;
    public listado: string;
    constructor() {
        this.titulo="Componente Libros";
        this.listado="Lista de libros";
    }
}