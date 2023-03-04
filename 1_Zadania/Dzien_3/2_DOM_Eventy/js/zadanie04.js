document.addEventListener("DOMContentLoaded", function() {

    const buttons = document.querySelectorAll("button");
    const cnt = document.querySelector(".counter");
    let counter = 0;

    for(let el of buttons){
        el.addEventListener('click', function (){
            counter++;
            console.log(counter);
            cnt.textContent = counter;
        })
    }

});