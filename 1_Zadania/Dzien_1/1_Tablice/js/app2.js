/* Zadanie z wykładowcą */

function distFromAvarage(arr) {
    var tab = [];
    var sum = 0;
    for (var el of arr) {                   /* Kazdy element z tablicy */
        sum = sum + el;
    }
    var avg = sum / arr.length;
    for (var el of arr) {
        tab.push(Math.abs(el - avg));
    }
    return tab;
}

console.log(distFromAvarage([1, 2, 3, 4, 5, 6, 7]));

/* Zadanie 1 samodzielne */

var favFruit = ['Watermelon', 'Orange', 'DragonFruit', 'Kiwi'];
console.log(favFruit[0]);
console.log(favFruit[favFruit.length - 1]);
console.log(favFruit.length);

/* Zadanie 3 samodzielne */

function printTable(array) {

    for (var i = 0; i < array.length; i++) {
        console.log(array[i]);
    }
}

var innerTable = [3, 5, 7, 8, 12, 45, 67];
printTable(innerTable);


/* Zadanie 4 samodzielne */

function multiply(array) {
    var licznik = 1;
    for (var i = 0; i < array.length; i++) {
        licznik = licznik * array[i];
    }
    return licznik;
}

var tableFour = [1, 4, 6, 8, 9, 12];
console.log(multiply(tableFour));


/* Zadanie 5 samodzielne */

function getEvenAvarage(array) {
    var parzyste = 0;
    var count = 0;
    var avg = 0;
    for (var i = 0; i < array.length; i++) {
        if (array[i] % 2 === 0) {
            parzyste = parzyste + array[i];
            count++;
            if (parzyste === 0) {
                break;
            }
        }
    }


    avg = parzyste / count;
    return avg;
}

console.log(getEvenAvarage([1, 2, 3, 4, 5, 6, 7]));
console.log(getEvenAvarage([1, 1, 1, 1]));
console.log(getEvenAvarage([2, 8, 3, 7, 4]));

/* Zadanie 6 */

function sortArray(array) {
    array.sort(function (a, b) {
        return a - b;

    });
    return array;
}

console.log(sortArray([145, 11, 3, 64, 4, 6, 10]));


/* Zadanie 7 */

function addArrays(arr1, arr2) {
    var arr3 = [];
    if (arr1.length > arr2.length) {
        for (var i = 0; i < arr1.length; i++) {
            var a = 0;
            var b = 0;
            if (arr1[i] !== undefined) {
                a = arr1[i];
            } else if (arr2[i] !== undefined) {
                b = arr2[i];
            }

            arr3.push(a + b)
        }
    } else {
        for (var k = 0; k < arr2.length; k++) {
            var c = 0;
            var d = 0;
            if (arr1[k] !== undefined) {
                c = arr1[k];
            } else if (arr2[k] !== undefined) {
                d = arr2[k];
            }
            arr3.push(c + d);
        }

    }
    return arr3;

}

console.log(addArrays([4, 0, 1, 3, 4], [1, 9, 6, 7, 8, 17]));
console.log(addArrays([8, 3, 22], [1, 3, 2]));
console.log(addArrays([2, 3, 1, 5, 3, 5], [3, 1, 76, 1]));

