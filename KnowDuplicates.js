/*
Write a function that will return the count of distinct case-insensitive alphabetic characters and numeric digits that occur more than once in the input string. The input string can be assumed to contain only alphabets (both uppercase and lowercase) and numeric digits.

Example
"abcde" -> 0 # no characters repeats more than once
"aabbcde" -> 2 # 'a' and 'b'
"aabBcde" -> 2 # 'a' occurs twice and 'b' twice (`b` and `B`)
"indivisibility" -> 1 # 'i' occurs six times
"Indivisibilities" -> 2 # 'i' occurs seven times and 's' occurs twice
"aA11" -> 2 # 'a' and '1'
"ABBA" -> 2 # 'A' and 'B' each occur twice
*/

function duplicateCount(text){
  const mini_text = text.toLowerCase().split("")
  let array = []
  let count = {}
  let finalArray = []
  mini_text.forEach((eachChar) => {
    count[eachChar] = (count[eachChar] || 0) + 1
    array = Object.entries(count).map(([key, value]) => ({ [key]: value }) )
  })
  for (let i = 0; i < array.length; i++) {
    if (Object.values(array[i]) > 1) {
      finalArray.push(array[i])
    }
  }
  // Alternative way
  // const duplicates = Object.values(count).filter(value => value > 1);
  // return duplicates.length;
  return finalArray.length
}

const result = duplicateCount("Indivisibilities")
console.log("Result:", result)