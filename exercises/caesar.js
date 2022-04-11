// implement the caesar cipher

// input: string, representing a character or characters to be encrypted; a key
// output: encrypted string, with all the letter characters shfited by the amount 
// specified by the key.

// ignore non-letter characters (i.e. punctuation, spaces)
// handle both upper and lower cases (ie, if lower, return lower; if upper return upper)
// "wrap-around" to the beginning of alphabet if necessary
// "wrap-around" multiple times if necessary

// helper function, shiftChar
// given a character, and a key, 
// returns the shifted character as a string.
// conver the letter to a character code -- char.charCodeAt() 
  // if it's lowercase, (regex match)
  // and if the the shifted character code is > 122      (must be >= 97 and <= 122)
    // determine the difference (code - 122)
    // call shiftChar recursively, passing 'a' and the differnce as arguments
  // otherwise, convert the charCode to a letter -- String.fromCharCode(--) and return

  // if it's upper, (regex match)     (be >= 65 and <= 90;)
  // and if the shifted character code is > 90
    // determined the diff (code - 90)
    // call shiftChar recursively, passing 'A' and the difference as args
  // otherwise convert the charCode to a letter --

// helper function, isLetter
// given a character, returns true if it is a letter, false if not (regex match)

// function caesarEncrypt
// init a result string ''
// iterates through the characters of the provided string
// if the character is a letter (isLetter returns true)
  // adds the return of shiftChar to a result string
// if the character is not a letter, adds the character, unchanged to result string
// return result string

function isLetter(char) {
  return /[a-zA-Z]/.test(char);
}

// console.log(isLetter('A')) // true
// console.log(isLetter('z')) // true
// console.log(isLetter(' ')) // false
// console.log(isLetter(';')) // false

function shiftChar(char, key) {
  let code = char.charCodeAt();
  let shiftedCode = code + key
  if (code >= 97 && code <= 122) {
    if (shiftedCode > 122) {
      let difference = shiftedCode - 122;
      return shiftChar('a', difference - 1);
    } else {
      return String.fromCharCode(shiftedCode);
    }
  } else if (code >= 65 && code <= 90) {
      if (shiftedCode > 90) {
        let difference = shiftedCode - 90;
        return shiftChar('A', difference - 1);
      } else {
        return String.fromCharCode(shiftedCode);
      }
  }
}

// console.log(shiftChar('a', 0)) // 'a'
// console.log(shiftChar('A', 3)) // 'D'
// console.log(shiftChar('Y', 5)) // 'D'
// console.log(shiftChar('A', 47)) // 'V'


function caesarEncrypt(string, key) {
  let result = '';
  for (let i = 0; i < string.length; i++) {
    let char = string[i];
    if (isLetter(char)) {
      result += shiftChar(char, key);
    } else {
      result += char;
    }
  }
  return result;
}

// simple shift
console.log(caesarEncrypt('A', 0));       // "A"
console.log(caesarEncrypt('A', 3));       // "D"

// wrap around
console.log(caesarEncrypt('y', 5));       // "d"
console.log(caesarEncrypt('a', 47));      // "v"

// all letters
console.log(caesarEncrypt('ABCDEFGHIJKLMNOPQRSTUVWXYZ', 25));
// "ZABCDEFGHIJKLMNOPQRSTUVWXY"
console.log(caesarEncrypt('The quick brown fox jumps over the lazy dog!', 5));
// "Ymj vznhp gwtbs ktc ozrux tajw ymj qfed itl!"

// many non-letters
console.log(caesarEncrypt('There are, as you can see, many punctuations. Right?; Wrong?', 2));
// "Vjgtg ctg, cu aqw ecp ugg, ocpa rwpevwcvkqpu. Tkijv?; Ytqpi?"