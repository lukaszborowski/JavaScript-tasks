document.addEventListener("DOMContentLoaded", function() {

    const listFirst = document.querySelector("#list1");
    const listSec = document.querySelector("#list2");
    const btn = document.querySelectorAll(".moveBtn");
    console.log(listFirst);


    for (el of btn){
        el.addEventListener('click', function () {
            if (this.parentElement.parentElement === listFirst){
                listSec.appendChild(this.parentElement);
            } else {
                listFirst.appendChild(this.parentElement);
            }

        })
    }


});