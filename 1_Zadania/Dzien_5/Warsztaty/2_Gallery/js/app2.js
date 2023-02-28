document.addEventListener("DOMContentLoaded", function () {

    const galleryLinks = document.querySelectorAll(".gallery__link");
    const lightBox = document.querySelector(".lightbox");
    const showImage = document.querySelector(".lightbox__img");
    const closeImg = document.querySelector(".lightbox__close");
    const closeBack = document.querySelector(".lightbox__box");
    console.log(galleryLinks);
    console.log(lightBox);


    for (let el of galleryLinks) {
        el.addEventListener('click', function (e) {
            showImage.src = this.getAttribute('href');
            e.preventDefault();
            lightBox.style.display = "flex";
            console.log("działam");


        });


    }
    closeImg.addEventListener('click', function (e) {
        lightBox.style.display = "none";


    });
    lightBox.addEventListener('click', function (e) {
        lightBox.style.display = "none";


    });

    closeBack.addEventListener('click', function (e) {
        e.stopPropagation();
    })
});


