document.addEventListener("DOMContentLoaded", function() {

    const buttonOne = document.getElementById("button1");
    const buttonTwo = document.getElementById("button2");
    const buttonThree = document.getElementById("button3");
    const btnOneSpan = document.querySelector("p:nth-child(2) span");
    const btnTwoSpan = document.querySelector("p:nth-child(4) span");
    const btnThreeSpan = document.querySelector("p:nth-child(6) span");


    let counterOne = 0;
    let counterTwo = 0;
    let counterThree = 0;

    buttonOne.addEventListener("click", function (){
        counterOne++;
        btnOneSpan.textContent = counterOne;
    })

    buttonTwo.addEventListener("click", function (){
        counterTwo++;
        btnTwoSpan.textContent = counterTwo;
    })

    buttonThree.addEventListener('click', function (){
        counterThree++;
        btnThreeSpan.textContent = counterThree;
    })

});