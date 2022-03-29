// ALGO

// must start with (
// must have ) for every (
// must never have more ) than (.

function isBalanced(str) {
  let openParentheses = 0;
  for (let i = 0; i < str.length; i++) {
    if (str[i] === '(') {
      openParentheses += 1;
    } else if (str[i] === ')') {
      openParentheses -= 1;
    }

    if (openParentheses < 0) {
      return false;
    }
  }

  return openParentheses === 0;
}


console.log(isBalanced('What (is) this?'));        // true
console.log(isBalanced('What is) this?'));         // false
console.log(isBalanced('What (is this?'));         // false
console.log(isBalanced('((What) (is this))?'));    // true
console.log(isBalanced('((What)) (is this))?'));   // false
console.log(isBalanced('Hey!'));                   // true
console.log(isBalanced(')Hey!('));                 // false
console.log(isBalanced('What ((is))) up('));       // false