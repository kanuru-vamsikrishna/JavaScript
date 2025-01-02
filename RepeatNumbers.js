/*
Task:
You have to write a function pattern which creates the following pattern up to n/2 number of lines.

If n <= 1 then it should return "" (i.e. empty string).
If any odd number is passed as argument then the pattern should last up to the largest even number which is smaller than the passed odd number.
Examples:
n = 8:

22
4444
666666
88888888
n = 5:

22
4444
*/

function pattern(n){
  let output="";
  if (n <= 1) {
    return output;
  } else {
    let number = n % 2 === 0 ? n : n - 1;
    for (let i = 0; i<=number; i++) {
      if (i !== 0 && i % 2 === 0) {
        output += `${String(i).repeat(i)}${i === number ? "" : '\n'}`
      }
    }
  }
  return output;
}

const result = pattern(5)
console.log("Result:", result);