document.addEventListener("DOMContentLoaded", function() {

    const linkOne = document.querySelector("article:nth-child(1) a");
    const contentOne = document.querySelector(".content:first-of-type")
    const linkTwo = document.querySelector("article:nth-child(2) a");
    const contentTwo = document.querySelector(".content:last-of-type");

    linkOne.addEventListener("click", function (){
        if(contentOne.style.display === "block"){
            contentOne.style.display = "none"
        } else {
            contentOne.style.display = "block";
        }
    })

    linkTwo.addEventListener("mouseover", function (){
        contentTwo.style.display = "block";
    })

    linkTwo.addEventListener("mouseout", function (){
        contentTwo.style.display = "none";
    })
});