function staggeredCase(str) {
  let capitalizer = true;
  return str.split('').map(char => {
    if (capitalizer && /[a-zA-Z]/.test(char)) {
      capitalizer = !capitalizer; 
      return char.toUpperCase();
    } else if (/[a-zA-Z]/.test(char)) {
      capitalizer = !capitalizer;
      return char.toLowerCase();
    } else {
      capitalizer = !capitalizer;
      return char;
    }
  }).join('');
}

console.log(staggeredCase('I Love Launch School!'));        // "I LoVe lAuNcH ScHoOl!"
console.log(staggeredCase('ALL_CAPS'));                     // "AlL_CaPs"
console.log(staggeredCase('ignore 77 the 4444 numbers'));   // "IgNoRe 77 ThE 4444 nUmBeRs"