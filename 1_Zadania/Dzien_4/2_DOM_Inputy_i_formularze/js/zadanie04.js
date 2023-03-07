document.addEventListener("DOMContentLoaded", function() {

    const cardNumber = document.getElementById("name");
    const cardType = document.getElementById("type");
    const btn = document.querySelector(".btn");

    btn.disabled = true;

    cardNumber.addEventListener("input", function (){

        cardNumber.style.borderColor = "red";

            if(cardNumber.value.charAt(0) === "4" && cardNumber.value.length >= 13 && cardNumber.value.length <= 16){
                cardNumber.style.borderColor = "green";
                cardType.textContent = "visa";
                btn.disabled = false;
            }else if (cardNumber.value.length > 16){
                cardType.textContent = "";
                cardNumber.style.borderColor = "red";
                btn.disabled = true;
            } else if(cardNumber.value.charAt(0) === "5" && cardNumber.value.length === 16){
                cardNumber.style.borderColor = "green";
                cardType.textContent = "master"
                btn.disabled = false;
            } else if (cardNumber.value.charAt(0) === "3" && cardNumber.value.length === 15 && (cardNumber.value.charAt(1) === "4" || cardNumber.value.charAt(1) === "7")){
                    cardNumber.style.borderColor = "green";
                    cardType.textContent = "AE";
                    btn.disabled = false;
            } else if(cardNumber.value.charAt(0) === "3" && cardNumber.value.length !== 15 && (cardNumber.value.charAt(1) === "4" || cardNumber.value.charAt(1) === "7")){
                cardNumber.style.borderColor = "red";
                cardType.textContent = "";
                btn.disabled = true;
            } else if(cardNumber.value.length < 13){
                cardType.textContent = "";
                btn.disabled = true;
            }


    })

});