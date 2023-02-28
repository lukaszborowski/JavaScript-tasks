/* zadanie */
console.log("zadanie");

const car = {
    brand: "Volkswagen",
    color: "red",
    numberOfKilometers: 0,

    printCarInfo: function () {
        console.log(`
        Marka: ${this.brand}
        Kolor: ${this.color}
        Liczba kilometrów: ${this.numberOfKilometers}
        `);
    },

    drive: function (km){
        if(typeof km === "number"){
            this.numberOfKilometers += km;
        }
    }
};

car.printCarInfo();
car.drive(47);
car.printCarInfo();

/* zadanie 1 */

car.services = ["Maj 2019", "Kwiecień 2020", "Lipiec 2021", "Maj 2022"];
console.log(car.services);

car.servicesAd = function (ad){
    car.services.push(ad)
}

function showServices () {
    console.log(this.services);
}

car.printCarInfo();
car.drive(130);
car.printCarInfo();
car.servicesAd("Luty 2023");
car.printCarInfo();
car.showServ = showServices;
car.showServ();


/* zadanie 3 */

console.log("Zadanie 3");

const stairs = {
    step: 0,
    up: function () {
        this.step += 1;
    },
    down: function () {
        this.step -= 1;
    },
    printStep: function () {
        console.log(`Current Step ${this.step}`);
    }
}

stairs.up();
stairs.up();
stairs.up();
stairs.down();
stairs.printStep();

