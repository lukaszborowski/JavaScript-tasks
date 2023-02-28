// Zadanie 1

const parents = document.getElementsByClassName("parent");

console.log(parents);

for(let i=0; i<parents.length; i++) {
    parents[i].addEventListener(
        "mouseover",
        function () {
            this.getElementsByClassName("children")[0]
                .style
                .display = "block"
        }
    );

    parents[i].addEventListener('mouseout', function () {
        this.getElementsByClassName("children")[0]
            .removeAttribute("style");
    })
}

