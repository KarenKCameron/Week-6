/**
 * Car class
 * @constructor
 * @param {String} model
 */

//  Create an instance, accelerate twice, brake once, and console log the instance.toString()
class Car {
    constructor(model) {
        this.model = model;
        this.currentSpeed = 0;
    }    
    accelerate = () => {
        this.currentSpeed++
    }
    brake = () => {
        this.currentSpeed--
    }
    toString() {
        console.log(`The ${this.model} is currently at ${this.currentSpeed}.`)
    }
}



const fx35 = new Car('Infiniti FX35');

fx35.accelerate();
fx35.accelerate();
fx35.brake();
fx35.toString();

/**
 * ElectricCar class
 * @constructor
 * @param {String} model
 */

//  Create an instance, accelerate twice, brake once, and console log the instance.toString()

class ElectricCar extends Car {
    constructor(model, engineType) {
        super();
        super.model = model
        this.engineType = engineType;
         }

    }


const volt = new ElectricCar('Chevrolet Volt', 'electric');

volt.accelerate();
volt.accelerate();
volt.brake();
volt.toString();
