document.addEventListener("DOMContentLoaded", function() {

    // Zadanie 1

    const btns = document.querySelectorAll(".button");

    console.log(btns);

    for (let el of btns) {
        el.addEventListener('click', function () {
            var parents = this.parentElement;
            const randomColor = "#" + Math.floor(Math.random() * 16777215).toString(16);
            parents.style.backgroundColor = randomColor;
        });
    }

});
