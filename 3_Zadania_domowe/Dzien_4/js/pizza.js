document.addEventListener("DOMContentLoaded", function() {

    const checkBoxes = document.querySelectorAll(".checkbox input");
    const pay = document.getElementById("price");
    const checkAll = document.querySelector(".checkbox input:first-child");
    const unCheckAll = document.querySelector(".checkbox:last-of-type input");
    let toPay = 0;

    checkAll.addEventListener("click", function(){
        for(let i = 1; i <checkBoxes.length - 1; i++){
            if(checkAll.checked === true) {
                if(checkBoxes[i].checked === true){
                    toPay = toPay;
                    pay.textContent = toPay.toFixed(2);
                }else {
                    toPay += Number(checkBoxes[i].dataset.price);
                    pay.textContent = toPay.toFixed(2);
                    checkBoxes[i].checked = true;
                }}}
        unCheckAll.checked = false;
    });

    unCheckAll.addEventListener("click", function (e){
        for(let i=0; i<checkBoxes.length -1; i++){
            if(unCheckAll.checked === true){
                e.stopPropagation();
                checkBoxes[i].checked = false;
                toPay = 0;
                pay.textContent = toPay.toFixed(2);
            }
        }
    });

    function howMuchPay(element) {

        for (let i = 1; i < element.length - 1; i++) {
            element[i].addEventListener("click", function () {
                if (element[i].checked === true) {
                    toPay += Number(element[i].dataset.price);
                    pay.textContent = toPay.toFixed(2);
                } else if (element[i].checked === false) {
                    toPay -= Number(element[i].dataset.price);
                    pay.textContent = toPay.toFixed(2);
                }
                unCheckAll.checked = false;
            })
        }

    }

    howMuchPay(checkBoxes);

});