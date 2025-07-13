"use strict";
// --------------- lesson75 - abstract class
class AbstractVehicle {
    stopEngine(time) {
        this.starEngine(new Date());
        return "Engine stopped";
    }
}
class Vehicle extends AbstractVehicle {
    constructor() {
        super(...arguments);
        this.starEngine = (time) => {
            return "Started";
        };
    }
}
const test = new Vehicle().starEngine(new Date());
console.log(test);

