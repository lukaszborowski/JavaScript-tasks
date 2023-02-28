// Zadanie 1

document.addEventListener("DOMContentLoaded", function () {
    const h1 = document.querySelector("h1");
    console.log(h1);
    const title = document.querySelector(".title");
    console.log(title);
    const data = document.querySelector("[data-animation]");
    console.log(data);
});


// Zadanie 2

const div = document.querySelectorAll("div");
console.log(div);

const offerts = document.querySelectorAll(".oferts");
console.log(offerts);

const links = document.querySelectorAll("body [href]");
console.log(links);

console.dir(document);

// Zadanie 1 - Samodzielne

const homes = document.getElementById("#home");
const homess = document.querySelector("#home");
console.log(homes);
console.log(homess);

const datas = document.querySelector("li[data-direction]");
console.log("datas");

const blocked = document.querySelector(".block");
console.log(blocked);

// Zadanie 2 - Samodzielne

const liHolder = document.querySelectorAll("nav li");
console.log(liHolder);

const para = document.querySelectorAll("div p");
console.log("para");

const dives = document.querySelectorAll("article div");
console.log(dives);

// Zadanie 3

const tag = document.querySelector("article.first");
const tagH = tag.querySelectorAll("h2");
console.log(tag);
console.log(tagH.length);

