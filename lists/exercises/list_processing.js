// 1. SUM OF DIGITS

// Write a function that takes one argument, a positive integer, 
// and returns the sum of its digits. Do this without using for, while, or do...while loops
//  - instead, use a series of method calls to perform the sum.

// SOLUTION
// function sum(num) {
//   return String(num)
//     .split('')
//     .reduce((total, n) => total += Number(n), 0);
// }

// TESTS
// console.log(sum(23));           // 5
// console.log(sum(496));          // 19
// console.log(sum(123456789));    // 45




// 2. ALPHABETICAL NUMBERS

// Write a function that takes an array of integers between 0 and 19 
// and returns an array of those integers sorted based on the English 
// word for each number:

// zero, one, two, three, four, five, six, seven, eight, nine, ten, 
// eleven, twelve, thirteen, fourteen, fifteen, sixteen, seventeen, 
// eighteen, nineteen

// Do not mutate the argument.

// ALGO
// init an obj of int keys matching to english word values eg { '3': 'three', }
// sort the given array
  // provide a sort function that, given two int arguments,
  // retrieves the corresponding english word from the obj
  // determines which word precedes the other, 

// SOLUTION
//   const wordsForNumbers = { 
//     '0': 'zero',
//     '1': 'one',
//     '2': 'two',
//     '3': 'three',
//     '4': 'four',
//     '5': 'five',
//     '6': 'six',
//     '7': 'seven',
//     '8': 'eight',
//     '9': 'nine',
//     '10': 'ten',
//     '11': 'eleven',
//     '12': 'twelve',
//     '13': 'thirteen',
//     '14': 'fourteen',
//     '15': 'fifteen',
//     '16': 'sixteen',
//     '17': 'seventeen',
//     '18': 'eighteen',
//     '19': 'nineteen',
//   }

// function alphabeticNumberSort(numbers) {
//   return [...numbers].sort((a, b) => { 
//     if (wordsForNumbers[String(a)] < wordsForNumbers[String(b)]) {
//       return -1;
//     } else if (wordsForNumbers[String(a)] > wordsForNumbers[String(b)]) {
//       return 1;
//     } else {
//       return 0;
//     }
//   });
// }

// TESTS
// console.log(alphabeticNumberSort(
//   [0, 1, 2, 3, 4, 5, 6, 7, 8, 9, 10, 11, 12, 13, 14, 15, 16, 17, 18, 19]));
// [8, 18, 11, 15, 5, 4, 14, 9, 19, 1, 7, 17, 6, 16, 10, 13, 3, 12, 2, 0]





// 3. MULTIPLY ALL PAIRS

// Write a function that takes two array arguments, each containing a list of numbers, 
// and returns a new array containing the products of all combinations of number 
// pairs that exist between the two arrays. The returned array should be sorted in 
// ascending numerical order.

// You may assume that neither argument will be an empty array.

// ALGO
// init results array

// double loop:
// outer loop iterates through the first array;
// inner loop iterates through the second array
  // pushes the product of the first and second elements to a results array

// sort the results array


// SOLUTION
// function multiplyAllPairs(arr1, arr2) {
//   let results = [];

//   arr1.forEach((element) => {
//     arr2.forEach((innerElement) => {
//       results.push(element * innerElement);
//     })
//   });

//   return results.sort((a, b) => a - b);
// }

// TESTS
// console.log(multiplyAllPairs([2, 4], [4, 3, 1, 2]));    // [2, 4, 4, 6, 8, 8, 12, 16]




// 4. SUM OF SUMS

// Write a function that takes an array of numbers and returns the sum of the sums 
// of each leading subsequence in that array. Examine the examples to see what we 
// mean. You may assume that the array always contains at least one number.

// ALGO
// helper function that, given an array, computes the sum of the elements with reduce

// use reduce with 3 args (sum, currentVal, currentIdx)
// 

// SOLUTION
// function sumOfSums(array) {
//   let incrementValue = 0;
//   return array.reduce((sum, currentVal) => {
//     incrementValue += currentVal;
//     return sum + incrementValue;
//   }, 0);
// }

// TESTS
// console.log(sumOfSums([3, 5, 2]));        // (3) + (3 + 5) + (3 + 5 + 2) --> 21
// console.log(sumOfSums([1, 5, 7, 3]));     // (1) + (1 + 5) + (1 + 5 + 7) + (1 + 5 + 7 + 3) --> 36
// console.log(sumOfSums([4]));              // 4
// console.log(sumOfSums([1, 2, 3, 4, 5]));  // 35



