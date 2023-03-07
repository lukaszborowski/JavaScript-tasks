document.addEventListener("DOMContentLoaded", function() {

    const apple = document.querySelector("img[alt=Apple]");
    const ubuntu = document.querySelector("img[alt=Ubuntu]");
    const windows = document.querySelector("img[alt=Windows]");
    const btn = document.querySelector(".btn");
    const select = document.querySelector(".form-control");
    const options = select.querySelectorAll("option");


    btn.addEventListener("click", function (e){
        e.preventDefault()
        if(select.value === "Windows"){
            windows.style.display = "block"
            apple.style.display = "none";
            ubuntu.style.display = "none";
        } if(select.value === "Os X"){
            apple.style.display = "block";
            ubuntu.style.display = "none";
            windows.style.display = "none";
        } if(select.value === "Ubuntu"){
            ubuntu.style.display = "block";
            apple.style.display = "none";
            windows.style.display = "none";
        }
    })

});