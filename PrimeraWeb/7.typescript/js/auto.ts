//clase o plantilla
class Auto{
    //propiedades atributos
    public marca:string;
    public color:string;
    public cilindraje:string;
    public precio:number;
    //metodos
    //constructor(){}
    constructor(marca,color,cilindraje,precio){
        this.marca=marca;
        this.color=color;
        this.cilindraje=cilindraje;
        this.precio=precio;
    }
    public setColor(color){
        return this.color=color;
    }
    public getColor(){
        return this.color;
    }
}/*
var auto= new Auto();
auto.marca="Mazda";
auto.color="rojo";
auto.cilindraje="1500cc";
auto.precio=1500;
console.log(auto);*/
var auto=new Auto("Ford","verde","2500cc",2800);
var camioneta=new Auto("Toyota","plata","2700cc",3800);
console.log(auto,camioneta);

//herencia -> heredar todas las caracteristicas
//de una clase a una subclase
class Deportivo extends Auto{
    public techoCorredizo:boolean;
    setTechoCorredizo(techo:boolean){
        this.techoCorredizo=techo;
    }
    getTechoCorredizo(){
        return this.getTechoCorredizo;
    }
}
var auto2=new Deportivo("Mercedes","Negro","2500cc",4000);
auto2.setTechoCorredizo(true);
console.log(auto2);