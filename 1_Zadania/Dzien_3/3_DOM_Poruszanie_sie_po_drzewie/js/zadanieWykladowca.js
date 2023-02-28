document.addEventListener('DOMContentLoaded', function () {

    // Zadanie 1

    console.groupCollapsed("zadanie 1");
    const first = document.querySelector(".first");
    console.log(first);

    const firstCh = first.firstElementChild;
    console.log(firstCh);

    console.log(firstCh.lastElementChild);
    console.groupEnd();

    console.groupCollapsed("zadanie 2");
    const second = document.querySelector("#second");
    const secondP = second.parentElement;
    console.log(secondP);
    console.log(secondP.children[3]);
    console.groupEnd();

    console.groupCollapsed("zadanie 3");
    const third = document.querySelector(`[data-ex="third"]`);
    console.log(third);
    const thirdG = third.parentElement.parentElement;
    console.log(thirdG);
    const thirdLast = thirdG.lastElementChild;
    console.log(thirdLast);

    const thirdLastFirst = thirdLast.firstElementChild;
    console.log(thirdLastFirst);
    const index = Math.floor(thirdLastFirst.children.length / 2);
    const thirdLastFirstM = thirdLastFirst.children[index];
    console.log(thirdLastFirstM);
    console.groupEnd();

// Div o klasie forth -> jego rodzic -> jego pierwsze dziecko o tagu article -> jego drugie dziecko o tagu <p>.
// Wszystkie te elementy mają atrybut data-answer nastawiony na numer zadania, dla którego są odpowiedzią.

    console.group("zadanie 4");
    const forth = document.querySelector(".forth");
    console.log(forth);
    const forthP = forth.parentElement;
    console.log(forthP);
    const forthPArticle = forthP.querySelector('article');
    console.log(forthPArticle);
    const forthPArticleP = forthPArticle.querySelectorAll('p');
    console.log(forthPArticleP[1])
    console.groupEnd();

    // Zadanie 2

    const lists = document.querySelectorAll("div ul");
    const firstEl = lists.firstElementChild;

    firstEl.style.color = "red";



});

