document.addEventListener("DOMContentLoaded", function() {

    const listOne = document.getElementById("list1");
    const listTwo = document.getElementById("list2");
    const moveBtn = document.querySelectorAll(".moveBtn");


   for(let el of moveBtn){
       el.style.cursor = "pointer";
       el.addEventListener("click", function (){
           if(this.parentElement.parentElement === listOne){
               listTwo.appendChild(this.parentElement);
               listOne.removeChild(this.parentElement);
           } else {
               listOne.appendChild(this.parentElement);
               listTwo.removeChild(this.parentElement);
           }
       })
   }

});