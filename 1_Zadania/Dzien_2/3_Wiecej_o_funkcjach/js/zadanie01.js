

//funkcja głowna, mająca w dwa parametry, funkcje sortującą tablice i zmienną z przypisaną tablicą
function sortArray() {

    //zmiena points jest lokalna i dostępna tylko dla tej funcji. points jest tablicą
    const points = [41, 3, 6, 1, 114, 54, 64];

    //funkcja  sortująca tablice od najniższej do najwyższej wartości
    points.sort(function(a, b){
        //return sortujący wartości w tablicy
        return a-b;
    });

    //zwrot posortowanej tablicy
    return points;
}

//wywołąnie funkcji (callback).
sortArray();
