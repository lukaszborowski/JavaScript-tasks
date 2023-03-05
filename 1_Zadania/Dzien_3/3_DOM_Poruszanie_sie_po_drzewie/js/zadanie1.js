document.addEventListener("DOMContentLoaded", function() {

    // zadanie 1
    console.log("zadanie 1")

    console.groupCollapsed("pkt 1")
    const first = document.querySelector(".first");
    console.log(first.children);
    console.log(first.firstElementChild);
    console.log(first.children[3]);
    console.groupEnd();

    console.groupCollapsed("pkt 2")
    const second = document.getElementById("second");
    const secondParent = second.parentElement;
    console.log(secondParent);
    const secondLastChild = secondParent.children[3];
    console.log(secondLastChild);
    console.groupEnd();

    console.groupCollapsed("pkt 3")
    const dataEx = document.querySelector("[data-ex=third]");
    console.log(dataEx);
    const dataExGrandFather = dataEx.parentElement.parentElement;
    console.log(dataExGrandFather);
    const dataExGfLastChild = dataExGrandFather.lastElementChild;
    const dataExGfFirstChild = dataExGrandFather.firstElementChild;
    const dataExGfChlds = dataExGrandFather.children;
    const midleIndex = Math.floor(dataExGfChlds.length / 2);
    const dataExGfMidChild = dataExGfChlds[midleIndex];
    console.log(dataExGfLastChild);
    console.log(dataExGfFirstChild);
    console.log(dataExGfMidChild);
    console.groupEnd();

    console.groupCollapsed("pkt 4");
    const forth = document.querySelector(".forth");
    console.log(forth);
    const forthParent = forth.parentElement;
    console.log(forthParent);
    const forthPArticle = forthParent.querySelector('article');
    console.log(forthPArticle);
    const forthPArticleP = forthPArticle.querySelectorAll('p');
    console.log(forthPArticleP[1])
    console.groupEnd();


});