document.addEventListener("DOMContentLoaded", function() {


    const btn = document.querySelectorAll(".deleteBtn");

    for(const el of btn) {
        el.addEventListener("click", function (e) {
            e.preventDefault();

            const tr = this.parentElement.parentElement;
            tr.remove();
            tr

        })
    }

});