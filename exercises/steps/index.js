// --- Directions
// Write a function that accepts a positive number N.
// The function should console log a step shape
// with N levels using the # character.  Make sure the
// step has spaces on the right hand side!
// --- Examples
//   steps(2)
//       '# '
//       '##'
//   steps(3)
//       '#  '
//       '## '
//       '###'
//   steps(4)
//       '#   '
//       '##  '
//       '### '
//       '####'

// Second code-along solution using rows and columns

//      c0 |    c1 |    c2
//    #    |  _    |   _
//   r0    | r0    | r0
// _______________________
//      c0 |    c1 |    c2
//    #    |  #    |   _
//   r1    | r1    | r1
// _______________________
//      c0 |    c1 |    c2
//    #    |  #    |   #
//   r2    | r2    | r2

//  There is a pattern here - if the row number (r0) is greater than or equal to the column number (c0), then we have a pound sign, otherwise, we have a space

// // With this solution, you build out the rows and columns (using n as a limiting factor)
// function steps(n) {
//   for (let row = 0; row < n; row++) {
//     let stair = ''
//
//     for (let column = 0; column < n; column++) {
//       if (column <= row) {
//         stair += '#'
//       } else {
//         stair += ' '
//       }
//     }
//
//     console.log(stair)  //while still inside the for loop to create the rows, after the columns for that row have been built out, you then print that row, or stair
//   }
// }

// Third code-along solution using recursion
function steps(n, row = 0, stair = '') {
  if (n === row) {      // base case - if row is equal to n, we will have too many rows, we don't need to run the function any longer, and we can exit out of the function
    return;
  }

  if (n === stair.length) {
    console.log(stair)
    return steps(n, row + 1)
  }

  if (stair.length <= row) {
    stair += '#';
  } else {
    stair += ' ';
  }
  // If the length of the stair string is less than or equal to the row number we're working on, we add a '#', otherwise add a space
  return steps(n, row, stair);
}

// First iteration
// steps(3)
// steps(3, row = 0, stair = '')
// if (3 === row (0)) {
// ...
// if (3 === stair.length (0)) {
// ...
// if (stair.length (0) <= row (0)) {
// stair += '#'
// } else {
// ...
// return steps (3, row (0), stair ('#'))

// Second iteration
// if (3 === row (0)) {
// ...
// if (3 === stair.length (1)) {
// ...
// if (stair.length (1) <= row (0)) {
// ...
// } else {
// stair += ' '
// return steps(3, row, stair ('# '))

// Third iteration
// if (3 === row (0)) {
// ...
// if (3 === stair.length (2)) {
// ...
// if (stair.length (2) <= row (0)) {
// ...
// } else {
// stair += ' '
// return steps(3, row (0), stair ('#  '))

// Fourth iteration
// if (3 === row (0)) {
// ...
// if (3 === stair.length (3)) {
// console.log(stair)                               '#  '
// return steps(3, row + 1 (1)) - here, stair is not specified, so it is reset to ''

// Fifth iteration
// if (3 === row (1)) {
// ...
// if (3 === stair.length (0)) {
// ...
// if (stair.length (0) <= row (1)) {
// stair += '#'
// return steps(3, row (1), stair ('#'))

// Sixth iteration
// if (3 === row (1)) {
// ...
// if (3 === stair.length (1)) {
// ...
// if (stair.length (1) <= row (1)) {
// stair += '#'
// return steps(3, row (1), stair ('##'))

// Seventh iteration
// if (3 === row (1)) {
// ...
// if (3 === stair.length (2)) {
// ...
// if (stair.length (2) <= row (1)) {
// ...
// } else {
// stair += ' '
// return steps(3, row (1), stair ('## '))

// Eighth iteration
// if (3 === row (1)) {
// ...
// if (3 === stair.length (3)) {
// console.log(stair)                             '## '
// return steps(3, row + 1 (2)) - here, stair is not specified, so it is reset to ''

// Ninth iteration
// if (3 === row (2)) {
// ...
// if (3 === stair.length (0)) {
// ...
// if (stair.length (0) <= row (2)) {
// stair += '#'
// return (3, row (2), stair ('#'))

// Tenth iteration
// if (3 === row (2)) {
// ...
// if (3 === stair.length (1)) {
// ...
// if (stair.length (1) <= row (2)) {
// stair += '#'
// return (3, row (2), stair ('##'))

// Eleventh iteration
// if (3 === row (2)) {
// ...
// if (3 === stair.length (2)) {
// ...
// if (stair.length (2) <= row (2)) {
// stair += '#'
// return steps(3, row (2), stair ('###')

// Twelfth iteration
// if (3 === row (2)) {
// ...
// if (3 === stair.length (3)) {
// console.log(stair)                             '###'
// return steps(3, row + 1 (3)) - here, stair is not specified, so it is reset to ''

// Thirteenth iteration
// if (3 === row (3)) {
// return; - here, we've finally reached our base case, so the function returns (exits) without doing anything

steps(3);

// First solution I came up with on my own
// function steps(n) {
//   let step = '#'
//
//   if (step.length < n) {
//     while (step.length < n) {
//       step+= ' '
//     }
//   }
//
//   for (char in step) {
//     console.log(step)
//     step = step.replace(' ', '#')
//   }
// }

// Recursion practice
// function printNumber(num) {
//   if (num === 0) {
//     return;
//   }
//
//   console.log(num)
//   printNumber(num - 1)
// }
//
// printNumber(10)

module.exports = steps;

// First iteration:  # _ _
// Second iteration: # # _
// Third iteration:  # # #

// With each iteration I need to add a pound sign and subtract a space from the length of the string (n)
