/* Zadanie */

function distFromAvarage(array) {
    let tab = [];
    let sum = 0;
    for(let el of array) {
        sum = sum + el;
    }
    let avg = sum / array.length;
    for (let el of array) {
        tab.push(Math.abs(el - avg))
    }
    return tab
}

console.log(distFromAvarage([1,2,3,4,5,6,7]));
console.log(distFromAvarage([1,1,1,1]));
console.log(distFromAvarage([2,8,3,7]));

/* Zadanie 1 */

const favourite = ["watermelon", "orange", "pineapple", "kiwi"];
console.log(favourite[0]);
console.log(favourite[favourite.length - 1]);

for (let i=0; i<favourite.length; i++){
    console.log(favourite[i]);
}

/* Zadanie 3 */

function printTable(array){
    for(let el of array) {
        console.log(el);
    }
}

const taskThreeArr = [1,2,4,5,9];

printTable(taskThreeArr);

/* Zadanie 4 */

function multiply(array){
    let sum = 1;
    for(let i=0; i<array.length; i++){
        sum = sum * array[i];
    }
    return sum
}

console.log(multiply([1,2,3,4,5,6,7]));
console.log(multiply([1,1,1,1]));
console.log(multiply([2,8,3,7]));

/* zadanie 5 */

function getEvenAvarage(array) {
    let counter = 0;
    let sum = 0;
    let avg = 0;
    for(let i=0; i<array.length; i++ ){
        if(array[i] % 2 === 0){
            counter ++;
            sum = sum + array[i]
            if(sum === 0){
                break
            }
        }
    }

    avg = sum / counter;
    return avg;
}

console.log(getEvenAvarage([1,2,3,4,5,6,7]));
console.log(getEvenAvarage([1,1,1,1]));
console.log(getEvenAvarage([2,8,3,7,4]));

/* zadanie 6 */

function sortArray(array){
    array.sort(function (a, b){
        return a - b;
    });
    return array;
}

console.log(sortArray([145,11,3,64,4,6,10]));

/* zadanie 7 */

console.log("Zadanie 7");
function addArrays(array1, array2){
    let newArray = [];
    if(array1.length > array2.length ){
        for(let i=0; i<array1.length; i++){
            if(array1[i] !== undefined && array2[i] !== undefined){
                newArray.push(array1[i] + array2[i])
            } else {
                newArray.push(array1[i])
            }
        }
    } else if(array1.length === array2.length) {
        for (let j=0; j<array2.length; j++){
            newArray.push(array1[j] + array2[j])
        }
    } else {
        for (let k=0; k<array2.length; k++){
            if(array1[k] !== undefined && array2[k] !== undefined) {
                newArray.push(array1[k] + array2[k])
            } else {
                newArray.push(array2[k])
            }
        }
    }
    return newArray;
}

console.log(addArrays([8,3,22], [1,3,2]));
console.log(addArrays([4,0,1,3,4], [1,9,6,7,8,17]));
console.log(addArrays([2,3,1,5,3,5], [3,1,76,1]));