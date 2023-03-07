document.addEventListener("DOMContentLoaded", function() {

    const company = document.getElementById("invoiceData");
    const invoice = document.getElementById("invoice");

    company.style.display = "none";

    invoice.addEventListener("click", function (){
            if(invoice.checked === true) {
                company.style.display = "block";
            }

    })

    invoice.addEventListener("click", function (){
        if(invoice.checked === false) {
            company.style.display = "none";
        }
    })

});