document.addEventListener("DOMContentLoaded", function() {

    const divs = document.querySelectorAll("div");

    for (let el of divs){
        el.addEventListener("click", function (){
            const randomColor = "#" + Math.floor(Math.random()*16777215).toString(16);
            el.style.backgroundColor = randomColor;
        })
    }

});