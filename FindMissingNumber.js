/*
An ordered sequence of numbers from 1 to N is given. One number might have deleted from it, then the remaining numbers were mixed. Find the number that was deleted.

Example:

The starting array sequence is [1,2,3,4,5,6,7,8,9]
The mixed array with one deleted number is [3,2,4,6,7,8,1,9]
Your function should return the int 5.
If no number was deleted from the starting array, your function should return the int 0.

Note: N may be 1 or less (in the latter case, the first array will be []).
*/

function findDeletedNumber(arr, mixArr) {
  let result = 0
  for (let i = 0; i < arr.length; i++) {
      if (!mixArr.includes(arr[i])) {
        result = arr[i]
      }
  }
  // return arr.find(num => !mixArr.includes(num)) || 0; shorter version
  return result
}

const result = findDeletedNumber([1, 2, 3, 4, 5, 6, 7, 8, 9], [1, 9, 7, 4, 6, 2, 3, 8])
console.log("Result:", result);