// 1 Write a method that returns true if its argument looks like a URL, 
// false if it does not.

// function isUrl(str) {
//   return !!(str.match?(/^https?:\/\/\S+$/g));
// }

// console.log(isUrl('http://launchschool.com'))   // -> true
// console.log(isUrl('https://example.com'))       // -> true
// console.log(isUrl('https://example.com hello')) // -> false
// console.log(isUrl('   https://example.com'))    // -> false


// Write a method that returns all of the fields in a haphazardly formatted 
// string. A variety of spaces, tabs, and commas separate the fields, with 
// possibly multiple occurrences of each delimiter.

// function fields(str) {
//   return str.split(/\b\s*,*[\\a-z]*\s*\b/);
// }

// console.log(fields("Pete,201,Student"));
// // -> ['Pete', '201', 'Student']

// console.log(fields("Pete \t 201    ,  TA"));
// // -> ['Pete', '201', 'TA']

// console.log(fields("Pete \t 201"));
// // -> ['Pete', '201']

// console.log(fields("Pete \n 201"));
// -> ['Pete', '\n', '201']


// 3/4

// function mysteryMath(str) {
//   return str.replace(/[-+*/]/g, '?');
// }

// console.log(mysteryMath('4 + 3 - 5 = 2'));
// // -> '4 ? 3 - 5 = 2'

// console.log(mysteryMath('(4 * 3 + 2) / 7 - 1 = 1'));
// -> '(4 ? 3 + 2) / 7 - 1 = 1'



//5

// function danish(str) {
//   return str.replace(/\b(apple|blueberry|cherry)\b/, 'danish');
// }

// console.log(danish('An apple a day keeps the doctor away'))
// console.log(danish('My favorite is blueberry pie'))
// console.log(danish('The cherry of my eye'))
// console.log(danish('apple. cherry. blueberry.'))
// console.log(danish('I love pineapple'))


// 6

function formatDate(str) {
  return str.replace(/(\d{4})[-/](\d\d)[-/](\d\d)/, '$3.$2.$1');
}

console.log(formatDate('2016-06-17')); // -> '17.06.2016'
console.log(formatDate('2016/06/17')); // -> '2016/06/17' (no change)