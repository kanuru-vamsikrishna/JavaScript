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
  console.log(items, "items");
  
  let index = 0;
  
  while (items.length > 0) {
    console.log(items.length, "length");
    console.log(index, "index1");
    const one = index + (k - 1)
    const two = items.length;
    console.log(one, "one")
    console.log(two, "two")
    index = one % two;
    console.log(index, "index2")
    // console.log(items.splice(index, 1)[0], 'splice')
    result.push(items.splice(index, 1)[0]);
    console.log(result, "result")
    console.log(items, "items")
  }
  
  return result;
}

const result = josephus(["C", "o", "d", "e", "W", "a", "r", "s"], 4)
console.log("Result:", result);