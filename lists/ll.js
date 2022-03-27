// initialize an obj to track character occurrences
// iterate through the characters of the string arg
// for non space characters,
// if there is a matching entry in the obj, return false;
// otherwise add an entry in the object

function isAllUnique(string) {
  let charTracker = {};
  let chars = string.split('');
  for (let i = 0; i < chars.length; i++) {
    let char = chars[i].toLowerCase();
    if (char === ' ') {
      continue;
    }

    if (charTracker[char]) {
      return false;
    } else {
      charTracker[char] = true;
    }
  }

  return true;
}

console.log(isAllUnique('The quick brown fox jumped over a lazy dog'));  // false
console.log(isAllUnique('123,456,789'));                                 // false
console.log(isAllUnique('The big apple'));                               // false
console.log(isAllUnique('The big apPlE'));                               // false
console.log(isAllUnique('!@#$%^&*()'));                                  // true
console.log(isAllUnique('abcdefghijklmnopqrstuvwxyz'));                  // true