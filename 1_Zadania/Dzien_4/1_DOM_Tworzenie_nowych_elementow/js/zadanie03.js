document.addEventListener("DOMContentLoaded", function() {

    const btn = document.getElementById("remove");

    btn.addEventListener("click", function (){
         btn.parentElement.removeChild(btn);
    })

});