// --- Directions
// Given a string, return the character that is most
// commonly used in the string.
// --- Examples
// maxChar("abcccccccd") === "c"
// maxChar("apple 1231111") === "1"

// function maxChar(str) {
//   let histogram = {}
//   for (let i = 0; i < str.length; i++) {
//     if (histogram[str[i]]) {
//       histogram[str[i]]++
//     } else {
//       histogram[str[i]] = 1
//     }
//   }
//   let counts = Object.values(histogram)
//   let max = Math.max(...counts)
//   return Object.keys(histogram).find(char => histogram[char] === max)
// }

//Refactoring
function maxChar(str) {
  const charCount = {}
  let max = 0
  let maxChar = ''

  for (let char of str) {
    charCount[char] = charCount[char] + 1 || 1;
    //this statement checks to see if chars[char] + 1 is truthy (i.e. if 1 can be added), or, if the key doesn't already exist, it will be falsey (i.e. null) and set the key's value to 1
  }

  for (let char in charCount) {
    if (charCount[char] > max) {
      max = charCount[char]
      maxChar = char
    }
  }

  return maxChar
}

module.exports = maxChar;
