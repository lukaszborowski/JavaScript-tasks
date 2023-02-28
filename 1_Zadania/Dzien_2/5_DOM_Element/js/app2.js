document.addEventListener("DOMContentLoaded", function () {


    var homeElement = document.getElementById("home");
    var childElements = document.querySelector(".oferts").querySelectorAll('div, h2, p');
    var banner = document.querySelector(".ban");
    var blocks = document.querySelectorAll(".block");
    var links = document.querySelector(".links").querySelectorAll('li');

    // Zadanie 1

    function getDatasInfo(elements) {
        const tab = [];
        for (const el of elements) {
            tab.push(el.dataset.color);
            el.style.background = el.dataset.color;

        }
        return tab;
    }

    getDatasInfo(links);

    // Zadanie 1 - Samodzielne

    console.log(homeElement);            // -
    console.log(childElements);
    console.log(banner);                // -
    console.log(blocks);
    console.log(links);

    for(var el of childElements) {
        console.log(el.classList + el.tagName);
    }

    for(var el of blocks) {
        console.log(el.classList + el.tagName);
    }

    for(var el of links) {
        console.log(el.classList + el.tagName);
    }

    // Zadanie 2 - Samodzielne

    for(var el of blocks) {
        console.log(el.innerText);
    }

    for(var el of blocks) {
        el.innerText = "Nowa wartość diva o klasie blocks";
        console.log(el.innerText);
    }


    // Zadanie 3 - Samodzielne

    const supFoot = document.querySelector(".superFooter");

    function getId(element) {
        console.log(element.id);

    }
    getId(supFoot);

    // Zadanie 4 - Samodzielne

    function getTags(elements) {
        var tab = [];
        for(var i=0; i<elements.length; i++) {
            tab.push(elements[i].tagName);
        }
           return tab;
    }

    console.log(getTags(childElements));

    // Zadanie 5 - Samodzielne

    function getClassInfo(element) {
        var tab = [];

        for(const el of element.classList) {
            tab.push(el);
        }
        return tab;

    }


    console.log(getClassInfo(banner));
});

