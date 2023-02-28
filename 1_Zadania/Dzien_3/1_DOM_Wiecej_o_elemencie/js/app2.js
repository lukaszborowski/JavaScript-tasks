document.addEventListener("DOMContentLoaded", function () {

    // Zadanie 1

    const ex5 = document.querySelector(".ex5");
    const li = ex5.querySelectorAll('li');
    const links = ex5.querySelectorAll('a');
    // const li2 = ex5.querySelectorAll('li:nth-of-type(2n)');
    // const li3 = ex5.querySelectorAll('li:nth-of-type(3n)');

    for (let i = 0; i < links.length; i++) {
        links[i].style.textDecoration = "none";

        if (i % 3 === 0) {
            links[i].style.textDecoration = "underline";
        }
    }

    for (let i = 0; i < li.length; i++) {
        //li[i].style.textDecoration = "none";

        if (i % 2 === 0) {
            li[i].style.background = "green";
        }
    }

    li[4].classList.add('big');

    // Zadanie 1 - Samodzielne

    const ex1 = document.querySelector(".exercise.ex1");

    const chromeCnt = ex1.querySelector(".chrome-cnt");
    const chromeTitle = chromeCnt.querySelector("h3");
    const chromeDiv = chromeCnt.querySelector("div");
    const chromeLink = chromeCnt.querySelector("a");

    const edgeCnt = ex1.querySelector(".edge-cnt");
    const edgeDiv = edgeCnt.querySelector("div");

    const firefoxCnt = ex1.querySelector(".firefox-cnt");
    const firefoxLink = firefoxCnt.querySelector("a");
    const firefoxDiv = firefoxCnt.querySelector("div");


    chromeLink.innerHTML = "Chrome";
    chromeDiv.style.width = "100px";
    edgeDiv.style.backgroundImage = "url(assets/img/edge.png)";
    firefoxLink.innerHTML = "FireFox";
    firefoxDiv.style.backgroundImage = "url(assets/img/firefox.png)";

    // Zadanie 2 - Samodzielne

    const ex2 = document.querySelector(".exercise.ex2");
    const spanFirst = ex2.querySelector("#name");
    const spanSecond = ex2.querySelector("#fav_color");
    const spanThird = ex2.querySelector("#fav_meal");

    spanFirst.innerText = "Łukasz Borowski";
    spanSecond.innerText = "Niebieski";
    spanThird.innerText = "Hambuksy RuleZzZ";

    
    // Zadanie 3 - Samodzielne 
    
    const ex3 = document.querySelector(".exercise.ex3");
    const ulka = ex3.querySelector("ul");
    const allLis = ex3.querySelectorAll("li");

    ulka.classList.add("menu");
    for(let el of allLis) {
        el.classList.add("menuElement");
        el.classList.remove("error");
    }

    // Zadanie 4 - Samodzielne

    const ex4 = document.querySelector(".exercise.ex4");
    const lils = ex4.querySelectorAll('li');

    let counter = 0;
    for(let el of lils) {
        counter++;
        el.dataset.id = counter;

    }



});
