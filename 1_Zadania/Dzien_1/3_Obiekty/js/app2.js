/* Zadanie 1 */

const country = {
        capital : 'Warsaw',
        population : 38,
        president : "Duda",
        primeMinisters : ['Morawiecki', 'Ziobro']

};

console.log(country);
console.log(country.population);
console.log(country.president);
console.log(country.capital);
console.log(country.primeMinisters);

console.log(country["capital"]);
console.log(country["population"]);
console.log(country["president"]);
console.log(country["primeMinisters"]);


for (key in country) {
    console.log(key, country[key]);
}

/* Zadanie 2 */

const timeMachine = {
    shape : "sphere",
    model : "T1000",
    run : function (date, place) {
        console.log(`
        Przeniosłeś się do ${date} do miejsca ${place}
        `);

    }
};

console.log(timeMachine.shape);
console.log(timeMachine.model);
timeMachine.run("2020", "Sieraków pod Warszawa");

/* Zadanie 1 - Samodzielne */

const book = {
    title : "Horus Heresy",
    author : "Dan Albert",
    numberOfPages : 389,
};

console.log(book.title);
console.log(book.author);
console.log(book.numberOfPages);

/* Zadanie 2 - Samodzielne */

const person = {
    name : "Janusz",
    age : 55,
    say : function () {
        console.log("Hello");

    }
};

console.log(person.name);
console.log(person.age);
person.say();

/* Zadanie 3 - Samodzielne */

const favRecipe = {
    title : "Hambuksy",
    servings : 5,

};

favRecipe.ingredients = ['Mieso', 'Buła', 'Green Shit for pussies', 'Sauce'];

console.log(favRecipe.title);
console.log(favRecipe.servings);
console.log(favRecipe.ingredients);

/* Zadanie 4 */

var spoon = {
    isExist: true
};

var fork = spoon;
fork.isExist  = false;

console.log(spoon.isExist);

