var __extends = (this && this.__extends) || (function () {
    var extendStatics = function (d, b) {
        extendStatics = Object.setPrototypeOf ||
            ({ __proto__: [] } instanceof Array && function (d, b) { d.__proto__ = b; }) ||
            function (d, b) { for (var p in b) if (Object.prototype.hasOwnProperty.call(b, p)) d[p] = b[p]; };
        return extendStatics(d, b);
    };
    return function (d, b) {
        if (typeof b !== "function" && b !== null)
            throw new TypeError("Class extends value " + String(b) + " is not a constructor or null");
        extendStatics(d, b);
        function __() { this.constructor = d; }
        d.prototype = b === null ? Object.create(b) : (__.prototype = b.prototype, new __());
    };
})();
//clase o plantilla
var Auto = /** @class */ (function () {
    //metodos
    //constructor(){}
    function Auto(marca, color, cilindraje, precio) {
        this.marca = marca;
        this.color = color;
        this.cilindraje = cilindraje;
        this.precio = precio;
    }
    Auto.prototype.setColor = function (color) {
        return this.color = color;
    };
    Auto.prototype.getColor = function () {
        return this.color;
    };
    return Auto;
}()); /*
var auto= new Auto();
auto.marca="Mazda";
auto.color="rojo";
auto.cilindraje="1500cc";
auto.precio=1500;
console.log(auto);*/
var auto = new Auto("Ford", "verde", "2500cc", 2800);
var camioneta = new Auto("Toyota", "plata", "2700cc", 3800);
console.log(auto, camioneta);
//herencia -> heredar todas las caracteristicas
//de una clase a una subclase
var Deportivo = /** @class */ (function (_super) {
    __extends(Deportivo, _super);
    function Deportivo() {
        return _super !== null && _super.apply(this, arguments) || this;
    }
    Deportivo.prototype.setTechoCorredizo = function (techo) {
        this.techoCorredizo = techo;
    };
    Deportivo.prototype.getTechoCorredizo = function () {
        return this.getTechoCorredizo;
    };
    return Deportivo;
}(Auto));
var auto2 = new Deportivo("Mercedes", "Negro", "2500cc", 4000);
auto2.setTechoCorredizo(true);
console.log(auto2);
