// --- Directions
// Write a function that accepts a string.  The function should
// capitalize the first letter of each word in the string then
// return the capitalized string.
// --- Examples
//   capitalize('a short sentence') --> 'A Short Sentence'
//   capitalize('a lazy fox') --> 'A Lazy Fox'
//   capitalize('look, it is working!') --> 'Look, It Is Working!'

function capitalize(str) {
  let wordArray = str.split(' ')
  let capitalizedArray = []

  for (let string of wordArray) {
    let firstLetter = string[0]
    capitalizedArray.push(string.replace(firstLetter, firstLetter.toUpperCase()))
  }

  return capitalizedArray.join(' ')
}

let str = 'a lazy fox'

capitalize(str)

module.exports = capitalize;
