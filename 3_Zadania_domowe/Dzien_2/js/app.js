document.addEventListener("DOMContentLoaded", function() {

    console.log("Zadanie 1");

    const Tree = function(type) {
        this.type = type;
    }

    const pine = new Tree("sosna");
    const oak = new Tree("Dąb");
    const brzoza = new Tree("Brzoza");

    Tree.prototype.bloom = function (){
        console.log("I'm blooming " + this.type);
    }

    console.log(pine);
    console.log(oak);
    console.log(brzoza);
    pine.bloom();
    oak.bloom();
    brzoza.bloom();
});