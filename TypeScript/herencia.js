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
var Heroe = /** @class */ (function () {
    function Heroe(nombre, nombreReal) {
        this.nombre = nombre;
        this.nombreReal = nombreReal;
        console.log("cosntructor Heroe");
    }
    Heroe.prototype.getNombre = function () {
        console.log("get nombre Protegido");
        return this.nombre;
    };
    return Heroe;
}());
var Xmen = /** @class */ (function (_super) {
    __extends(Xmen, _super);
    function Xmen(a, b) {
        var _this = _super.call(this, a, b) || this;
        console.log("cosntructor Xmen");
        return _this;
    }
    Xmen.prototype.getName = function () {
        console.log("get Name publico");
        return _super.prototype.getNombre.call(this);
    };
    return Xmen;
}(Heroe));
//let ironman: Heroe = new Heroe('Ironman', 'Tony');
//console.log(ironman);
var wolverine = new Xmen('Wolverine', 'Logan');
console.log(wolverine);
console.log(wolverine.getName());
