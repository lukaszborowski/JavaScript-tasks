document.addEventListener("DOMContentLoaded", function() {

    const divas = document.querySelectorAll(".box");

    console.log(divas);

    for(let el of divas) {
        el.addEventListener('click', function () {
            const randomColor = "#" + Math.floor(Math.random()*16777215).toString(16);
            el.style.backgroundColor = randomColor;
        })

    }

});