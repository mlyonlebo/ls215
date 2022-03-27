// Write a Function named anagram that takes two arguments: a word 
// and an array of words. Your function should return an array that 
// contains all the words from the array argument that are anagrams 
// of the word argument. For example, given the word "listen" and an 
// array of candidate words like "enlist", "google", "inlets", and "
// banana", the program should return an array that contains "enlist"
//  and "inlets".

// helper function, tallyLetters
// iterate through a word, tracking counts for each letter

// helper function, isAnagram
// takes two arguments: 1. a word and 2. a candidate word
// calls tallyLetters for word arg
// iterates through the letters of the candidate word
// for each letter, deecrement the matching property in the tally
// if no such property exists, return false
// second loop:
// use every method to determine that every value in the object is 0.

// main function, anagram
// tallies letters for given word arg.
// iterates through array of words arg, calling isAnagram on each
// if isAnagram returns true, add the given word to a results array

function isAnagram(word, candidateWord) {
  let tally = tallyLetters(word);
  let result = true;
  
  candidateWord.split('').forEach(function (letter) {
    if (tally[letter]) {
      tally[letter] -= 1;
    } else {
      result = false;
    }
  });

  return result ? Object.values(tally).every((value) => value === 0) : result;
}

function tallyLetters(word) {
  let result = {};
  word.split('').forEach(function (letter) {
    result[letter] = result[letter] || 0;
    result[letter] += 1;
  });
  return result;
}


function anagram(word, list) {
  return list.filter( function (candidateWord) {
    return isAnagram(word, candidateWord);
  });
}

console.log(anagram('listen', ['enlists', 'google', 'inlets', 'banana']));  // [ "inlets" ]
console.log(anagram('listen', ['enlist', 'google', 'inlets', 'banana']));   // [ "enlist", "inlets" ]

