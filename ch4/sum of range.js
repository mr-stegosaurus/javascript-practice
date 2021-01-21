

//Write a range function that takes two arguments, start and end, and returns an array containg all the numbers
//from start up to (and including) end.

function range (start, end) {
    let array = []
    for (let i = start; i < end + 1; i++) {
        array.push(i)
    }
    return array
}
console.log(range(1,10))

//Next, write a sum function that takes an array of numbers and returns the sum of these numbers. Run the example program
//and see whether it does indeed return 55.

function range (start, end) {
    let array = [];
    for (let i = start; i < end + 1; i++) {
        array.push(i);
    }
    return array
}

function sum (array) {
    let total = 0;
    for (let i = 0; i < array.length; i++) {
        total += array[i];
    }
    return total
}
console.log(sum(range(1, 10)))

//As a bonus assignment, modify your range function to take an optional third
//argument that indicates the "step" value used when building the array. If no
//step is given, the elements go up by increments of one, corresponding to the
//old behavior.

function range (start, end, step) {
    let array = [];
    if (step == null) step = 1;

    if (step > 0) {
        for (let i = start; i <= end; i += step)
            array.push(i);
    } else {
        for (let i = start; i >=end; i += step)
            array.push(i);
    }
    return array
    }


console.log(range(5, 2, -1))

//The function call range(1, 10, 2) should return [1, 3, 5, 7, 9]. Make sure it also works
//with negative step values so that range(5, 2, -1) produces [5, 4, 3, 2].