// 5. LEADING SUBSTRINGS

// Write a function that takes a string argument and returns a list of substrings of that string. 
// Each substring should begin with the first letter of the word, and the list should be ordered 
// from shortest to longest.

// same algo as previous!

// SOLUTION
// function leadingSubstrings(str) {
//   let result = [];
//   str.split('').reduce((accumulator, currentChar) => {
//     let substring = accumulator + currentChar;
//     result.push(substring);
//     return substring;
//   }, '');
//   return result;
// }

// TESTS
// console.log(leadingSubstrings('abc'));      // ["a", "ab", "abc"]
// console.log(leadingSubstrings('a'));        // ["a"]
// console.log(leadingSubstrings('xyzzy'));    // ["x", "xy", "xyz", "xyzz", "xyzzy"]


// 6. ALL SUBSTRINGS

// Write a function that returns a list of all substrings of a string. 
// Order the returned list by where in the string the substring begins. 
// This means that all substrings that start at index position 0 should 
// come first, then all substrings that start at index position 1, and 
// so on. Since multiple substrings will occur at each position, return 
// the substrings at a given index from shortest to longest.

// You may (and should) use the leadingSubstrings function you wrote in 
// the previous exercise:

// SOLUTION
// function leadingSubstrings(str) {
//   let result = [];
//   str.split('').reduce((accumulator, currentChar) => {
//     let substring = accumulator + currentChar;
//     result.push(substring);
//     return substring;
//   }, '');
//   return result;
// }

// function substrings(str) {
//   let result = [];
//   for (let i = 0; i < str.length; i++) {
//     let substringsFromIndex = leadingSubstrings(str.slice(i));
//     result.push(...substringsFromIndex);
//   }
//   return result;
// }

// TEST
// console.log(substrings('abcde'));
// returns
// [ "a", "ab", "abc", "abcd", "abcde",
//   "b", "bc", "bcd", "bcde",
//   "c", "cd", "cde",
//   "d", "de",
//   "e" ]




// 7. PALINDROMIC SUBSTRINGS

// Write a function that returns a list of all substrings of a string that 
// are palindromic. That is, each substring must consist of the same 
// sequence of characters forwards as backwards. The substrings in the 
// returned list should be sorted by their order of appearance in the input 
// string. Duplicate substrings should be included multiple times.

// You may (and should) use the substrings function you wrote in the previous 
// exercise.

// For the purpose of this exercise, you should consider all characters and pay 
// attention to case; that is, 'AbcbA' is a palindrome, but 'Abcba' and 'Abc-bA' 
// are not. In addition, assume that single characters are not palindromes.

// function leadingSubstrings(str) {
//   let result = [];
//   str.split('').reduce((accumulator, currentChar) => {
//     let substring = accumulator + currentChar;
//     result.push(substring);
//     return substring;
//   }, '');
//   return result;
// }

// function getSubstrings(str) {
//   let result = [];
//   for (let i = 0; i < str.length; i++) {
//     let substringsFromIndex = leadingSubstrings(str.slice(i));
//     result.push(...substringsFromIndex);
//   }
//   return result;
// }

// function isPalindromic(str) {
//   if (str.length <= 1) {
//     return false;
//   }

//   let chars = str.split('');
//   return chars.join('') === chars.reverse().join('');
// }

// function palindromes(str) {
//   let substrings = getSubstrings(str);
//   return substrings.filter(substring => isPalindromic(substring));
// }

// console.log(palindromes('abcd'));       // []
// console.log(palindromes('madam'));      // [ "madam", "ada" ]

// console.log(palindromes('hello-madam-did-madam-goodbye'));
// returns
// [ "ll", "-madam-", "-madam-did-madam-", "madam", "madam-did-madam", "ada",
//   "adam-did-mada", "dam-did-mad", "am-did-ma", "m-did-m", "-did-", "did",
//   "-madam-", "madam", "ada", "oo" ]

// console.log(palindromes('knitting cassettes'));
// returns
// [ "nittin", "itti", "tt", "ss", "settes", "ette", "tt" ]




// 8 GROCERY LIST

// Write a function that takes a grocery list in a two-dimensional array 
// and returns a one-dimensional array. Each element in the grocery list 
// contains a fruit name and a number that represents the desired quantity 
// of that fruit. The output array is such that each fruit name appears 
// the number of times equal to its desired quantity.

