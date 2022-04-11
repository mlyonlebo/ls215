// Given a number (integer), rotate the last n digits;
// rotation, moving the nth last digit to the end of the number
// assume n <= the number of digits
// return the modified number

// ALGO
// number to string
// before str.slice(0, length - n)
// digit = str[length - n];
// after = 



console.log(rotateRightmostDigits(735291, 1));      // 735291
//remove digit from index number.length - n
// add it to the end of the number
console.log(rotateRightmostDigits(735291, 2));      // 735219
console.log(rotateRightmostDigits(735291, 3));      // 735912
console.log(rotateRightmostDigits(735291, 4));      // 732915
console.log(rotateRightmostDigits(735291, 5));      // 752913
console.log(rotateRightmostDigits(735291, 6));      // 352917