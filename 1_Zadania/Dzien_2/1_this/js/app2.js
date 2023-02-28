/* Zadanie 1 */

const car = {
    brand: "Wołga",
    color: "Czarny Diamond",
    numberOfKilometers: 0,

    printCarInfo: function () {
        console.log(`
        Marka: ${this.brand}
        Kolor: ${this.color}
        Liczba km: ${this.numberOfKilometers}
        
        `);

    },
    drive: function (km) {
        if (typeof km === "number") {
            this.numberOfKilometers += km;
        }

    }
};


/* Zadanie 1 - Samodzielne */

car.services = ['Styczeń', 'Kwiecień', 'Sierpień', 'Grudzień'];
car.servicesAd = function (ad) {
    car.services.push(ad);

};

car.printCarInfo();
car.drive(20);
car.drive(250);
car.printCarInfo();
console.log(car.services);
car.servicesAd('Maj');
console.log(car.services);

/* Zadanie 3 - Samodzielne */

var stairs = {
    stair : 0,
    up : function () {
        this.stair += 1;
    },
    down : function () {
        this.stair -= 1;

    },
    printStep : function () {
        console.log(this.stair);
    }
};

stairs.up();
stairs.up();
stairs.up();
stairs.down();
stairs.printStep();

