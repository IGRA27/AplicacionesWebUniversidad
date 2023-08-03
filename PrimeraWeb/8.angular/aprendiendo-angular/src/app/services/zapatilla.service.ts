import {Injectable} from '@angular/core';
import {Zapatilla} from '../models/zapatilla';
@Injectable()
export class ZapatillaService{
    public zapatillas:Array<Zapatilla>;
    constructor(){
        this.zapatillas=[
            new Zapatilla("Nike", "azul",80, true),
            new Zapatilla("Adidas", "rojo",90, true),
            new Zapatilla("Reebook", "negro",70, false),
            new Zapatilla("Puma", "blanco",120, true),
           ]
    }
    getZapatillas():Array<Zapatilla>{
        return this.zapatillas;
    }
}