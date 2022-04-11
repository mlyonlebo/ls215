

// "1, 3, 7, 2, 4, 1" represents [1, 3, 7, 12, 14, 21]
// "1-3, 1-2", "1:3, 1:2", "1..3, 1..2" represent the same numbers [1, 2, 3, 11, 12]

// input is a string 
// numbers are always increasing
// ranges are inclusive
// The possible separators are: ["-", ":", ".."] (or ", ")
// have to distinguish between inclusive ranges and comma-separated literal notation

// ALGO
  // separate string by ", " for a collection of ranges & literals --> array
  // iterate through array, process each range-or-literal string in order
  // keep track of lastAdded value (as new values must always be greater)

  // if the string has a separator ["-", ":", ".."], it is a range (regex match)
      // given a range and the last #,
      // split range into an array (regex + split)
      // for loop, with a variable, counter, iterating from lastAdded until hitting a number with ending that matches
      // first number in the range;
      // save this value;
      // keep iterating and adding numbers until hitting a number with ending that
      // matches next number in the range
      // keep iterating and adding numbers until hitting a number with ending that
      // matches next/last number in the range

  // if the string has no separator, only #s, it is a literal
      // if the literal is greater than lastAdded, save the value
      // if the string # is less than lastAdded,
      // use for loop with counter to count up to next number with matching ending
      // save this number

function sequenceMaker(shorthand) {
  let sequence = [];
  let lastAdded = 0;
  
  let literalsOrRanges = shorthand.split(', ');
  literalsOrRanges.forEach(literalOrRange => {
    if (literalOrRange.match(/[-:.]/)) {
      let rangeNumbers = literalOrRange.match(/[0-9]+/g);
      rangeNumbers.forEach(number => {
        for (let counter = lastAdded; ; counter++) {
          if (counter === Number(number) && String(counter).match(number)) {
            lastAdded = number;
            sequence.push(number);
            break;
          }
        }; 
      });    
    } else {
      let literal = Number(literalOrRange);
      
      if (literal > lastAdded) {
        
      } else {
        do {
          literal += 10;
        } while (literal < lastAdded);

        lastAdded = literal;
        sequence.push(literal);
      }
    }
  })
}

// EXAMPLES

// ", " separated numbers are literal, i.e. not indicative of ranges
// "1, 3, 7, 2, 4, 1" --> 1, 3, 7, 12, 14, 21

// "-" and other separators indicate a range
// "1-3, 1-2" --> 1, 2, 3, 11, 12

// when separator terminates in smaller digit, indicates the digit 10 higher
// "104-2" --> 104, 105, ... 112

// ranges can be triple: numbers can be used twice in ranges, as end & beginning of range
// "1:5:2" --> 1, 2, 3, 4, 5, 6, ... 12

// shorthand can give 2-digit specification
// 104-02 --> 104... 202 rather than 104... 112
// "104-02" --> 104, 105, ... 202

// can combine 'literal' notation with range notation
// "545, 64:11" --> 545, 564, 565, .. 611

function range(str) {
  let sequence = [];
  let lastAdded = 0;
  let rangeNumbers = str.match(/[0-9]+/g);
  rangeNumbers.forEach(number => {
    for (let counter = lastAdded; ; counter++) {
      if (counter === Number(number) && String(counter).match(number)) {
        lastAdded = number;
        sequence.push(number);
        break;
      }
    } 
  });
  return sequence;
}

console.log(range('1-3'));