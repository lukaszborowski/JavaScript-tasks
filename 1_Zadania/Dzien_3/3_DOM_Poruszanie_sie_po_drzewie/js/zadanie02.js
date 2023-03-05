document.addEventListener("DOMContentLoaded", function() {

    const lists = document.querySelectorAll(".listContainer");


    for(let el of lists){
        el.addEventListener("mouseover", function (){
           let lis = this.getElementsByTagName("li");

           for(let el of lis){
               el.style.backgroundColor = "green";
           }
            lis[0].style.backgroundColor = "red"
            lis[lis.length -1].style.backgroundColor = "blue"
        })

        el.addEventListener("mouseout", function (){
            let lis = this.getElementsByTagName("li");

            for(let el of lis){
                el.style.backgroundColor = "white";
            }
        })
    }

});