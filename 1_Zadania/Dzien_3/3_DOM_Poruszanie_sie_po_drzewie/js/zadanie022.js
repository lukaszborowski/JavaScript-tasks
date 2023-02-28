document.addEventListener("DOMContentLoaded", function () {
    const divs = document.querySelectorAll(".listContainer");

    for (const el of divs) {
        el.addEventListener('mouseover', function () {

            const li = this.querySelectorAll("li");
            // const li = this.firstElementChild.children;
            // const li = this.children[0].children;

            for (const el of li) {
                el.style.color = "green";
            }

            li[0].style.color = "red";
            li[li.length - 1].style.color = "red";

        });
        el.addEventListener('mouseout', function () {

            const li = this.querySelectorAll("li");
            for (const el of li) {
                el.style.color = "";
            }


        });
    }

});