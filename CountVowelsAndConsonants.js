/*
#Task

Your task is to implement a function which takes a string as input and return an object containing the properties vowels and consonants. The vowels property must contain the total count of vowels {a,e,i,o,u}, and the total count of consonants {a,..,z} - {a,e,i,o,u}. Handle invalid input and don't forget to return valid ones.

#Input

The input is any random string. You must then discern what are vowels and what are consonants and sum for each category their total occurrences in an object. However you could also receive inputs that are not strings. If this happens then you must return an object with a vowels and consonants total of 0 because the input was NOT a string. Refer to the Example section for a more visual representation of which inputs you could receive and the outputs expected. :)

Example:
Input: get_count('test')
Output: {vowels:1,consonants:3}

Input: get_count('tEst')
Output: {vowels:1,consonants:3}

Input get_count('    ')
Output: {vowels:0,consonants:0}

Input get_count()
Output: {vowels:0,consonants:0}
*/

function getCount(words) {
  if (typeof words !== "string" || !words.trim()) {
    return { vowels: 0, consonants: 0 };
  }

  const normalizedWord = words.replace(/[^a-z]/gi, "").toLowerCase();

  const vowels = new Set(["a", "e", "i", "o", "u"]);
  let countVowels = 0;

  for (const char of normalizedWord) {
    if (vowels.has(char)) {
      countVowels++;
    }
  }

  const countConsonants = normalizedWord.length - countVowels;

  return { vowels: countVowels, consonants: countConsonants };
}

const result = getCount('HEre Is sOme text')
console.log("Result:", result)