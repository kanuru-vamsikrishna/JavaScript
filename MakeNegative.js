/*
In this simple assignment you are given a number and have to make it negative. But maybe the number is already negative?
*/

function makeNegative(num) {
  if (num === 0) {
    return 0
  } else if (num < 0) {
    return num
  } else {
    return -num
  }
}

const result = makeNegative(-9)
console.log("Result:", result)

// -Math.abs(num) is an inbuilt method