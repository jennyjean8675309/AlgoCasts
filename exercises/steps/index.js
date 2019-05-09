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

//

function steps(n) {
  let steps = []
}

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

module.exports = steps;

// First iteration:  # _ _
// Second iteration: # # _
// Third iteration:  # # #

// With each iteration I need to add a pound sign and subtract a space from the length of the string (n)
