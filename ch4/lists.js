//A common data structure is the list. A list is a nested set of objects, with the first object holding a reference
//to the second, the second to the third, and so on.

let list = {
  value: 1,
  rest: {
    value: 2,
    rest: {
      value: 3,
      rest: null
    }
  }
};

//Write a function arrayToList that builds up a list structure like the one shown when given [1, 2, 3] as argument.
function arrayToList(array) {
    var list = null
    for (var i = array.length - 1; i >=0; i--) {
        list = {value: array[i], rest: list}
    }
    return list
}

console.log(arrayToList([10, 20]));

//Also write a listToArray function that produces an array from a list.
function arrayToList(array) {
    var list = null
    for (var i = array.length - 1; i >=0; i--) {
        list = {value: array[i], rest: list}
    }
    return list
}

function listToArray(list) {
    var array = []
    for (var node = list; node; node = node.rest)
        array.push(node.value)
    return array
}

console.log(listToArray(arrayToList([10, 20, 30])))

//Then add a helper function prepend, which takes an element and a list and creates a new list that adds the element to the front of the input list,
//and nth, which takes a list and a number and returns the element at the given position in the list (with zero referring to the first element) or undefined when there is no such element.

function prepend(value, list) {
    return {value: value, rest: list}
}

console.log(prepend(10, prepend(20, null)));

function arrayToList(array) {
    var list = null
    for (var i = array.length - 1; i >=0; i--) {
        list = {value: array[i], rest: list}
    }
    return list
}

function nth(list, n) {
    if (!list)
        return undefined;
    else if (n == 0)
        return list.value;
    else
        return nth(list.rest, n - 1)
}

//A recursive function calls itself inside the function.

console.log(nth(arrayToList([10, 20, 30]), 1));
