// --- Directions
// Given an array and chunk size, divide the array into many subarrays
// where each subarray is of length size
// --- Examples
// chunk([1, 2, 3, 4], 2) --> [[ 1, 2], [3, 4]]
// chunk([1, 2, 3, 4, 5], 2) --> [[ 1, 2], [3, 4], [5]]
// chunk([1, 2, 3, 4, 5, 6, 7, 8], 3) --> [[ 1, 2, 3], [4, 5, 6], [7, 8]]
// chunk([1, 2, 3, 4, 5], 4) --> [[ 1, 2, 3, 4], [5]]
// chunk([1, 2, 3, 4, 5], 10) --> [[ 1, 2, 3, 4, 5]]

// function chunk(array, size) {
//   let chunkArray = []
//   while (array.length > 0) {
//     chunkArray.push(array.splice(0, size))
//   }
//   return chunkArray
// }

//First code-along solution
// function chunk(array, size) {
//   const chunked = []
//   for (let element of array) {
//     let last = chunked[chunked.length - 1]
//     if (!last || last.length === size) {
//       chunked.push([element])
//     } else {
//       last.push(element)
//     }
//   }
//   return chunked
// }

//Second code-along solution - this solution does not mutate the original array
function chunk(array, size) {
  const chunked = []
  let index = 0
  while (index < array.length) {
    chunked.push(array.slice(index, index + size))
    index += size
  }
  return chunked
}

chunk([1, 2, 3], 2)

module.exports = chunk;
