console.log("Zadanie 2");

const Calculator = function (){
    this.operations = []
};

Calculator.prototype.add = function (num1, num2) {

    const result = num1 + num2;
    this.operations.push(`Dodawanie: ${num1} + ${num2} wynik: ${result}`);
    return result;
};

Calculator.prototype.multiply = function (num1, num2) {

    const result = num1 * num2;
    this.operations.push(`Mnożenie ${num1} * ${num2} wynik: ${result}`);
    return result;
};

Calculator.prototype.substract = function (num1, num2) {
    const result = num1 - num2;
    this.operations.push(`Odejmowanie ${num1} - ${num2} wynik ${result}`);
    return result;
};

Calculator.prototype.divide = function (num1, num2){

    const result = num1 / num2;
    this.operations.push(`Dzielenie ${num1} przez ${num2} wynosi ${result}`);
    return result;
};

Calculator.prototype.printOperations = function (){
    console.log(this.operations);
}

Calculator.prototype.clearOperations = function () {
    this.operations = [];
}

calc = new Calculator();
calc.add(3, 5);
calc.multiply(5,6);
calc.substract(8,4);
calc.divide(9,3);
calc.divide(5,2);
console.log(calc);
calc.printOperations();
calc.clearOperations();
console.log(calc);
