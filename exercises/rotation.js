// INPUT
// array
// 1-element array --> return the input
// (or empty array) --> []
// (or not an array) --> undefined

// OUTPUT
// a NEW 'rotated array'-- that is, an array with the first element
// 'rotated' to the end of the array

// ALGO
// 1. analyze input
//    if input is not an array, return undefined
//    if input is an array, but the length is 0 or 1, return the original input

// 2. for arrays of length greater than 1--
//    copy the array (arrayCopy = arr.slice())
//    remove the first value (rotatingElement = arrayCopy.shift());
//    add the removed element to the end of the array (arrayCopy.push(rotatingElement));
//    return arrayCopy


function rotateArray(array) {
  if (!Array.isArray(array)) {
    return undefined;
  } else if (array.length <= 1) {
    return array;
  }

  let arrayCopy = array.slice();
  let rotatingElement = arrayCopy.shift();
  arrayCopy.push(rotatingElement);
  return arrayCopy;
}

// TESTS
// return rotated array:
console.log(rotateArray([7, 3, 5, 2, 9, 1]));       // [3, 5, 2, 9, 1, 7]
console.log(rotateArray(['a', 'b', 'c']));          // ["b", "c", "a"]

// for an array of 1 element, return the original array:
console.log(rotateArray(['a']));                    // ["a"]

// for an empty array, return an empty array:
console.log(rotateArray([]));                       // []

// if input is not an array, return undefined:
console.log(rotateArray('a'));              // undefined
console.log(rotateArray(null));             // undefined
console.log(rotateArray());                         // undefined
console.log(rotateArray(1));   

// handle an array of elements of different types:
console.log(rotateArray([1, 'a', 3, 'c']));         // ["a", 3, "c", 1]

// handle nested objects:
console.log(rotateArray([{ a: 2 }, [1, 2], 3]));    // [[1, 2], 3, { a: 2 }]

// the input array is not mutated
const array = [1, 2, 3, 4];
console.log(rotateArray(array));                    // [2, 3, 4, 1]
console.log(array);                                 // [1, 2, 3, 4]