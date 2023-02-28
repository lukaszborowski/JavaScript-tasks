function Calculator() {
    this.tab = [];
}

Calculator.prototype.add = function (num1, num2) {

    var result = num1 + num2;
    this.tab.push(`Dodawanie + ${num1} do ${num2} wynosi : ${result}`);
    return result;


};

Calculator.prototype.multiply = function (num1, num2) {
    var result = num1 * num2;
    this.tab.push(`Mnozenie ${num1} przez ${num2} wynosi ${result}`);

};

Calculator.prototype.substract = function (num1, num2) {
    var result = num1 - num2;
    this.tab.push(`Odejmowanie: ${num1} odjać ${num2} wynosi ${result} `);

};

Calculator.prototype.divide = function (num1, num2) {
    var result = num1 / num2;
    this.tab.push(`Divide ${num1} przez ${num2} wynosi ${result}`);

};

Calculator.prototype.printOperations = function() {
    console.log(this.tab);
};

Calculator.prototype.clearoperations = function() {
   this.tab = [];

};


calc = new Calculator();
calc.add(3, 5);
calc.multiply(5,6);
calc.substract(8,4);
calc.divide(9,3);
console.log(calc);
calc.printOperations();
calc.clearoperations();
console.log(calc);

