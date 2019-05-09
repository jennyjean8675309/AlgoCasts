// --- Directions
// Write a function that accepts a string.  The function should
// capitalize the first letter of each word in the string then
// return the capitalized string.
// --- Examples
//   capitalize('a short sentence') --> 'A Short Sentence'
//   capitalize('a lazy fox') --> 'A Lazy Fox'
//   capitalize('look, it is working!') --> 'Look, It Is Working!'

// function capitalize(str) {
//   let wordArray = str.split(' ')
//   let capitalizedArray = []
//
//   for (let word of wordArray) {
//     let firstLetter = word[0]
//     capitalizedArray.push(word.replace(firstLetter, firstLetter.toUpperCase()))
//   }
//
//   return capitalizedArray.join(' ')
// }

//code-along solution
// function capitalize(str) {
//   const words = []
//
//   for (let word of str.split(' ')) {
//     words.push(word[0].toUpperCase() + word.slice(1))
//   }
//
//   return words.join(' ')
// }

//second code-along solution - this solution is not as easily readable as the first, would be harder for an engineer to understand at a glance
function capitalize(str) {
  let result = str[0].toUpperCase()

  for (let i = 1; i < str.length; i++) {
    if (str[i - 1] === ' ') {
      result += str[i].toUpperCase()
    } else {
    result += str[i]
    }
  }

  return result
}

let str = 'a lazy fox'

capitalize(str)

module.exports = capitalize;
