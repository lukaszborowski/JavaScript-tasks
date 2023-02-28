document.addEventListener("DOMContentLoaded", function () {

    const btn = document.querySelector("#add");

    let counter = 0;

    btn.addEventListener('click', function () {
        counter++;
        const men = document.querySelector(".menu");
        var newLi = document.createElement('li');
        newLi.innerText = "Nowy " + counter;
        men.appendChild(newLi);

    })

});