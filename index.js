"use strict";
// --------------- lesson6 - Basic types: string, number, boolean
var __decorate = (this && this.__decorate) || function (decorators, target, key, desc) {
    var c = arguments.length, r = c < 3 ? target : desc === null ? desc = Object.getOwnPropertyDescriptor(target, key) : desc, d;
    if (typeof Reflect === "object" && typeof Reflect.decorate === "function") r = Reflect.decorate(decorators, target, key, desc);
    else for (var i = decorators.length - 1; i >= 0; i--) if (d = decorators[i]) r = (c < 3 ? d(r) : c > 3 ? d(target, key, r) : d(target, key)) || r;
    return c > 3 && r && Object.defineProperty(target, key, r), r;
};
var __metadata = (this && this.__metadata) || function (k, v) {
    if (typeof Reflect === "object" && typeof Reflect.metadata === "function") return Reflect.metadata(k, v);
};
// @changeDoorStatus(true)
// @changeAmountOfFuel("90%")
class MyCar {
    fuel = "50%";
    open = true;
    freeSeats;
    // @chackAmountOfFuel
    isOpen() {
        console.log("this.fuel method", this.fuel);
        return this.open ? "open" : "close";
    }
}
__decorate([
    chackNumberOfSeats(3),
    __metadata("design:type", Number)
], MyCar.prototype, "freeSeats", void 0);
function chackNumberOfSeats(limit) {
    return function (target, propertyKey) {
        let value;
        const getter = function () {
            console.log("property");
            return value;
        };
        const setter = function (newAmount) {
            if (newAmount >= 1 && newAmount < limit) {
                value = newAmount;
                console.log(`Can't be more seats ${value}`);
            }
            else {
                console.log(`Can't be more seats ${limit}`);
            }
            return value;
        };
        Object.defineProperty(target, propertyKey, {
            get: getter,
            set: setter,
        });
    };
}
// function chackAmountOfFuel(
//   target: Object,
//   propertyKey: string | Symbol,
//   descriptor: PropertyDescriptor
// ) {
//   const oldValue = descriptor.value;
//   descriptor.value = function (this: any, ...args: any[]) {
//     console.log("this.fuel decorator", this.fuel);
//     return oldValue.apply(this, args);
//   };
// }
// function changeDoorStatus(status: boolean) {
//   // console.log("1");
//   return <T extends { new (...args: any[]): {} }>(constructor: T) => {
//     // console.log("2");
//     return class extends constructor {
//       open = status;
//     };
//   };
// }
// function changeAmountOfFuel(amount: string) {
//   // console.log("3");
//   return <T extends { new (...args: any[]): {} }>(constructor: T) => {
//     // console.log("4");
//     return class extends constructor {
//       fuel = amount;
//     };
//   };
// }
const car = new MyCar();
car.freeSeats;
console.log("freeSeats", MyCar.prototype.freeSeats);
