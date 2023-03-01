/* Zadanie */
console.log("Zadanie");

function Basket() {
    this.products = [];
    this.sum = 0;

}

Basket.prototype.addProduct = function (name, price) {
    const ob ={
        name: name,
        price: price
    }

    this.products.push(ob);
    this.sum += price;
}

Basket.prototype.showBasket = function () {
    console.log("%c Koszyk:", "background: yellow; color: red; font-size: 20px;");
    for(el of this.products){
        console.log(el.name);
    }
    console.log(`Wartość produktów to ${this.sum}`);
}

const lukaszBasket = new Basket();
lukaszBasket.addProduct("Lego", 249)
lukaszBasket.addProduct("Headphones", 130);
lukaszBasket.showBasket();

const bruceBasket = new Basket();
bruceBasket.addProduct("rice", 10);
bruceBasket.addProduct("grzyby mun",50);
bruceBasket.addProduct("tofu",20);
bruceBasket.showBasket();

