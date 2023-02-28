// Zadanie 1

function getNumber(n, array) {

    if (array.includes(n)) {
        console.log("true");

    } else {
        console.log("false");
    }


}

getNumber(2, [33, 54, 2, 1, 4, 100]);
getNumber(5, [33, 54, 2, 1, 4, 100]);

// Zadanie 2

function addTheSameNumbers(n, array) {
    if (array.includes(n)) {
        let container = 0;
        for (var i = 0; i < array.length; i++) {
            if (array[i] === n) {
                container += n;
            }

        }
        console.log(container);


    } else {
        console.log("null");

    }


}

addTheSameNumbers(7, [4, 7, 24, 7, 0, 10]);
addTheSameNumbers(9, [33, 54, 2, 1, 9, 100]);
addTheSameNumbers(0, [33, 0, 2, 0, 9, 0]);
addTheSameNumbers(43, [6, 0, 2, 2, 3, 46]);

