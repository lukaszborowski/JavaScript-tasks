document.addEventListener("DOMContentLoaded", function() {

    console.log("Zadanie 2 Search Dom");
    console.log("Pkt 1");

    const lis = document.querySelectorAll("#menu li");

    function getDataInfo(element){
        let dataInfo = [];
        for(let el of element){
            dataInfo.push(el.dataset.info);
        }
        return dataInfo;
    }

    console.log(getDataInfo(lis));

    console.log("Pkt 2");

    const mainCont = document.getElementById("main-contener");

    function getElementClass(element){
        let classes = [];
        for(let i=0; i<element.classList.length; i++){
            classes.push(element.classList[i]);
        }
        return classes;
    }

    console.log(getElementClass(mainCont));

    console.log("Pkt 3");

    const pinkColor = document.querySelector(".pink-color");

    function getElementText(element){
        return element.textContent;
    }

    console.log(getElementText(pinkColor));

    console.log("Pkt 4");

    const images = document.querySelectorAll(".images");


    function getElementAlt(element){
        let alts = [];
        for(let el of element){
            alts.push(el.alt);
        }
        return alts;
    }

    console.log(getElementAlt(images));

    console.log("Pkt 5");

    const myLinks = document.querySelectorAll(".my-link");

    function getElementHref(element){
        const hrefs = [];
        for(let el of element){
            hrefs.push(el.href);
        }
        return hrefs;
    }

    console.log(getElementHref(myLinks));
});