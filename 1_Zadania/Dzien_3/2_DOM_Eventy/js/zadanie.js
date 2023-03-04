document.addEventListener("DOMContentLoaded", function() {

    const parents = document.getElementsByClassName("parent");

    for(let i=0; i<parents.length;i++){
        parents[i].addEventListener("mouseover", function (){
            this.getElementsByClassName("children")[0].style.display = "block";
        })

        parents[i].addEventListener("mouseout", function (){
            this.getElementsByClassName("children")[0].removeAttribute("style");
        })
    }

});