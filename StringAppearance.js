/*
Given two arrays of strings, return the number of times each string of the second array appears in the first array.

Example
array1 = ['abc', 'abc', 'xyz', 'cde', 'uvw']
array2 = ['abc', 'cde', 'uap']
How many times do the elements in array2 appear in array1?

'abc' appears twice in the first array (2)
'cde' appears only once (1)
'uap' does not appear in the first array (0)
Therefore, solve(array1, array2) = [2, 1, 0]
*/

function solve(a,b){
  let finalArray = []
  for (let i = 0; i<b.length; i++) {
      let count = 0
    for (let j = 0; j<a.length; j++) {
      if (a[j] === b[i]) {
        count ++
      }
    }
        finalArray.push(count)
  }
  return finalArray;
}

/*
ChatGPT answer and implementation below function 
Instead of iterating through a for every element in b, you can preprocess a to count the occurrences of each element. This reduces the overall time complexity from 
𝑂
(
𝑛
×
𝑚
)
O(n×m) to 
𝑂
(
𝑛
+
𝑚
)
O(n+m), where 
𝑛
n is the length of a and 
𝑚
m is the length of b.
*/

function solve(a, b) {
  // Create a frequency map for elements in `a`
  const frequencyMap = {};
  for (const element of a) {
    frequencyMap[element] = (frequencyMap[element] || 0) + 1;
  }
  // Use the frequency map to get counts for elements in `b`
  const finalArray = b.map(element => frequencyMap[element] || 0);
  return finalArray;
}

let a = ['fn', 'vsiquhmjl', 'ppipxcjmq', 'vsiquhmjl', 'ogty', 'fo', 'taxynpezrx', 'ppipxcjmq', 'taxynpezrx', 'vsiquhmjl', 'ugjpb', 'ugjpb', 'taxynpezrx', 'ppipxcjmq', 'taxynpezrx', 'ppipxcjmq', 'fn', 'vsiquhmjl', 'fn', 'taxynpezrx', 'fn']
let b = ['fo', 'ugjpb', 'ogty']

const result = solve(a, b)
console.log("Result:", result)