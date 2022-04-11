/// "Write a function called doubler that doubles every value in an array".

function doubler(array) {

}

//TESTS

function bothNaN(element1, element2) {
  if (Number.isNaN(element1) && Number.isNaN(element2)) {
    return true;
  } else {
    return false;
  }
}

function compareArrays(arr1, arr2) {
  if (arr1.length !== arr2.length) {
    return false;
  }

  for (let i = 0; i < arr1.length; i++) {
    if (arr1[i] !== arr2[i] && !bothNaN(arr1[i], arr2[i])) {
      return false;
    }
  }

  return true;
}

//GENERIC
// - elements that are numbers should be multiplied by 2
console.log(compareArrays(doubler([1, 2, 3, 4]), [2, 4, 6, 8]));
// - elements that are strings should be repeated twice via concatenation
console.log(compareArrays(doubler(['a', 'b', 'c']), ['aa', 'bb', 'cc']));
// - other types of elements should be duplicated in the array
console.log(compareArrays(doubler([true, undefined, false, null]), [true, true, undefined, undefined, false, false, null, null]));
// - the input array should not be mutated
let input = [1, 2, 3];
let inputCopy = [1, 2, 3].slice();
doubler(input);
console.log(compareArrays(input, inputCopy));
// - elements that are special number values should remain unchanged
console.log(compareArrays(doubler([1, NaN, 2, Infinity, 3, -Infinity]), [2, NaN, 4, Infinity, 6, -Infinity]));
// - elements that are any other type of number should be treated normally (multiplied by 2)
console.log(compareArrays(doubler([1, 0, 2.67, -5.4]), [2, 0, 5.34, -10.8]));
// - elements that are empty strings should remain unchanged
console.log(compareArrays(doubler([1, 2, 3, '', 4]), [2, 4, 6, '', 8]));
// - elements that are any other type of string should be treated normally (repeated twice)
// - the input array can contain a mixture of different types of elements
console.log(compareArrays(doubler([null, 0, 'peanut', true, Infinity, -12.34]), [null, null, 0, 'peanutpeanut', true, true, Infinity, -24.68]));
// - non-primitive elements should have their reference duplicated, not their value
let obj1 = { a: 1, b: 2, c: 3, };
let obj2 = ['a', 'b', 'c'];
console.log(compareArrays(doubler([obj1, obj2]), [obj1, obj1, obj2, obj2]));
// - elements that appear more than once should be treated normally (as specified above)
console.log(compareArrays(doubler(['a', 'aa', 'aa', 'bb', 'cc', 'cc']), ['aa', 'aaaa', 'aaaa','bbbb', 'cccc', 'cccc']));
// - elements that contain nested arrays or objects should be treated normally (duplicated)
let obj3 = [{ a: 5, b: 6, }, { c: 7, d: 8, }];
console.log(compareArrays(doubler([obj3]), [obj3, obj3]));
// - if the input array contains empty slots (a "sparse array"), they should be removed
let sparseArray = [1, 2, 3];
sparseArray[5] = 4;
console.log(compareArrays(doubler(sparseArray), [2, 4, 6, 8]));
// - if an inner array (element) contains empty slots, they should remain unchanged
let sparseArrayB = [1, 2, 3];
sparseArrayB[5] = 4;
let sparseArrayBCopy = sparseArrayB.slice();
let nestedSparseArray = [2, 4, sparseArrayB, 5]
console.log(compareArrays(doubler(nestedSparseArray), [4, 8, sparseArrayBCopy, 10]));
// - if the input array contains any object properties, they should remain unchanged
let arrayWithProp = [1, 2, 3];
arrayWithProp['a'] = 4;
arrayWithProp['b'] = 5;
console.log(compareArrays(doubler(arrayWithProp), [2, 4, 6]));
console.log(doubler(arrayWithProp)['a'] === 4);
// - if an inner array (element) contains any object properties, they should remain unchanged
// - if the array is empty, return an empty array
console.log(compareArrays(doubler([]), []));
// - if multiple arguments are passed, ignore all but the first
console.log(compareArrays(doubler([1, 2, 3], [4, 5, 6]), [2, 4, 6]));
// - if the argument is a string, treat it as an array of characters
console.log(compareArrays(doubler('peanut'), ['pp', 'ee', 'aa', 'nn', 'uu', 'tt']));
// - if the argument is a non-negative integer, treat it as an array of digits
console.log(compareArrays(doubler(123), [2, 4, 6]));
// - if the argument is an object, treat it as an array of its property values
console.log(compareArrays(doubler({ a: 1, b: 2, c: 3}), [2, 4, 6]));
// - all other kinds of inputs are invalid, and should return the string 'Invalid input'
console.log((doubler() === 'Invalid input')
console.log((doubler(true) === 'Invalid input')
console.log((doubler(null) === 'Invalid input')

//EDGE