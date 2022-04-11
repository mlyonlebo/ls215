// switches ranging from 1 to n, all off
// each pass, m, you toggle (from on to off or from off to on) every mth switch
// when m = n (when you've made n passes), return an array representing the ON switches

// INPUT

// integer n representing # of switches
// as well as number of passes through the bank of switches

// OUTPUT
// array representing switch #s after n passes

// lightsOn(5); 
//   1 2 3 4 5
// 0 x x x x x
// 1 0 0 0 0 0
// 2 0 x 0 x 0
// 3 0 x x x 0
// 4 0 x x 0 0
// 5 0 x x 0 x

// ALGO
// 1. represent switches 
// create an array of booleans, length n - 1, all false (for off);
// init an array, switches = [];
// for loop with a counter going from 1 -> n
// push a false value into switches;
// return switches

// 2. make passes
// given array of booleans representing switches,

// for loop -- init passCount variable, set to 1, to track passes through the array;
// terminates after the nth pass through the switches array

// inner for-loop (init index) to interate through the switches of the array
// if (index + 1) % passCount === 0, toggle the switch (assign it to ! itself)

// return the array;


// 3. identify ON switches
// given array of booleans representing final switch state
// iterate through the array
// if the value is true (on), add index + 1 to a results array
// return results array;

function initSwitches(n) {
  let switches = [];
  for (let i = 1; i <= n; i++) {
    switches.push(false);
  }
  return switches;
}

// given arg of n, initSwitches creates array of length n, with n false values
// console.log(initSwitches(5)); // [false, false, false, false, false]
// console.log(initSwitches(2));
// console.log(initSwitches(10));

function makePasses(n, switches) {
  for (let passCount = 1; passCount <= n; passCount++) {
    for (let index = 0; index < switches.length; index++) {
      if ((index + 1) % passCount === 0) {
        switches[index] = !switches[index];
      }
    }
  }
  return switches;
}

// console.log(makePasses(5, [false, false, false, false, false])); // [true, false, false, true, false]
// console.log(makePasses(3, [false, false, false])); // [true, false, false]

function identifyOnSwitches(switches) {
  let result = [];
  for (let i = 0; i < switches.length; i++) {
    if (switches[i]) {
      result.push(i + 1);
    }
  }
  return result;
}

// console.log(identifyOnSwitches([true, false, false, true, false])); // [1, 4];
// console.log(identifyOnSwitches([true, false, false])); // [1];

function lightsOn(n) {
  let switches = initSwitches(n)
  let finalState = makePasses(n, switches);
  return identifyOnSwitches(finalState);
}

console.log(lightsOn(5));        // [1, 4]
// Detailed result of each round for `5` lights
// Round 1: all lights are on
// Round 2: lights 2 and 4 are now off;     1, 3, and 5 are on
// Round 3: lights 2, 3, and 4 are now off; 1 and 5 are on
// Round 4: lights 2 and 3 are now off;     1, 4, and 5 are on
// Round 5: lights 2, 3, and 5 are now off; 1 and 4 are on

console.log(lightsOn(100));  