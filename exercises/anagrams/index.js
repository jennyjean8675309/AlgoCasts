// --- Directions
// Check to see if two provided strings are anagrams of eachother.
// One string is an anagram of another if it uses the same characters
// in the same quantity. Only consider characters, not spaces
// or punctuation.  Consider capital letters to be the same as lower case
// --- Examples
//   anagrams('rail safety', 'fairy tales') --> True
//   anagrams('RAIL! SAFETY!', 'fairy tales') --> True
//   anagrams('Hi there', 'Bye there') --> False

// RegExp methods
// /\w/ denotes an alphanumeric character (A-Z, a-z, 0-9, and _)
// To select only alphanumberic characters in a string you can use one of two methods:
// 1. match() - string.match(/\w/g).join('') - join() be used because the match() method
// returns an array of all characters that match the RegExp
// 2. replace with [^] - string.replace(/[^\w]/g, '') - I believe that [^] denotes !

// function anagrams(stringA, stringB) {
// //   let stringAArray = stringA.toLowerCase().match(/\w/g)
// //   let stringBArray = stringB.toLowerCase().match(/\w/g)
// //
// //   let stringAMap = {}
// //   let stringBMap = {}
// //
// // // mapping out the character frequency of each string
// // // can also refactor these processes by making a helper method
// //   stringAArray.forEach(char => {
// //     if (stringAMap[char]) {
// //       stringAMap[char] += 1
// //     } else {
// //       stringAMap[char] = 1
// //     }
// //   })
// //
// //   stringBArray.forEach(char => {
// //     if (stringBMap[char]) {
// //       stringBMap[char] += 1
// //     } else {
// //       stringBMap[char] = 1
// //     }
// //   })
//
//   let stringAMap = buildCharMap(stringA)
//   let stringBMap = buildCharMap(stringB)
//
// // a gotcha! - make sure that you check that the number of keys is the same before
// // iterating through the maps to check that the values of each key are the same, or
// // you might miss an extra key(s)
//   if (Object.keys(stringAMap).length !== Object.keys(stringBMap).length) {
//     return false
//   } else {
//     for (char in stringAMap) {
//       if (stringAMap[char] !== stringBMap[char]) {
//         return false
//       }
//     }
//   }
//   return true
// }

//helper method
// function buildCharMap(str) {
//   let charMap = {}
//
//   //adding the cleaning up of our string into our for loop
//   for (char of str.replace(/[^\w]/g, '').toLowerCase()) {
//     charMap[char] = charMap[char] + 1 || 1;
//   }
//
//   return charMap
// }

//Second code-along solution
function anagrams(stringA, stringB) {
  // here I have duplicated logic, which should be refactored out into a helper method
  let sortedA = stringA.toLowerCase().replace(/[^\w]/g, '').split('').sort().join('')
  let sortedB = stringB.toLowerCase().replace(/[^\w]/g, '').split('').sort().join('')

  debugger;
  return sortedA === sortedB
}

anagrams('Hello, there!', 'olleh, Teerh')

module.exports = anagrams;
