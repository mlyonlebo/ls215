// Write a Function named octalToDecimal that performs octal to decimal 
// conversion. When invoked on a String that contains the representation 
// of an octal number, the Function returns a decimal version of that 
// value as a Number. Implement the conversion yourself: do not use 
// something else to perform the conversion for you.

// split the string into an array str.split('');
// 

function octalToDecimal(numberString) {
  let decimal = 0;

  for (let i = 0; i < numberString.length; i++) {
    decimal *= 8;
    decimal += Number(numberString[i]);
  }
  
  return decimal;
}

console.log(octalToDecimal('1'));           // 1
console.log(octalToDecimal('10'));          // 8
console.log(octalToDecimal('130'));         // 88
console.log(octalToDecimal('17'));          // 15
console.log(octalToDecimal('2047'));        // 1063
console.log(octalToDecimal('011'));         // 9