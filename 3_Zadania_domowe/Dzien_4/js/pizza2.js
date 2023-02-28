document.addEventListener("DOMContentLoaded", function() {

    const form = document.querySelector("form");
    const checkbox1 = document.querySelector("form").children[0];
    const checkbox2 = document.querySelector("form").children[1];
    const checkbox3 = document.querySelector("form").children[2];
    const checkbox4 = document.querySelector("form").children[3];
    const checkbox5 = document.querySelector("form").children[4];
    const checkbox6 = document.querySelector("form").children[5];
    const checkbox7 = document.querySelector("form").children[6];
    const allCheck = document.querySelectorAll(".checkbox");
    const price =  document.querySelector("#price");
    let topay = 0;
    console.log(checkbox1);
    console.log(checkbox2);
    console.log(checkbox3);
    console.log(checkbox4);
    console.log(checkbox5);
    console.log(checkbox6);
    console.log(checkbox7);

    checkbox2.addEventListener('click', function () {
       topay += checkbox2.dataset.price;


    });

    console.log(topay);

});
