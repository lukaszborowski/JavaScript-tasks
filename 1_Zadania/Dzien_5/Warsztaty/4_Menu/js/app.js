document.addEventListener("DOMContentLoaded", function() {

    const lis = document.querySelectorAll("div > ul > li");
    console.log(lis);

    for(let el of lis){
        el.addEventListener("mouseover", function (){
                let show = this.querySelector("ul > li > ul");
                if(show !== null) {
                    show.style.display = "block";
                }
        });
        el.addEventListener("mouseout", function (){
            let hide = this.querySelector("ul > li > ul");
                if(hide !== null){
                    hide.style.display = "none";
                }
        });
    }

});