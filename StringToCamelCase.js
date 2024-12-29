/*
Complete the method/function so that it converts dash/underscore delimited words into camel casing. The first word within the output should be capitalized only if the original word was capitalized (known as Upper Camel Case, also often referred to as Pascal case). The next words should be always capitalized.

Examples
"the-stealth-warrior" gets converted to "theStealthWarrior"

"The_Stealth_Warrior" gets converted to "TheStealthWarrior"

"The_Stealth-Warrior" gets converted to "TheStealthWarrior"
*/

function toCamelCase(str) {
  let result = '';
  let a 
  if(str.includes('_')){
    a = str.split("_")
    modifyResult(a)
  }
  else if(str.includes('-')){
    a = str.split("-")
    modifyResult(a)
  }
  
  function modifyResult(a){
    result = result + a[0]
    for(i=1;i<a.length;i++) {
      result = result  + (a[i].charAt(0).toUpperCase() + a[i].slice(1)) 
     }
  }
  return result
}

const result = toCamelCase("the-stealth-warrior");

console.log("Result:", result)