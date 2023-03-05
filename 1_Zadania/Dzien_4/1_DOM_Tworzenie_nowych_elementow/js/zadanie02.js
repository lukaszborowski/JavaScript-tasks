document.addEventListener("DOMContentLoaded", function() {

    const btn = document.getElementById("add");
    const orderNmb = document.getElementById("orderId");
    const orderItem = document.getElementById("item");
    const orderQu = document.getElementById("quantity");
    const tab = document.getElementById("orders");

    btn.addEventListener("click", function (){
        const newTr = document.createElement("tr");
        const newTdOne = document.createElement("td");
        const newTdSec = document.createElement("td");
        const newTdThird = document.createElement("td");


        if(orderNmb.value === '' || orderItem.value === '' || orderQu.value === ''){
            orderNmb.style.borderColor = "red";
            orderItem.style.borderColor = "red";
            orderQu.style.borderColor = "red";
        } else {
            newTdOne.textContent = orderNmb.value;
            newTdSec.textContent = orderItem.value;
            newTdThird.textContent = orderQu.value;

            tab.appendChild(newTr);
            newTr.appendChild(newTdOne);
            newTr.appendChild(newTdSec);
            newTr.appendChild(newTdThird);
        }


    })

});