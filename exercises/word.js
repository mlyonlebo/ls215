// input: sentence string
// output: sentence string with "number words" converted to digits

// number words: 'zero', 'one', 'two', 'three', 'four', 'five', 'six', 'seven', 'eight', 'nine'

// function ignores non-number words
// (includes them in the final result)
// preserves punctuation (five --> 5 but five. --> 5.) 

  //1.  given a string, identify the words
    // split the string at the space characters
  // for each for the words (map)
  // 2. check if the letter part of the word is a number word (word.match(/[a-zA-Z]+/g)[0]);
    // if the word is a number word, replace it with the number (object lookup)
    // otherwise, leave it alone (return the word unchanged)
  //3.  join the string and return it

// replace number words with the correct digit
// return the transformed sentence


// EXAMPLE
let digits = {'zero': '0', 'one': '1', 'two':'2', 'three':'3', 'four':'4', 
              'five':'5', 'six': '6', 'seven': '7', 'eight': '8', 'nine': '9',};

function wordToDigit(sentence) {
  let words = sentence.split(' ');
  return words.map(word => {
    let numberWord = word.match(/[a-zA-Z]+/g)[0]
    let digit = digits[numberWord];
    if (digit) {
      return word.replace(numberWord, digit);
    }
    return word;
  }).join(' ');
}

console.log(wordToDigit('I don\'t know what to write six five four three!'));
console.log(wordToDigit('Please call me at five five five one two three four. Thanks.'));
// "Please call me at 5 5 5 1 2 3 4. Thanks."