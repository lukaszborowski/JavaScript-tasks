document.addEventListener("DOMContentLoaded", function () {


    /* const form = document.querySelector("form");
     const inpEmail = document.querySelector("#email");
     const inpName = document.querySelector("#name");
     const inpSurname = document.querySelector("#surname");
     const inpPass1 = document.querySelector("#pass1");
     const inpPass2 = document.querySelector("#pass2");
     const inpPass3 = document.querySelector("#pass3");
     const inpAgree = document.querySelector("#agree");
     const message = document.querySelector(".error-message");


     form.addEventListener('submint', function (e) {
         e.preventDefault();
         const errors = [];


         if(!inpEmail.value.includes("@"))

         if (inpName.value.length < 3) {
             errors.push("Twoje imię za krótkie");
         }

         if (inpSurname.value.length < 3) {
             errors.push("Twoje nazwisko za krótkie");
         }

         if (inpPass.value !== inpPass2.value || inpPass1.value === '') {
             errors.push("Błedne hasło");
         }

         if (!inpAgree) {
             errors.push("Musisz zaakceptować warunki");

         }

         if (errors.length) {
             message.innerHTML = '';
             message.innerHTML = errors.join("<br>")
         } else {
             this.submit();
         }

     });

     */

    const form = document.querySelector("form");
    const inpEmail = form.querySelector('#email');
    const inpName = form.querySelector('#name');
    const inpSurname = form.querySelector('#surname');
    const inpPass1 = form.querySelector('#pass1');
    const inpPass2 = form.querySelector('#pass2');
    const inpAgree = form.querySelector('#agree');
    const message = form.querySelector('.error-message');


    form.addEventListener("submit", function (e) {
        e.preventDefault();

        const errors = [];

        const mailReg = /^[0-9a-z_.-]+@[0-9a-z.-]+\.[a-z]{2,3}$/i;

        if (!mailReg.test(inpEmail.value)) {
            errors.push("Wpisany email jest błędny");
        }
        if (inpName.value.length < 3) {
            errors.push("Wpisane imię jest za krótkie");
        }
        if (inpSurname.value.length < 3) {
            errors.push("Wpisane nazwisko jest za krótkie");
        }
        if (inpPass1.value !== inpPass2.value || inpPass1.value === "") {
            errors.push("Błędne hasła");
        }
        if (!inpAgree.checked) {
            errors.push("Musisz zaakceptować regulamin");
        }

        if (errors.length) {
            message.innerHTML = "";
            message.innerHTML = errors.join("<br>");
        } else {
            this.submit();
        }

    });
});
