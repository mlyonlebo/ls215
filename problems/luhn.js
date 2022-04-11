// 2 components:
// number
// checksum, derived from the number, according to a formula, and representing a total

// checksum (or total) must end in 0 (i.e. be zero or a multiple of 10)

//INPUT
//string representation of a number

//OUTPUT
//true/false, depending on whether the number is valid, per the Luhn formula

//REQUIREMENTS
//ignore non-int characters in the input string

// 1. validate the input -- validateInput
//  remove all non-numerical characters 

// 2. compute the checksum (i.e. total)
// given a string rep. digits, return a total, 
// representing the checksum as calculated per the luhn formula

// split the string of digits into an array and reverse the array

// map reverse array (simulating r to l iteration)

// convert the string int into numbers
// double every second digit (i.e. if index is odd)
// if the result of the operation is >= 10
// subtract 9

// total the resulting digits with reduce and return this result

// 3. determine if the checksum is valid (i.e. if it is divisible by 10)

// given string representing a number, remove & return a string with only non-int characters

function sanitizeInput(str) {
  return str.replace(/[^0-9]/g, '');
}

function isValidChecksum(total) {
  return total % 10 === 0;
}


function computeChecksum(str) {
  let digits = str.split('').reverse().map(Number);
  return digits.map((digit, index) => {
    if (index % 2 === 0) {
      return digit;
    } else {
      digit += digit;
      return digit >= 10 ? digit - 9 : digit;
    }
  }).reduce((a, b) => a + b);
}

function isLuhnValid(str) {
  let number = sanitizeInput(str);
  let checksum = computeChecksum(number);
  return isValidChecksum(checksum);
}

console.log(sanitizeInput('1.2 3.4 5.6') === '123456' )
console.log(sanitizeInput('1a2b3c4d') === '1234' )
console.log(sanitizeInput('!@#$234@34234!@3446') === `234342343446` )

console.log(computeChecksum('1111')) // 2121
console.log(computeChecksum('8763')) // 7733

console.log(isValidChecksum(0)) // true
console.log(isValidChecksum(170)) // true
console.log(isValidChecksum(9)) // false

console.log(isLuhnValid('1111')) // false
console.log(isLuhnValid('8763')) // true
console.log(isLuhnValid("2323 2005 7766 3554"));