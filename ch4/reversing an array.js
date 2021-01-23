//Reversing an Arrayology
//Arrays have reverse method that changes the array by inverting the order in which its elements appear. For this exercise, write two functions,
//reverseArray and reverseArrayInPlace. The first, reverseArray, takes an array as arguement and produces a new array taht has the same elements in
//the inverse order.

//The second, reverseArrayInPlace, does what the reverse method does: it modifies the array given as argument by reversing its elements. Neither may use them
//standard reverse method.


function reverseArray(array) {
    let reverse_array = [];
    for (let i = (array.length - 1); i >= 0; i--) {
        reverse_array.push(array[i]);
    }
    return reverse_array;
    }
console.log(reverseArray(["A", "B", "C"]));

//This works, but is awkward. We can also use the unshift method on the new array to insert each element at its start.

function reverseArray(array) {
    let reverse_array = [];
    for (let i = 0; i < array.length; i++) {
        reverse_array.unshift(array[i]);
    }
    return reverse_array;
    }

console.log(reverseArray(["A", "B", "C"]));

//reverseArrayInPlace

function reverseArrayInPlace(array) {
    for (let i = 0; i < Math.floor((array.length)/2); i++ ) {
        var z = array[i];
        array[i] = array[array.length - 1 - i];
        array[array.length - 1 - i] = z;
    }
    return array;
}

var arrayValue = [1, 2, 3, 4, 5];
reverseArrayInPlace(arrayValue);
console.log(arrayValue);
