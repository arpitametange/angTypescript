// abstract class Car {
//     // simple method 
//     Wheel() : string {
//         return '4 wheeler';
//     }
var hundyai2 = /** @class */ (function () {
    function hundyai2() {
    }
    hundyai2.prototype.GPS = function () {
        return "Supported";
    };
    hundyai2.prototype.Price = function () {
        return 120000;
    };
    hundyai2.prototype.getTotalSeats = function () {
        return 5;
    };
    hundyai2.prototype.Color = function () {
        return "Black";
    };
    return hundyai2;
}());
console.log("*****************Hyundai********************");
// var hundyai = new Hundyai();
var hundyai3 = new hundyai2();
// console.log(`Price: ${hundyai3.Price()}`);
// console.log(`Total seat: ${hundyai3.getTotalSeats()}`);
// console.log(`Color: ${hundyai3.Color()}`);
console.log("GPS: ".concat(hundyai3.GPS()));
var Toyoto = /** @class */ (function () {
    function Toyoto() {
    }
    Toyoto.prototype.Price = function () {
        return 670000;
    };
    Toyoto.prototype.getTotalSeats = function () {
        return 6;
    };
    Toyoto.prototype.Color = function () {
        return "White";
    };
    Toyoto.prototype.GPS = function () {
        return "Not supported";
    };
    return Toyoto;
}());
var toy = new Toyoto();
console.log("*****************Toyota*****************");
// console.log(`Price: ${toy.Price()}`);
// console.log(`Total seat: ${toy.getTotalSeats()}`);
// console.log(`Color: ${toy.Color()}`);
console.log("GPS: ".concat(toy.GPS()));
