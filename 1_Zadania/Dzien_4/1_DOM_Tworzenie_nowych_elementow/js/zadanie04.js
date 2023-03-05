document.addEventListener("DOMContentLoaded", function() {

    const ul = document.querySelector(".list");
    const btn = document.getElementById("remove");

    btn.addEventListener("click", function (){
        const lis = ul.querySelectorAll("li");
        for(let el of lis){
            ul.removeChild(el);
        }
    })

});