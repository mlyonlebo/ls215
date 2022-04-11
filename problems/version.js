// PROBLEM

// given 2 numbers formatted as version numbers 
        // 1.0
        // 1.2
        // 3.2.3
        // 3.0.0
        // 4.2.3.0
// determine whether the first version number is >, =, < the second
// return null if either version numbers contains characters other than digits or decimals
    // first number is of utmost important (1.x is always < 2.y)
    // 1 = 1.0; 1.2 = 1.2.0.0
// if version1 > version2, return 1;
// if version1 <  version21, return -1;
// if version1 === version2, return 0;


// PROCESS INPUTS
// (if necessary) convert number to strings.
// split strings using the '.' as a delimiter

// COMPARISON FUNCTION
// given 2 arrays with numerical elements, compare the first elements
// handle empty array: arr = arr.length ? arr : 0;
// if one version # is greater than the other, return that result
// if they are equal, function calls itself, passing array1.slice(1) and array2.slice(2) as args

function matchLengths(arr1, arr2) {
  if (arr1.length === arr2.length) {
    return [arr1, arr2];
  } else if (arr1.length > arr2.length) {
    arr2.push('0');
    return matchLengths(arr1, arr2);
  } else if (arr1.length < arr2.length) {
    arr1.push('0');
    return matchLengths(arr1, arr2);
  }
}

function compare(arr1, arr2) {
  if (arr1.length === 0 && arr2.length === 0) {
    return 0;
  }

  [arr1, arr2] = matchLengths(arr1, arr2);

  if (arr1[0] < arr2[0]) {
    return -1;
  } else if (arr1[0] > arr2[0]) {
    return 1;
  } else {
    return compare(arr1.slice(1), arr2.slice(1));
  }
}

function validInput(digits) {
  return digits.every(digit => /[0-9]/.test(digit));
}

function compareVersions(version1, version2) {
  let digits1 = version1.split('.');
  let digits2 = version2.split('.');

  if (!validInput(digits1) || !validInput(digits2)) {
    return null;
  }

  return compare(digits1, digits2);
}

console.log(compareVersions('0.1', '1') === -1)
console.log(compareVersions('1.1.1', '1.1.1') === 0)
console.log(compareVersions('1', '1.0') === 0)
console.log(compareVersions('1.0', '1.1') === -1)
console.log(compareVersions('1.2', '1.2') === 0)
console.log(compareVersions('1.2', '1.2.0.0') === 0)
console.log(compareVersions('1.2.0.0', '1.18.2') === 1)
console.log(compareVersions('13.37', '1.18.2') === 1)
console.log(compareVersions('1', '1') === 0);            
console.log(compareVersions('1.1', '1.0') === 1);        
console.log(compareVersions('2.3.4', '2.3.5') === -1);    
console.log(compareVersions('1.a', '1') === null);          
console.log(compareVersions('.1', '1') === null);         
console.log(compareVersions('1.', '2') === null);           
console.log(compareVersions('1..0', '2.0') === null);      
console.log(compareVersions('1.0', '1.0.0') === 0);      
console.log(compareVersions('1.0.0', '1.1') === -1);      
console.log(compareVersions('1.0', '1.0.5') === -1);      