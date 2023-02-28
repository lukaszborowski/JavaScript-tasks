/* Zadanie */

console.log("Zadanie");

const county = {
    capital: "Warsaw",
    population: 2000000,
    president: "Andrzej Duda",
    primeMinisters: ["Tusk", "Morawiecki", "Marcinkiewicz"],
}

console.log(county.capital);
console.log(county.population);
console.log(county.primeMinisters);

console.log("Zadanie następne");

const timeMachine = {
    shape: "shpere",
    model: "Bender",
    run: function (date, place) {
        console.log(`Przeniosłeś się do ${date} do miejsca ${place}`);
    }
};

console.log(timeMachine.shape);
console.log(timeMachine.model);
timeMachine.run("2500", "Sosnowiec");

/* Zadanie 1 */
console.log("Zadanie 1");

const book = {
    title: "Horus Heresy",
    author: "Dan Albert",
    numberOfPages: 467
}

console.log(book["title"]);
console.log(book["author"]);
console.log(book["numberOfPages"]);

/* Zadanie 2 */
console.log("Zadanie 2");

const person = {
    name: "Łukasz",
    age: 34,
    hello: function (){
        console.log(`Hello ${this.name}`);
    }
};
console.log(person.name);
console.log(person.age);
person.hello();

/*Zadanie 3 */
console.log("Zadanie 3");

const tortilla = {
    title: "tortilla",
    serving: 4,
}

tortilla.ingredients = ["tortilla", "chicken", "sauce", "cucumber", "tomato", "spices"]
console.log(tortilla.title);
console.log(tortilla.serving);
console.log(tortilla.ingredients);

/* Zadanie 4 */
console.log("Zadanie 4");

const spoon = {
    isExist: true
}

const fork = spoon;
fork.isExist = false;
console.log(spoon.isExist);