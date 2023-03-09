document.addEventListener("DOMContentLoaded", function() {

    // zadanie 1
    console.log("Zadanie 1");

    function getNumber(number, array){
       if(array.includes(number)){
           return true
        } else {
           return false
       }
    }

    console.log(getNumber(2, [33, 54, 2, 1, 4, 100]));
    console.log(getNumber(5, [33, 54, 2, 1, 4, 100]));

    // zadanie 2
    console.log("zadanie 2");

   /* function addTheSameNumbers(number, array){
        let sum = 0;
        for(let i=0; i<array.length; i++){
            if(array[i] === number){
                sum += array[i];
           }
        } if(!array.includes(number)){
            return null;
        }
        return sum;
    }

    */

    function addTheSameNumbers(number, array){
        let sum = 0;
        for(let el of array){
            if(el === number){
                sum += el;
            }
        } if(!array.includes(number)){
            return null;
        }
        return sum;
    }

    console.log(addTheSameNumbers(7, [4, 7, 24, 7, 0, 10]));
    console.log(addTheSameNumbers(9, [33, 54, 2, 1, 9, 100] ));
    console.log(addTheSameNumbers(0, [33, 0, 2, 0, 9, 0] ));
    console.log(addTheSameNumbers(43, [6, 0, 2, 2, 3, 46] ));

    // zadanie 1 dodatkowe
    console.log("Zadanie 1 dodatkowe");

    function factors(number){
        let fct = [];
        if(number <= 0){
            return fct;
        }
        for(let i=number; i>0; i--){
            if(number % i === 0){
                fct.push(i)
            }
        }
        return fct;
    }

    console.log(factors(2));
    console.log(factors(54));
    console.log(factors(-4));

    // zadanie 2 dodatkowe
    console.log("Zadanie 2 dodatkowe");

    function getMissingElement(array){
        let missing = null;
        for(let i=0; i<array.length; i++){

            }
        return missing;
        }


    console.log(getMissingElement([1,2,3,4,5,6,7]));
    console.log(getMissingElement([6,7,8,10,11,12,13,14,15]));
    console.log(getMissingElement([-4,-3,-2,0,1,2,3,4]));

    // zadanie 3 dodatkowe
    console.log("Zadanie 3 dodatkowe");

    function getLastNumbers(num, arr){
        let tab = [];
        if(typeof num === "number"){
            tab = arr.slice(arr.length - num, arr.length );
            console.log(tab);
        } else {
            tab = [];
            console.log(tab);
        }
    }


        getLastNumbers(2, [1,2,3,4,5,6,7]);
        getLastNumbers(4, [6,7,8,10,11,12,13,14,15])
        getLastNumbers('ala', [-4,-3,-2,0,1,2,3,4])
});