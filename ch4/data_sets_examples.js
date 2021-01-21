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
];
console.log(journal)

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

//Final Analysis

//We need to compute a correlation for every type of event that occurs in the data set. To do that, we first need to find every type of event.

function journalEvents(journal) {
    let events = []
    for (let entry of journal) {
        for (let event of entry.events) {
            if (!events.includes(event)) {
                events.push(event);
            }
        }
    }
    return events;
}

console.log(journalEvents(JOURNAL));
// ["carrot", "exercise", 'weekend', "bread", ...]
// By going over all the events and adding thhose that aren't already in there to the events array, the function collects every type of event.

//Using that, we can see all the correlations.

for (let event of JournalEvents(JOURNAL)) {
    console.log(event + ":", phi(tableFor(event, JOURNAL)))
}
// → carrot:   0.0140970969
// → exercise: 0.0685994341
// → weekend:  0.1371988681
// → bread:   -0.0757554019
// → pudding: -0.0648203724
// and so on...

//We can filter results greater than 0.1 or less than -0.1.

for (let event of journalEvents(JOURNAL)) {
    let correlation = phi(tableFor(event, JOURNAL));
    if (correlation > 0.1 || correlation < -0.1) {
        console.log(event + ":", correlation);
    }
}
// → weekend:        0.1371988681
// → brushed teeth: -0.3805211953
// → candy:          0.1296407447
// → work:          -0.1371988681
// → spaghetti:      0.2425356250
// → reading:        0.1106828054
// → peanuts:        0.5902679812

//Lets try:

for (let entry of JOURNAL) {
    if (entry.events.includes("peanuts") &&
        !entry.events.includes("brushed teeth")) {
       entry.events.push("peanut teeth")
        }
}
console.log(phi(tableFor("peanut teeth", JOURNAL)));
// → 1    A very strong result.

//Further Arrayology

//These are some generally useful array methods. We saw push and pop, which add and remove elements at the end of an array.
//The corresponding methods for adding and removing things at the start of an array are called unshit and shift.

let todoList = []
//Add tasks to end of queue.
function remember(task) {
    todoList.push(task);
}
//When you're ready to do something, you call getTask() to get  (and remove) the front item from the queue.
function getTask() {
    return todoList.shift();
}
//Adds a task but adds it to the front instead of the back of the queue.
function rememberUrgently(task) {
    todoList.unshift(task);
}

//indexOf methods allow us to search for a specific value. The method searches through the array from the start to the end and returns
//the index at which the request value was found-- or -1 if it wasnt found.

//lastIndexOf allows us to search from the back.

console.log([1, 2, 3, 2, 1].indexOf(2));
// → 1
console.log([1, 2, 3, 2, 1].lastIndexOf(2));
// → 3

//Slide takes the start and end indcies and returns an array that has only the elements between them. The start is
//inclusive, the end is exclusive.

console.log([0, 1, 2, 3, 4].slice(2, 4));
// → [2, 3]
console.log([0, 1, 2, 3, 4].slice(2));
// → [2, 3, 4]

//The concat method can be used to glue arrays together to create a new array, similar to what the + operator does for strings.

//Takes an array and an index, and it returns a new array that is a copy of the original array with the element at the given index removed.
//In this case, the value at "index" gets taken out due to the inclusivity boundaries.
function remove(array, index) {
    return array.slice(0, index)
        .concat(array.slice(index + 1));
}
console.log(remove(["a", "b", "c", "d", "e"], 2));
// → ["a", "b", "d", "e"]

//String properties

//Can use slice and indexOf, which resemble the same array methods.
console.log("coconuts".slice(4, 7));

//Trim method removes whitespace
console.log("  okay \n ".trim());
// okay

//zeroPad function also exists as a method. It's called padStart and takes the desired length and padding
//character as arguments.

console.log(String(6).padStart(3, "0"));
// 006

//You can split a string on every occurrence of another string with split and join it again with join.

let sentence = "Secretarybirds specialize in stomping";
let words = sentence.split(" ");
console.log(words);
// → ["Secretarybirds", "specialize", "in", "stomping"]
console.log(words.join(". "));
// → Secretarybirds. specialize. in. stomping

//Repeat method will create new string containing multiple copies of the original string, glued together.

console.log("LA".repeat(3));
// LALALA

 //Rest Parameters
 //It can be useful for a function to accept any number of arguments.
 //To write such a function, you put three dots before the function's last parameter.
function max(...numbers) {
    let result = -Infinity;
    for (let number of numbers) {
        if (number > result) result = number;
    }
    return result;
}
console.log(max(4, 1, 9, -2));
// 9

//The rest parameter is bound to an array containing all further arguements. If there are other parameters before it,
//their values aren't part of the array.

//You can use a similar three-dot notation to call a function with an array of arguments.
let numbers = [5, 1, 7];
console.log(max(...numbers));
// → 7

//Remember Math objects like Math.max, Math.min, Math.sqrt. It is used as a container to group a bunch of related functionality.
//It provides a namespace so that all these functions and values to not have to be global bindings.

//example
function randomPointOncircle(radius) {
    let angle = Math.random() * 2 * Math.PI;
    return {x: radius * Math.cos(angle),
            y: radius * Math.sin(angle)};
}console.log(randomPointOnCircle(2));
// {x: 0.3667, y: 1.966}

//Math.random will return a new pseudorandom number between zero and one every time you call it.
//Math.floor will round down to the nearest whole number.

console.log(Math.floor(Math.random() * 10));
// 2

//Multiplying the random number by 10 gives us a number greater than or equal to 0 and below 10.
//Since Math.floor rounds down, this expression will produce, with equal chance, any number from 0 through 9.

//Destructuring
function phi(table) {
  return (table[3] * table[0] - table[2] * table[1]) /
    Math.sqrt((table[2] + table[3]) *
              (table[0] + table[1]) *
              (table[1] + table[3]) *
              (table[0] + table[2]));
}

//We can also write this as n00 = table[0]
function phi([n00, n01, n10, n11]) {
  return (n11 * n00 - n10 * n01) /
    Math.sqrt((n10 + n11) * (n00 + n01) *
              (n01 + n11) * (n00 + n10));
}

//this also works for bindings created with let, var, or const. If you know the value you are binding is an array, You
//can use square brackets to "look inside" of the value, binding its contents.

//Javascript gives us the functions JSON.stringify and JSON.parse to convert data to and from this format. The
//first takes a Javascript value and returns a JSON encoded string. The second takes such a string and converts it to the value it encodes.

let string = JSON.stringify({squirrel: false,
                             events: ["weekend"]});
console.log(string);
// → {"squirrel":false,"events":["weekend"]}
console.log(JSON.parse(string).events);
// → ["weekend"]

//summary
//Objects and arrays provide ways to group several values into a single value. Conceptually, this allows us to put a bunch of
//related things in a bag and run around with the bag, instead of wrapping our arms around all of the individual things and trying to
//hold on to them separtely.