// In the example below, we want to buy 3 apples, 1 orange, and 2 bananas. 
// Thus, we return an array that contains 3 apples, 1 orange, and 2 bananas.

// ALGO

// helper method, multiplyFruit
// takes an array arg
// inits a an array ob
// loops from 1 to arg[1]
// adds the fruit to the array each time

// main method, buyfruit
// iterate through array, pushing the result of multiply fruit to a results array

// SOLUTION
// function multiplyFruit(item) {
//   let [fruit, quantity] = item;
//   let result = [];
//   for (let i = 1; i <= quantity; i++) {
//     result.push(fruit);
//   }
//   return result;
// }

// function buyFruit(groceryList) {
//   let fruit = [];
//   groceryList.forEach(item => {
//     let fruits = multiplyFruit(item);
//     fruit.push(...fruits);
//   })
//   return fruit;
// }

// ALTERNATE (with map and reduce) 
// function buyFruit(groceryList) {
//   return groceryList.map(item => multiplyFruit(item))
//              .reduce((list, fruit) => list.concat(fruit));
// }


// console.log(buyFruit([['apple', 3], ['orange', 1], ['banana', 2]]));
// returns ["apple", "apple", "apple", "orange", "banana", "banana"]




// 9 INVENTORY

// Write a function that takes two arguments, an inventory item ID and 
// a list of transactions, and returns an array containing only the 
// transactions for the specified inventory item.

// const transactions = [ { id: 101, movement: 'in',  quantity:  5 },
//                        { id: 105, movement: 'in',  quantity: 10 },
//                        { id: 102, movement: 'out', quantity: 17 },
//                        { id: 101, movement: 'in',  quantity: 12 },
//                        { id: 103, movement: 'out', quantity: 15 },
//                        { id: 102, movement: 'out', quantity: 15 },
//                        { id: 105, movement: 'in',  quantity: 25 },
//                        { id: 101, movement: 'out', quantity: 18 },
//                        { id: 102, movement: 'in',  quantity: 22 },
//                        { id: 103, movement: 'out', quantity: 15 }, ];

// function transactionsFor(id, transactions) {
//   return transactions.filter(transaction => transaction['id'] === id);
// }


// console.log(transactionsFor(101, transactions));
// returns
// [ { id: 101, movement: "in",  quantity:  5 },
//   { id: 101, movement: "in",  quantity: 12 },
//   { id: 101, movement: "out", quantity: 18 }, ]



// 10 INVENTORY AVAILABILITY

// Building on the previous exercise, write a function that returns true or 
// false based on whether or not an inventory item is available. As before, 
// the function takes two arguments: an inventory item and a list of transactions. 
// The function should return true only if the sum of the quantity values of 
// the item's transactions is greater than zero. Notice that there is a movement 
// property in each transaction object. A movement value of 'out' will decrease 
// the item's quantity.

// You may (and should) use the transactionsFor function from the previous exercise.

// ALGO

// use transactionsFor to filter the transactions with a matching id

// iterate through those matching transactions with map, yielding an array of 
// signed integers
// use reduce to sum these.

const transactions = [ { id: 101, movement: 'in',  quantity:  5 },
                       { id: 105, movement: 'in',  quantity: 10 },
                       { id: 102, movement: 'out', quantity: 17 },
                       { id: 101, movement: 'in',  quantity: 12 },
                       { id: 103, movement: 'out', quantity: 15 },
                       { id: 102, movement: 'out', quantity: 15 },
                       { id: 105, movement: 'in',  quantity: 25 },
                       { id: 101, movement: 'out', quantity: 18 },
                       { id: 102, movement: 'in',  quantity: 22 },
                       { id: 103, movement: 'out', quantity: 15 }, ];

function transactionsFor(id, transactions) {
  return transactions.filter(transaction => transaction['id'] === id);
}

function isItemAvailable(id, log) {
  let transactions = transactionsFor(id, log);
  
  let inventory = transactions.map(transaction => {
    if (transaction['movement'] === 'in') {
      return transaction['quantity'];
    } else if (transaction['movement'] === 'out') {
      return transaction['quantity'] * -1;
    }
  });

  let quantity = inventory.reduce((sum, value) => sum + value, 0);
  return quantity > 0;
}

console.log(isItemAvailable(101, transactions));     // false
console.log(isItemAvailable(105, transactions));     // true



