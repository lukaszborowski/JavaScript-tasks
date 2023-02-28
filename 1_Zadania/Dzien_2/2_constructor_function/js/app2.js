function Basket() {
    this.products = [];
    this.sum = 0;
}

Basket.prototype.addProduct = function (name, price) {
    const ob = {
        name : name,
        price : price,

    };

    this.products.push(ob);
    this.sum += price;

};

Basket.prototype.showBasket = function () {
    console.log("%c Koszyk:", "background: yellow; color: red; font-size: 20px;");      /* %c - dodaje sterowanie */
    for(var el of this.products) {
        console.log(el.name);
    }
    console.log("Suma produktów to: " + this.sum);
};

var  aliceBasket = new Basket();

aliceBasket.addProduct("AS PIK", 100);
aliceBasket.addProduct("Królik", 200);
aliceBasket.showBasket();

var bruceBasket = new Basket();
bruceBasket.addProduct("BatMobil", 999999);
bruceBasket.addProduct("BarCrawler", 15);
bruceBasket.addProduct("BatJaskinia", 400);
bruceBasket.showBasket();
