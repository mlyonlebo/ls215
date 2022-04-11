// given an obj representing 2-sided blocks
// given a word as an argument
// determine if that word can be spelled with the blocks
// i.e. if none of the letters required repeat, or are on diff sides of the same block
// if there are no repeats, no blocks used twice, 
// return true
// otherwise, return false

// handle upper and lower cases.

// init an object to associate one side with the other

// iterate through the given word
// for each letter
  // check if the letter is available in the objects keys or values .includes(letter);
    // if it is available as key, 
    // if it is available as a value, 
      // helper method, retrieve key,
      // step through obj by iterating through the keys and checking for the one with a value that matches the letter
      // return this key
    // remove the block from the blocks object -- delete blocks[letter];
  // if the letter is unavailable, return false
//if the end of the function is reached and false hasn't been returned, return true;


let blocks = {'B':'O', 'X':'K', 'D':'Q', 'C':'P', 'N':'A',
              'G':'T', 'R':'E', 'F':'S', 'J':'W', 'H':'U',
              'V':'I', 'L':'Y', 'Z':'M',}

function getKeyByValue(value) {
  let result;
  Object.keys(blocks).forEach(key => {
    if (blocks[key] === value) {
      result = key;
    }
  });
  return result;
}

function isBlockWord(word) {
  for (let i = 0; i < word.length; i++) {
    let letter = word[i].toUpperCase();
    let key;
    if (Object.keys(blocks).includes(letter)) {
      key = letter;
    } else if (Object.values(blocks).includes(letter)) {
      key = getKeyByValue(letter);
    } else {
      return false;
    }
    delete blocks[key];
  }
  return true;
}

//console.log(Object.keys(blocks).includes('B'));
//console.log(Object.values(blocks).includes('S'));
//console.log(isBlockWord('BATCH'));      // true
//console.log(isBlockWord('BUTCH'));      // false
console.log(isBlockWord('jest'));       // true