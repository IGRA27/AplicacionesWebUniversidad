import {Component, OnInit} from "@angular/core";
import { Zapatilla } from "../models/zapatilla";
import { ZapatillaService } from "../services/zapatilla.service";

@Component({
    selector: 'zapatilla',
    templateUrl: './zapatilla.component.html',
    providers: [ZapatillaService],
})


export class ZapatillaComponent implements OnInit{
    public titulo: string;
    //ya no seria con model:Array<any> sino.-
    public zapatillas:Array<Zapatilla>;
    public color:string;
    
    constructor(
        private _zapatillaService: ZapatillaService
    ) {
        this.titulo="Componente zapatilla";
        this.zapatillas=[];
        this.color='orange';
               
    }
    
    //metodo que se ejecuta cada vez que se carga el componente
    ngOnInit() {

           //this.zapatillas=["Nike", "Adidas", "Pumas"];   
           //SIN SERVICES:
           /*
           this.zapatillas=[
            new Zapatilla("Nike", "azul",80, true),
            new Zapatilla("Adidas", "rojo",90, true),
            new Zapatilla("Reebook", "negro",70, true),
            new Zapatilla("Puma", "blanco",120, true),
           ]
           console.log(this.zapatillas) */
        this.zapatillas=this._zapatillaService.getZapatillas();
    }
    
}