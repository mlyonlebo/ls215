// iteration with forEach 

// Write a Function named myForEach that is similar to the built-in Array.prototype.forEach method. 
// Your Function should take an array and another Function as arguments. The Function passed to 
// myForEach should reassign a variable in the outer scope. For instance, in the code fragment below, 
// the Function passed to myForEach reassigns the min variable.

function myForEach(array, func) {
  for (let i = 0; i < array.length; i++) {
    func(array[i]);
  }
}

// let min = Infinity;
// let getMin = value => (min = value <= min ? value : min);
// myForEach([4, 5, 12, 23, 3], getMin);
// console.log(min);                        // 3

// selection with filter

// Write a function that's similar to Array.prototype.filter. It takes an array and a function as 
// arguments, and returns an array whose values are only those that the function passed returns as true.

function myFilter(array, func) {
  let result = [];

  myForEach(array, function (element) {
    if (func(element)) {
      result.push(element);
    }
  });

  return result;
}

// let isPythagoreanTriple = function (triple) {
//   return Math.pow(triple.a, 2) + Math.pow(triple.b, 2) === Math.pow(triple.c, 2);
// };

// console.log(myFilter([{ a: 3, b: 4,  c: 5 },
//           { a: 5, b: 12, c: 13 },
//           { a: 1, b: 2,  c: 3 },], isPythagoreanTriple));

// returns [ { a: 3, b: 4, c: 5 }, { a: 5, b: 12, c: 13 } ]

// transformation with map

// Write a Function named myMap that is similar to the built-in Array.prototype.map method. 
// Your Function should take an array and another Function (the callback) as arguments, and 
// return a new Array. The new Array's values should be the return values of the callback 
// Function.

function myMap(array, func) {
  let result = [];
  
  myForEach(array, function (element) {
    result.push(func(element));
  });

  return result;
}

// example with filter

// let plusOne = n => n + 1;
// console.log(myMap([1, 2, 3, 4], plusOne));       // [ 2, 3, 4, 5 ]

// function getBooksTitle(books) {
//   return myMap(books, function (book) {
//     return book.title;
//   });
// };

// let books = [
//   {
//     title: 'JavaScript and JQuery: Interactive Front-End Web Development',
//     author: 'Jon Ducket',
//     edition: '1st',
//   },
//   {
//     title: 'Eloquent JavaScript: A Modern Introduction to Programming',
//     author: 'Haverbeke',
//     edition: '2nd',
//   },
//   {
//     title: "Learning Web Design: A Beginner's Guide to HTML, CSS, JavaScript, and Web Graphics",
//     author: 'Jennifer Niederst Robbins',
//     edition: '4th',
//   },
// ];

// console.log(getBooksTitle(books));

// reducing with reduce

// Write a function named myReduce that's similar to the Array.prototype.reduce method. 
// It takes an array and a function as arguments, and optionally, a third argument that 
// serves as an initial value. If the caller omits the initial value, myReduce should use 
// the first element of the Array as the initial value. myReduce should return the value 
// returned by the last invocation of the callback function.

function myReduce(array, func, initialValue) {
  let accumulator = initialValue;

  if (initialValue === undefined) {
    accumulator = array[0];
    array = array.slice(1); 
  }

  myForEach(array, function (currentValue) {
    accumulator = func(accumulator, currentValue);
  });
  return accumulator;
}

// console.log(
//   myReduce(
//     [1, 2, 3, 4], 
//     function (accumulator, current) {
//       return accumulator + current;
//     }
//   )
// );


// Example: Let's implement a function that takes a list of words as an argument and 
// returns the word with the most characters:

// function longestWord(words) {
//   return myReduce(words, longest);
// }

// function longest(accumulator, currentValue) {
//   if (currentValue.length > accumulator.length) {
//     accumulator = currentValue;
//   }
//   return accumulator;
// }

// console.log(longestWord(['abc', 'launch', 'targets', '']));      // "targets"

// interrogation with every() and some()

// Write a function named myOwnEvery that's similar to the Array.prototype.every method. 
// It should take an array and a function as arguments, and return true if every element 
// passed to the function evaluates as truthy.

function myOwnEvery(array, func) {
  let result = true;
  myForEach(array, function (element) {
    if (!func(element)) {
      result = false;
    }
  })
  return result;
}

// let isAString = value => typeof value === 'string';
// console.log(myOwnEvery(['a', 'a234', '1abc'], isAString));       // true

// example Let's write a program that checks whether all elements 
// of an array are Numbers.

// function areAllNumbers(array) {
//   return myOwnEvery(array, isANumber);
// }

// function isANumber(value) {
//   return typeof value === 'number' && !Number.isNaN(value);
// }

// console.log(areAllNumbers([1, 5, 6, 7, '1']))             // false
// console.log(areAllNumbers([1, 5, 6, 7, 1]))               // true
// console.log(areAllNumbers([1, 5, 6, 7, NaN]))             // false

// sort

// example: Let's write a program that sorts an array of student objects 
// based on their final grades from highest to lowest. In this example, our 
// callback function, compareGrades, uses the grade property to compare grades:

// let studentGrades = [
//   { name: 'StudentA', grade: 90.1 },
//   { name: 'StudentB', grade: 92 },
//   { name: 'StudentC', grade: 91.8 },
//   { name: 'StudentD', grade: 95.23 },
//   { name: 'StudentE', grade: 91.81 },
// ];

// function compareGrades(student1, student2) {
//   if (student1.grade > student2.grade) {
//     return -1;
//   } else if (student1.grade < student2.grade) {
//     return 1;
//   } else {
//     return 0;
//   }
// }

// console.log(studentGrades.sort(compareGrades));


// combining abstractions

// example: determine which letter is the most frequent starting letter of the names in this list


let names = ['Heather', 'Gisella', 'Katsuki', 'Hua', 'Katy', 'Kathleen', 'Otakar'];
let letters = names.map(firstName => firstName[0])
let counts = letters.reduce((letterCounts, currentLetter) => {
  if (letterCounts[currentLetter]) {
    letterCounts[currentLetter] += 1;
  } else {
    letterCounts[currentLetter] = 1;
  }
  return letterCounts;
}, {});

console.log(Object.keys(counts).reduce((previousVal, currentVal) => {
  if (counts[currentVal] > counts[previousVal]) {
    return currentVal;
  } else {
    return previousVal;
  }
}));