document.addEventListener("DOMContentLoaded", function() {

    const winHeight = document.getElementById("windowHeight");
    const winWidth = document.getElementById("windowWidth");

    window.addEventListener('resize', function (){
        winHeight.textContent = window.innerHeight;
        winWidth.textContent = window.innerWidth;
    })

});