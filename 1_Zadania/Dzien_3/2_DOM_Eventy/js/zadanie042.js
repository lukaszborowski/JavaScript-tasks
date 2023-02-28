document.addEventListener("DOMContentLoaded", function() {
        const buttons = document.querySelectorAll("button");
        const cnt = document.querySelector(".counter");

        console.log(buttons);
        let count = 0;

        for(let el of buttons) {
                el.addEventListener('click', function () {
                        count++;
                        cnt.innerText = count;

                })
        }

});