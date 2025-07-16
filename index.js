"use strict";
// --------------- lesson6 - Basic types: string, number, boolean
var __decorate = (this && this.__decorate) || function (decorators, target, key, desc) {
    var c = arguments.length, r = c < 3 ? target : desc === null ? desc = Object.getOwnPropertyDescriptor(target, key) : desc, d;
    if (typeof Reflect === "object" && typeof Reflect.decorate === "function") r = Reflect.decorate(decorators, target, key, desc);
    else for (var i = decorators.length - 1; i >= 0; i--) if (d = decorators[i]) r = (c < 3 ? d(r) : c > 3 ? d(target, key, r) : d(target, key)) || r;
    return c > 3 && r && Object.defineProperty(target, key, r), r;
};
let MyCar = class MyCar {
    constructor() {
        this.fuel = "50%";
        this.open = true;
    }
    isOpen() {
        console.log(this.fuel);
        return this.open ? "open" : "close";
    }
};
MyCar = __decorate([
    addFuel,
    closeCar
], MyCar);
function closeCar(constructor) {
    return class extends constructor {
        constructor() {
            super(...arguments);
            this.open = false;
        }
    };
}
function addFuel(constructor) {
    return class extends constructor {
        constructor() {
            super(...arguments);
            this.fuel = "100%";
        }
    };
}
const car = new MyCar();
car.isOpen();
console.log("car.open", car.open);
console.log("car.fuel", car.fuel);
// console.log(closeCar(addFuel(car)).isOpen());
