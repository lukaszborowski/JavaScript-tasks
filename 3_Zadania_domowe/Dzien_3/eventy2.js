document.addEventListener("DOMContentLoaded", function() {

    const content1 = document.querySelector(".content");
    const content2 = document.querySelector(".content");
    const link1 = document.querySelector("a");
    const link2 = document.querySelector("a");
    console.log(link2);


    link1.addEventListener('click', function () {
        content1.style.display = "block";

   });




});