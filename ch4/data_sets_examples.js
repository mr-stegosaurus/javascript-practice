//notes from ch4 examples, do not execute

//index of an array
//remember to use zero based counting
let listOfNumbers = [2, 3, 5, 7, 11];
console.log(listOfNumbers[2]);
console.log(listOfNumbers[0];
console.log(listofNumbers[2-1];)

//Properties

//Almost all JavaScript values have properties. The two ways to acess properties in JavaScript are with a dot
//and with square brackets.

//Property names are strings. Some properties:
//string.toUpperCase; returns a copy of the string in which all letters have been converted to uppercase.
//string.toLowerCase
//string.length; tells us how many elements an array has.

//Can be called with array["length"] or with array.length

let sequence = [1, 2, 3];
sequence.push(4);
sequence.push(5);
console.log(sequence);
// → [1, 2, 3, 4, 5]
console.log(sequence.pop());
// → 5
console.log(sequence);
// → [1, 2, 3, 4]

//Push method adds values to the end of an arrary,
//and the pop method does the opposite, removing the last value in the array.

//Objects

//Values of the type object are arbitrary collections of properties. One way to create an Object
// is by using braces as an expression.

let day1 = {
    squirrel: false,
    events: ["work", "touched tree", "pizza", "running"]
};

console.log(day1.squirrel);
// false
console.log(day1.wolf);
// undefines
day1.wolf = false;
console.log(day1.wolf);
// false

//You can delete properties from objects with "delete" operate.

let anObject = {left: 1, right: 2};
console.log(anObject.left);
// 1
delete anObject.left;
console.log(anObject.left);
// undefined
console.log("right" in anObject);
// true
