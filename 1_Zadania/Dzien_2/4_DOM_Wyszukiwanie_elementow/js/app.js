// Zadanie

document.addEventListener("DOMContentLoaded", function (){
    const h1 = document.querySelector("h1");
    console.log(h1);
    const title = document.querySelector(".title");
    console.log(title);
    const data = document.querySelector("[data-animation]");
    console.log(data);
})

// Zadanie


const divs = document.querySelectorAll("div");
console.log(divs);
const oferts = document.querySelectorAll(".oferts");
console.log(oferts);
const hrefs = document.querySelectorAll("[href]");
console.log(hrefs);
console.dir(document);


// Zadanie 1
console.log("zadanie 1");
const ajdi = document.getElementById("home");
const ajdiTwo = document.querySelector("#home");
console.log(ajdi);
console.log(ajdiTwo);

const datas = document.querySelector("li[data-direction]");
console.log(datas);

const block = document.querySelector(".block");
console.log(block);

// zadanie 2
console.log("zadanie 2");

const navsLi = document.querySelectorAll("nav li");
console.log(navsLi);

const paragraphs = document.querySelectorAll("div p");
console.log(paragraphs);

const articleDivs = document.querySelectorAll("article div");
console.log(articleDivs);

// zadanie 3
console.log("zadanie 3");
const tag = document.querySelector("article.first");
const tagH1 = tag.querySelectorAll("h1");
console.log(tag);
console.log(tagH1.length);

