function callOtherFunction( nameOfFunction ) {
    console.log("Cześć jestem funkcją o nazwie 'callOtherFunction' i wywołuję funkcję, którą ktoś mi wrzucił jako parametr");

    let randomNumber1 = Math.random() * 20;
    let randomNumber2 = Math.random() * 10;
    nameOfFunction(randomNumber1,randomNumber2);
}

callOtherFunction( function(a,b) {
    console.log("Pierwsza liczba:", a);
    console.log("Druga liczba", b);
    console.log("Wynik", a + b);
});