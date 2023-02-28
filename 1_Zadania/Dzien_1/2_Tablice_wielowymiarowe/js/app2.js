/* Zadanie 1 */


var task1Array = [
    [2, 3],
    ["Ala", "Ola"],
    [true, false],
    [5, 6, 7, 8],
    [12, 15, 67]
];
console.log(task1Array[3][2]);
console.log(task1Array[1].length);
console.log(task1Array[4][2]);

/* Zadanie 2 */

var arrr = [[1, 2], [3, 4], [5, 6], [7, 8]];

/*

function print2DArray(array) {
    for (var i = 0; i < array.length; i++) {
        for (var j = 0; j < array[i].length; j++) {
            console.log(array[i][j]);
        }
    }
}

print2DArray(arrr);



 */
function print2DArray(array) {
    for (el of array) {
        console.log(array);
        for (nr of el) {
            console.warn(nr);
        }
    }
}

print2DArray(arrr);



