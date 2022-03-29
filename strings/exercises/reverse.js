// Implement a function that takes a string as an argument and returns 
// a new string that contains the original string in reverse.

// reverse the letters in each word

// reverse the sequence of words
// split at the spaces
// iterate through the array, reversing each word
// return the reversed array

function reverse(str) {
  return str.split('').reverse().join('');
}

console.log(reverse('hello'))                  // returns "olleh"
console.log(reverse('The quick brown fox'))    // returns "xof nworb kciuq ehT"