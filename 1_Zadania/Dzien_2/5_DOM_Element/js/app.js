document.addEventListener("DOMContentLoaded", function() {

    const homeElement = document.getElementById("home");
    const childElements = document.querySelector(".oferts").querySelectorAll('div, h2, p');
    const banner = document.querySelector(".ban");
    const blocks = document.querySelectorAll(".block");
    const links = document.querySelector(".links").querySelectorAll('li');

    // zadanie 
    console.log("Zadanie");
    
    function getDatasInfo(elem){
        let tab = [];
        for (const el of elem){
            tab.push(el.dataset.color);
            el.style.background = el.dataset.color;
        }
        return tab;
    }

    getDatasInfo(links);


    // zadanie 1
    console.log("zadanie 1");

    console.log(homeElement);
    console.log(childElements);
    console.log(banner);
    console.log(blocks);
    console.log(links);

    function getSomeData(elements){
        for(const el of elements){
            console.log(el.tagName + el.classList);
        }
    }

    getSomeData(childElements);
    getSomeData(blocks);
    getSomeData(links);

    // zadanie 2
    console.log("zadanie 2");

    function typeInnerText(elements){
        for(const el of elements){
            console.log(el.innerText);
        }
    }
    typeInnerText(blocks);

    function overRideInnerText(elements){
        for(const el of elements){
            el.innerText = "Nowa wartość diva o klasie blocks";
            console.log(el.innerText);
        }
    }

   overRideInnerText(blocks);

    // zadanie 3
    console.log("zadanie 3");

    const getSuperFooter = document.querySelector(".superFooter");

    function getId(element){
        return element.id;
    }

    console.log((getSuperFooter));

    //zadanie 4
    console.log("zadanie 4");

    function getTags(elements){
        let tagsTable = [];
        for(const el of elements){
            tagsTable.push(el.tagName);
        }
        return tagsTable;
    }

    console.log((childElements));

    //zadanie 5
    console.log("zadanie 5");

    function getClassInfo(element){
        let classes = [];
        for(const el of element.classList){
            classes.push(el);
        }
        return classes;
    }

    console.log(getClassInfo(banner));
});

