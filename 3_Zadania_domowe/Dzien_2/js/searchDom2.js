document.addEventListener("DOMContentLoaded", function () {

    // 1

    const menu = document.querySelectorAll("#menu li");

    console.log(menu);

    function getDataInfo(element) {
        const tab = [];
        for (let el of element) {
            tab.push(el.dataset.info);

        }
        return tab;
    }

    console.log(getDataInfo(menu));

    // 2

    const id = document.querySelector("#main-contener");

    function getElementClass(element) {
        const tab = [];

        for (let i = 0; i < element.classList.length; i++) {
            tab.push(element.classList[i]);
        }

        return tab;
    }

    console.log(getElementClass(id));

    // 3

    const pink = document.querySelector(".pink-color");

    function getElementText(element) {
        return element.innerText;

    }

    console.log(getElementText(pink));

    // 4

    const images = document.querySelectorAll(".images");
    console.log(images);

    function getElementAlt(element) {
        const tab = [];
        for (let el of element) {
            tab.push(el.alt);

        }
        return tab;

    }

    console.log(getElementAlt(images));

    // 5

    const links = document.querySelectorAll(".my-link");
    console.log(links);

    function getElementHref(element) {
        const tab = [];
        for (let el of element) {
            tab.push(el.href);
        }
        return tab;


    }
    console.log(getElementHref(links));
});

