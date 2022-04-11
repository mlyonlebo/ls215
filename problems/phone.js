// INPUT:
// digits and special char (spaces, dashes, dot, parentheses, etc.)

// OUTPUT:
// 10-digit sequence of integers (for valid numbers)
// or, for invalid numbers, 10 zeroes

// REQUIREMENTS:
// (explicit)
// validate that there are 10 or 11 digits
// if there are 11 digits, the first must be 1, and this must be trimmed from the result
// fewer than 10 or more than 11 digits is a bad number

// (implicit)
// non number characters should be ignored
// decimals should be ignored, so 1.2 would be a 1 and a 2 rather than 1.2;
// input as a string? assume yes

// ALGO

// match digits but no other characters /[0-9]/g with match() --> array of matches

// if the array is length 10, return matches.join(''); 
// if the array is length 11 and matches[0] === 1, return matches.slice(1).join('');
// otherwise, return '0000000000'



function validatePhoneNumber(str) {
  let numbers = str.match(/[0-9]/g);
  if (!numbers) {
    return '0000000000';
  } else if (numbers.length === 10) {
    return numbers.join('');
  } else if (numbers.length === 11 && numbers[0] === '1') {
    return numbers.slice(1).join('');
  } else {
    return '0000000000';
  }
}

//TESTS
// return numerals only for "good" numbers
console.log(validatePhoneNumber('333 444 5555') === '3334445555');

// return 10 zeroes for a "bad" number
console.log(validatePhoneNumber('beanus') === '0000000000');

//ignore special characters
console.log(validatePhoneNumber('%123.45/6-2(3)49') === '1234562349');

//numbers longer than 10 are not valid...
console.log(validatePhoneNumber('02394857203984') === '0000000000');

//...except if they lead with a 1, in which case they may be 11 digits
console.log(validatePhoneNumber('13334445555') === '3334445555');
console.log(validatePhoneNumber('102394857203984') === '0000000000');