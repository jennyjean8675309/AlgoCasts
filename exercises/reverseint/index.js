// --- Directions
// Given an integer, return an integer that is the reverse
// ordering of numbers.
// --- Examples
//   reverseInt(15) === 51
//   reverseInt(981) === 189
//   reverseInt(500) === 5
//   reverseInt(-15) === -51
//   reverseInt(-90) === -9

//Need to consider edge cases - negative numbers and numbers that end in zero(s), single digit numbers

// function reverseInt(n) {
//   //turn the number into an array
//   let nArray = n.toString().split('')
//   let newArray = []
//   //check to see if the number is negative
//   if (nArray[0] === '-') {
//     newArray.push(nArray[0])
//     nArray.shift()
//   }
//   let reversed = nArray.reverse()
//   //check to see if the number ends in zero(s)
//   while (reversed[0] === '0' && reversed.length > 1){
//     reversed.shift()
//   }
//   let array = [...newArray, ...reversed]
//   return parseInt(array.join(''), 10)
// }

//Using Math.sign()

function reverseInt(n) {
  if (Math.sign(n) === 0) {
    return 0
  } else if (Math.sign(n) === -1) {
    let reversedArray = n.toString().split('').slice(1).reverse()
    while (reversedArray[0] === '0') {
      reversedArray.shift()
    }
    return parseInt(['-', ...reversedArray].join(''), 10)
  } else if (Math.sign(n) === 1) {
    let reversedArray = n.toString().split('').reverse()
    while (reversedArray[0] === '0') {
      reversedArray.shift()
    }
    return parseInt(reversedArray.join(''), 10)
  }
}

reverseInt(-951)

module.exports = reverseInt;
