function countHello(nr) {
    var counter = 0;
    var t = setInterval(function () {
        counter++;

        console.log("Hello" + " " + counter);
        if(counter >= 10) {
            clearInterval(t)
        }
    }, 1000);



}

countHello(10)