document.addEventListener("DOMContentLoaded", function() {

    const allImages = document.querySelectorAll(".images");
    const hideBtn = document.getElementById("hideButton");
    const showBtn = document.getElementById("showButton");
    const inp = document.getElementById("tagInput");

    function hideImage(){
        let text = inp.value;
        inp.value = "";
        for(let el of allImages){
           if(el.dataset.tag.indexOf(text) >= 0){
              el.classList.add("invisible");
                }
            }
        }

   function showImage(){
        let text = inp.value;
        inp.value = "";
        for(let el of allImages) {
            if(el.dataset.tag.indexOf(text) >= 0){
                el.classList.remove("invisible");
            }
        }
   }

    hideBtn.addEventListener("click", hideImage);
    showBtn.addEventListener("click", showImage);

});