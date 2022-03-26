// total square area

// For this practice problem, we'll represent rectangles as Arrays with 
// two elements: a height and a width.

// Write a Function named totalArea that takes an Array of rectangles 
// as an argument. The Function should return the total area covered 
// by all the rectangles.


// given a 2-element array representing the height and width of a rectangle,
// return the area of that rectangle.

// map the rectangles to a new array, areas

// reduce areas to a total value


// function totalArea(rectangles) {
//   let areas = rectangles.map(([height, width]) => height * width);
//   return areas.reduce((sum, currentVal) => sum + currentVal);
// }

// let rectangles = [[3, 4], [6, 6], [1, 8], [9, 9], [2, 2]];

// console.log(totalArea(rectangles));    // 141

// Now, write a second Function named totalSquareArea. This Function 
// should calculate the total area of a set of rectangles, just like 
// totalArea. However, it should only include squares in its calculations: 
// it should ignore rectangles that aren't square.

// function totalSquareArea(rectangles) {
//   let squares = rectangles.filter(([height, width]) => height === width);
//   return totalArea(squares);
// }

// console.log(totalSquareArea(rectangles));