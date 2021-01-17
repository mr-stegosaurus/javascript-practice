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

//To find out what properties an object has, you can use the Object.keys function. Returns object's property names.

console.log(Object.keys({x: 0, y: 0, z: 2}));
// ["x", "y", "z"]

//There's an Object.assign function that copies all properties from one object into another.

let objectA = {a: 1, b: 2};
Object.assign(objectA, {b: 3, c: 4});
console.log(objectA):
// {a: 1, b: 3, c: 4}

//Our journal can be represented as an array of objects.

let journal = [
    {events: ["work", "touched tree", "pizza",
              "running", "television"],
     squirrel: false},
    {events: ["work", "ice cream", "cauliflower",
            "lasagna", "touched tree", "brushed teeth"],
     squirrel: false},
    {events: ["weekend", "cycling", "break", "peanuts",
              "beer"],
     squirrel: true},
     /* and so on... */
]

//Mutability

//Numbers, strings, and Booleans, are all immutable. It is impossible to change values of those types. You can combine them and derive new values from them,
//but when you take a specific string value, that value will always remain the same.

//Objects work differently. You can change their properties, causing a single object value to have different content at different times.

let object1 = {value: 10};
let object2 = object1;
let object3 = {value: 10}};

console.log(object1 == object2);
// → true
console.log(object1 == object3);
// → false

object1.value = 15;
console.log(object2.value);
// → 15
console.log(object3.value);
// → 10

//The object1 and object2 bindings grasp the same object, which is why changing object1 also changes the value of object2. The binding
//object3 points to a different object, which initially contains the same properties as object1 but lives a separte life.

//Computing Correlation

function phi(table) {
    return (table[3] * table[0] - table[2] * table[1] /
        Math.sqrt((table[2] + table[3]) *
                  (table[0] + table[1]) *
                  (table[1] + table[3]) *
                  (table[0] + table[2]));
}

console.log(phi([76, 9, 4, 1]));
// → 0.068599434

//Suppose you have a list of journal entries. You could extract them in this manner:

function tableFor(event, journal) {
    let table = [0, 0, 0, 0];
    for (let i = 0; i < journal.length; i++) {
        let entry = journal[i], index = 0;
        if (entry.events.includes(event)) index +=1;
        if (entry.squirrel) index +=2;
        table[index] +=1;
    }
    return table;
}

console.log(tableFor("pizza", JOURNAL));
// → [76, 9, 4, 1]

//Array Loops

//In the tableFor function, there's a loop like this:
for (let i = 0; i < JOURNAL.length; i++) {
  let entry = JOURNAL[i];
  // Do something with entry
}

//This is common in clasical JavaScript. In modern JavaScript we write:

for (let entry of JOURNAL) {
    console.log('${entry.events.length} events.');
}
//When a for loop looks like this, with the word of after a variable definition,
// it will loop over the elements of the value given after of. This works not only for arrays
// but for strings and some other data structures.
