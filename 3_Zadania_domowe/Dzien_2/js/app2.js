

var Tree = function (type) {
    this.type = type;

};

var pine = new Tree("Sosna");
var oak = new Tree("Dab");
var brzo = new Tree("Brzoza");

Tree.prototype.bloom = function() {
    console.log(this.type + " Im blooming");
};

console.log(pine);
console.log(oak);
console.log(brzo);
pine.bloom();
oak.bloom();
brzo.bloom();

