document.addEventListener("DOMContentLoaded", function() {

    const bts = document.querySelectorAll(".button");

    for(let el of bts){
        el.addEventListener("click", function (){
            let sibling = this.nextElementSibling;
            sibling.style.display = "none";
        });

    }
});