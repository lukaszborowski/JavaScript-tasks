const  task1Array = [
    [2, 3],
    ["Ala", "Ola"],
    [true, false],
    [5, 6, 7, 8],
    [12, 15, 67]
];

/* zadanie 1 */
console.log("Zadanie 1");
console.log(task1Array[3][2]);
console.log(task1Array[2].length);
console.log(task1Array[4][2]);

/* zadanie 2 */
console.log("Zadanie 2");

/* for(let i=0; i<task1Array.length;i++){
    for (let j=0; j<task1Array[i].length; j++){
        console.log(task1Array[i][j]);
    }
} */

function print2DArray(array){
    for(el of array){
        for(nr of el){
            console.log(nr);
        }
    }
}

print2DArray(task1Array);