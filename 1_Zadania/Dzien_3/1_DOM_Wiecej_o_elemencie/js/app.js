document.addEventListener("DOMContentLoaded", function() {
    // zadanie
    console.log("zadanie");

    const exFive = document.querySelector(".ex5");
    const exLis = exFive.querySelectorAll('li');
    const exLinks = exFive.querySelectorAll('a');

    function modifyList(elements){
        for(let i=0; i<elements.length; i++){
            elements[i].style.textDecoration = "none";
            if(i % 2 === 0){
                elements[i].style.backgroundColor = "green";
            } else if (i % 5 === 0) {
                elements[i].classList.add('big');
            } else if( i % 3 === 0){
                elements[i].style.textDecoration = "underline"
            }
        }
    }

   modifyList(exLinks);

    //zadanie 1
    console.log("zadanie 1");
    const chromeImg = document.querySelector(".chrome");
    const chromeText = document.querySelector(".chrome-cnt a");
    chromeImg.style.backgroundImage = "url(assets/img/chrome.png)"
    chromeImg.style.width = "100px";
    chromeText.innerText = "Chrome";

    const edgeImg = document.querySelector(".edge");
    const edgeText = document.querySelector(".edge-cnt a");
    edgeImg.style.backgroundImage = "url(assets/img/edge.png)";
    edgeText.setAttribute("href", "https://www.microsoft.com/pl-pl/edge?form=MA13FJ")

    const firefoxImg = document.querySelector(".firefox");
    const firefoxText = document.querySelector(".firefox-cnt a");
    firefoxImg.style.backgroundImage = "url(assets/img/firefox.png)";
    firefoxText.innerText = "FireFox";
    firefoxText.setAttribute("href", "https://www.mozilla.org/pl/firefox/new/");

    // zadanie 2
    console.log("zadanie 2");

    const myName = document.getElementById("name");
    myName.innerText = "Łukasz Borowski";
    const myFavColor = document.getElementById("fav_color");
    myFavColor.innerText = "Czarny";
    const myFavMeal = document.getElementById("fav_meal");
    myFavMeal.innerText = "Tortilla";

    // zadanie 3
    console.log("Zadanie 3");

    const exThree = document.querySelector(".ex3");
    const list = exThree.querySelector("ul");
    list.classList.add("menu");

    const listLis = list.querySelectorAll("li");
    for(let el of listLis){
        el.classList.add("menuElement");
        el.classList.remove("error")
    }

    // zadanie 4
    console.log("zadanie 4");

    const exFour = document.querySelector(".ex4");
    const exFourLis = exFour.querySelectorAll("li");

    let counter = 0;
    for(let el of exFourLis){
        counter++;
        el.dataset.id = counter;
    }
});