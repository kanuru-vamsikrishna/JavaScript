/* 
Complete the square sum function so that it squares each number passed into it and then sums the results together.

For example, for [1, 2, 2] it should return 9 because 
1
2
+
2
2
+
2
2
=
9
1 
2
 +2 
2
 +2 
2
 =9.
*/

function squareSum(numbers){
  let finalArray = []
  let sum = 0;
  numbers.map((eachNum) => {
    finalArray.push(eachNum*eachNum);
  })
  for(let i=0; i<finalArray.length; i++) {
    sum += finalArray[i];
  }
  return sum;
}

const array = [9, 8, 7, 10]
const result = squareSum(array);
console.log("Result:", result);