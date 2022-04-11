// given a message, encode it for rail fence cipher
// given a coded message, decode it

// assume message >= 3 letters

// decode

// 1 char 

// length of 25

// WECRLTEERDSOEEFEAOCAIVDEN x25
// 1 7
// 2 6
// 3 6
// 4 6

// 26
// 1 7
// 2 7
// 3 6
// 4 6

// 27
// 1 7
// 2 7
// 3 7
// 4 6

// 28
// 1 7
// 2 7
// 3 7
// 4 7



// given a string representing a message
// represent the 3-row pattern as 4 rows
	// length = message.length
	// first row: first Math.ceil(length / 4) characters
	// length -= length of first row
	// middle row: Math.ceil(length / 3) + Math.floor(length / 3)
	// length -= length of middle row
	// last row = length

// WECRLTE
// ERDSOEEFEAOC
// AIVDEN

// iterate from 1 to message.length
	// if the index is even, .shift() the first char from the middle row,
	// if the index is divisible by three, .shift() the first char from the last row,
	// otherwise, take the char from the first row

// return the joined results array

function splitIntoRows(message) {
  let length = message.length;
  let firstRowLength = Math.ceil(length / 4);
  let middleRowLength = Math.ceil(length / 4) + Math.floor(length / 4);
  let firstRow = message.slice(0, firstRowLength);
  let middleRow = message.slice(firstRowLength, firstRowLength + middleRowLength);
  let lastRow = message.slice(firstRowLength + middleRowLength);
  return [firstRow, middleRow, lastRow];
}

function decode(message) {
	let [firstRow, middleRow, lastRow] = splitIntoRows(message).map(row => row.split(''));
  let result = [];
  let firstRowToggle = true
  
  for (let i = 1; i <= message.length; i++) {
    if (i % 2 === 0) {
      let letter = middleRow.shift();
      result.push(letter);
    } else if (firstRowToggle) {
      firstRowToggle = false;
      result.push(firstRow.shift());
    } else {
      firstRowToggle = true;
      result.push(lastRow.shift());
    }
  }

  return result.join('');
}

function encode(message) {
  let [firstRow, middleRow, lastRow] = [[], [], []];
  let firstRowToggle = true;
  message.split('').forEach((character, index) => {
    if ((index + 1) % 2 === 0) {
      middleRow.push(character);
    } else if (firstRowToggle) {
      firstRow.push(character);
      firstRowToggle = false;
    } else {
      lastRow.push(character);
      firstRowToggle = true;
    }
  });
  return firstRow.join('') + middleRow.join('') + lastRow.join('');
}

console.log(decode(encode('HELPMEIAMTRAPPEDINTHISBOXANDIWOULDLIKETOLEAVEPLEASE')));
