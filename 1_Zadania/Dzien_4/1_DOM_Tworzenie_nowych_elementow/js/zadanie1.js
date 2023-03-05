document.addEventListener("DOMContentLoaded", function() {

    const btns = document.querySelectorAll(".deleteBtn");

    for(let el of btns){
        el.addEventListener("click", function (){
            let tr = this.parentElement.parentElement;
            tr.remove();
        })
    }

});