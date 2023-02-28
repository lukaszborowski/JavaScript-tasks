document.addEventListener("DOMContentLoaded", function() {
        
    const globX = document.querySelector("#globalX");
    const globY = document.querySelector("#globalY");
    const locX =  document.querySelector("#localX");
    const locY =  document.querySelector("#localY");

   document.addEventListener('mousemove', position);
   
   function position(z) {
       globX.innerHTML = z.screenX;
       globY.innerHTML = z.screenY;
       locX.innerText = z.clientX;
       locY.innerText = z.clientY;



       
   }

});