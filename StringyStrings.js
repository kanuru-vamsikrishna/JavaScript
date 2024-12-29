/*

write me a function stringy that takes a size and returns a string of alternating 1s and 0s.

the string should start with a 1.

a string with size 6 should return :'101010'.

with size 4 should return : '1010'.

with size 12 should return : '101010101010'.

The size will always be positive and will only use whole numbers.
*/

function stringy(size) {
  let i
  let string = '';
  for(i=0; i<size; i++) {
    if(i%2 === 0) {
      string += '1'
    } else if (i%2 !== 0) {
      string += '0'
    }
  }
    return string;
}

const result = stringy(21);
console.log("Result:", result);