document.addEventListener("DOMContentLoaded", function() {

    const box = document.getElementById("box");
    const posX = document.getElementById("globalX");
    const posY = document.getElementById("globalY");
    const localX = document.getElementById("localX");
    const localY = document.getElementById("localY");



    box.addEventListener("mousemove", mousePosition);

    function mousePosition(z){
        posX.innerText = z.screenX;
        posY.innerText = z.screenY;
        localX.innerText = z.clientX;
        localY.innerText = z.clientY;

    }

});