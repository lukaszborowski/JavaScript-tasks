document.addEventListener("DOMContentLoaded", function() {

    const rev = document.querySelector("#remove");

    rev.addEventListener('click', function(){

        const lists = document.querySelector(".list");
        lists.innerHTML = "";

    });

});