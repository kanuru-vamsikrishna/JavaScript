/*
[1,2,3,4,5,6,7] - initial sequence
[1,2,4,5,6,7] => 3 is counted out and goes into the result [3]
[1,2,4,5,7] => 6 is counted out and goes into the result [3,6]
[1,4,5,7] => 2 is counted out and goes into the result [3,6,2]
[1,4,5] => 7 is counted out and goes into the result [3,6,2,7]
[1,4] => 5 is counted out and goes into the result [3,6,2,7,5]
[4] => 1 is counted out and goes into the result [3,6,2,7,5,1]
[] => 4 is counted out and goes into the result [3,6,2,7,5,1,4]
*/

function josephus(items,k){
  const result = [];
  
  let index = 0;
  
  while (items.length > 0) {
    index = (index + (k - 1)) % items.length;
    
    result.push(items.splice(index, 1)[0]);
  }
  
  return result;
}

const result = josephus(["C", "o", "d", "e", "W", "a", "r", "s"], 4)
console.log("Result:", result);