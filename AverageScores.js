/*
Create a function that returns the average of an array of numbers ("scores"), rounded to the nearest whole number. You are not allowed to use any loops (including for, for/in, while, and do/while loops).

The array will never be empty.
*/

function average(scores) {
  const result = Math.round(scores.reduce((a, b) => a + b) / scores.length)
  return result;
}

const result = average([1, 1, 1, 1, 9999])
console.log("Result:", result)