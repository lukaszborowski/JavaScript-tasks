document.addEventListener("DOMContentLoaded", function() {

    const bts = document.querySelectorAll(".button");

    for(let el of bts){
        el.addEventListener("click", function (){
            let parent = this.parentElement;
            let randomColor = "#" + Math.floor(Math.random() * 16777215).toString(16);
            parent.style.backgroundColor = randomColor;
        })}

});


