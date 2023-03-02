

//funkcja jeden ma w swoim ciele funkcje dwa
function jeden() {

    // zmienna lokalna funkcji
    var zmienna1 = 1;

    //funkcja dwa w ciele funkcji jeden
    function dwa() {

        //To zostanie wyświetlone, ponieważ funkcja dwa ma dostęp do zmiennej1
        console.log(zmienna1);

        //zmienna lokalna fukncji dwa
        var zmienna2 = 3;
    }

    //wywołanie funkcji dwa w funkcji jeden
    dwa();

    //bład funkcja jeden nie ma dostępu do zmiennej dwa
    console.log(zmienna2)
}

//Bład, funkcja jeden nie wykona się poprawnie gdyż nie ma dostępu do funkcji dwa
jeden()