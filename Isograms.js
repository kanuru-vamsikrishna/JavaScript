/*
An isogram is a word that has no repeating letters, consecutive or non-consecutive. Implement a function that determines whether a string that contains only letters is an isogram. Assume the empty string is an isogram. Ignore letter case.

Example: (Input --> Output)

"Dermatoglyphics" --> true
"aba" --> false
"moOse" --> false (ignore letter case)
*/

function isIsogram(str){
  const miniString = str.toLowerCase().split("")
  let array = []
  let count = {}
  let result = true;
   miniString.forEach((each) => {
     count[each] = (count[each] || 0) + 1
     array = Object.entries(count).map(([key, value]) => ({ [key]: value}))
   })
   array.filter((value) => {
     if (Object.values(value)[0] > 1) {
       result = false
     }
   })
   return result
}
 
const result = isIsogram("Dermatoglyphics")
console.log("Result:", result);

// Alternative way
// function isIsogram(str){
// 	return new Set(str.toUpperCase()).size == str.length;
// }