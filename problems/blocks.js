// INPUT
// word string
// "blocks" as shown below

// OUTPUT
// t/f depending on whether the word can be spelled

// REQUIREMENTS
// given a word string, but the case of the letters may vary
// no duplicate letters

// ALGO

// 1. sanitize input
// verify that the string is composed only of letter characters
// call .toUpperCase() on the string;

// 2. iterate through the characters

// for each character, check:
  // if blocks[letter] returns true
    // delete property from the obj. --> delete blocks[letter]
  // keyByValue() returns key if there is a matching value in the blocks obj.
      // iterate through the object using for loop & Object.keys & 
  // delete matching property from the obj. & continue
  // if there is no matching prop/value, return false
// return true

function keyByValue(letter, blocks) {
  let keys = Object.keys(blocks);
  for (let i = 0; i < keys.length; i++) {
    let key = keys[i];
    if (blocks[key] === letter) {
      return key;
    }
  }
  return null;
}

function isBlockWord(word) {  
  let blocks = { 'B':'O', 'X':'K', 'D':'Q', 'C':'P', 'N':'A',
  'G':'T', 'R':'E', 'F':'S', 'J':'W', 'H':'U',
  'V':'I', 'L':'Y', 'Z':'M', };

  word = word.toUpperCase();

  for (let i = 0; i < word.length; i++) {
    let letter = word[i];
    if (blocks[letter]) {
      delete blocks[letter];
    } else if (keyByValue(letter, blocks)) {
     // console.log(`${letter}, ${keyByValue(letter, blocks)}`)
      delete blocks[keyByValue(letter, blocks)];
    } else {
      return false;
    }
  }
  return true;
}

// TESTS
console.log(keyByValue('T') === 'G');
console.log(keyByValue('R') === null);

// returns true if word can be spelled
console.log(isBlockWord('BATCH') === true);      // true

// words requiring diff. sides of the same block return false:
console.log(isBlockWord('BUTCH') === false);      // false

// words with duplicate letters cannot be spelled
console.log(isBlockWord('dad') === false); // false

// input is case-insensitive
console.log(isBlockWord('jest') === true);       // true

console.log(isBlockWord('JEST') === true);       // true


