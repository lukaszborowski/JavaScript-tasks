function countHello (nr) {
    let counter = 0;
    let timer = setInterval(function () {
        counter++;
        console.log("Hello" + " " + counter);
        if(counter >= nr) {
            clearInterval(timer)
        }
    }, 1000)
}

countHello(12);