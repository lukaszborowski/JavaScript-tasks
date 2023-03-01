console.log("Zadanie 1");

const Robot = function (name){
    this.name = name;
    this.isFunctional = true;
}

Robot.prototype.sayHi = function (who) {
    if(this.isFunctional === true) {
        console.log(`Robot ${this.name} greets ${who}`);
    } else {
        console.log(`Robot ${this.name} is broken`);
    }
}

Robot.prototype.changeName = function (newName) {
    console.log(`Robot ${this.name} changed name to ${newName}`);
    this.name = newName;
}

Robot.prototype.fixIt = function (){
    this.isFunctional = true;
    console.log(`Robot ${this.name} was fixed`);
}

const robotOne = new Robot("T-1000");
robotOne.sayHi("Agata");
robotOne.changeName("T-2000");
robotOne.fixIt();
console.log(robotOne);

const robotTwo = new Robot("Juzio");
robotTwo.sayHi("Łukasz");
robotTwo.changeName("Juzio ver 2")
robotTwo.fixIt();
console.log(robotTwo);