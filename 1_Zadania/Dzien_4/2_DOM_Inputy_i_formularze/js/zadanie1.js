document.addEventListener("DOMContentLoaded", function() {

    const form = document.querySelector("form");
    const mail = document.getElementById("email");
    const name = document.getElementById("name");
    const surNamen = document.getElementById("surname");
    const pass = document.getElementById("pass1");
    const passTwo = document.getElementById("pass2");
    const errMsg = document.querySelector(".error-message");
    const sucMsg = document.querySelector(".success-message");

    form.addEventListener("submit", function (e) {
        e.preventDefault();

        let errors = [];

        const mainTest = /^[0-9a-z_.-]+@[0-9a-z.-]+\.[a-z]{2,3}$/i;

        if(!mainTest.test(mail.value)){
            errors.push("Wpisany email jest błedny");
        }if (name.value.length < 6){
            errors.push("Imię jest błedne");
        }if(surNamen.value.length < 6){
            errors.push("Nazwisko jest błedne")
        }if(pass.value !== passTwo.value || pass.value === ""){
            errors.push("błedne hasła");
        }if (errors.length){
            errMsg.textContent = "";
            errMsg.textContent = errors.join(", ");
        } else {
            this.submit();
        }
    })

});