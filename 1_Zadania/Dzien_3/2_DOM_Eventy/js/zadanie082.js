document.addEventListener("DOMContentLoaded", function () {

    const widthSc = document.querySelector("#windowWidth");
    const heightSc = document.querySelector("#windowHeight");


    window.addEventListener('resize', function () {
        widthSc.innerText = window.innerWidth;
        heightSc.innerText = window.innerHeight;

    });

});