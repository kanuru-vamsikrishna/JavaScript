/*
Why would we want to stop to only 50 shades of grey? Let's see to how many we can go.

Write a function that takes a number n as a parameter and return an array containing n shades of grey in hexadecimal code (#aaaaaa for example). The array should be sorted in ascending order starting with '#010101', '#020202', etc. (using lower case letters).

Examples:

n =  1:    ["#010101"]
n = 10:    ["#010101", "#020202", "#030303", "#040404", "#050505", "#060606", "#070707", "#080808", "#090909", "#0a0a0a"]
As a reminder, the grey color is composed by the same number of red, green and blue: #010101, #aeaeae, or #555555.

Black: #000000 and white: #ffffff are not accepted values.

When n is negative, just return an empty array. If n is higher than 254, just return an array of 254 elements.

Have fun!
*/

function shadesOfGrey(n){
  let number = Math.min(n, 254)
  let string = ''
  let finalArray = []
  if (number <= 0) {
    return []
  } else {
    for (let i = 1; i<=number; i++) {
      const hex = i.toString(16).padStart(2, '0');
      string = `#${hex}${hex}${hex}`;
      finalArray.push(string)
    }
  }
  return finalArray;
}

/*
The .padStart() and .padEnd() methods were introduced in ECMAScript 2017 (ES8). These methods are now widely supported in modern JavaScript environments, including:

All major browsers (latest versions of Chrome, Firefox, Edge, Safari, etc.).
Node.js (starting from version 8.0.0).
Quick Recap:
.padStart(targetLength, padString): Pads the beginning of the string.
.padEnd(targetLength, padString): Pads the end of the string.
Example Usage:
javascript
Copy code
console.log("5".padStart(3, '0')); // Output: "005"
console.log("5".padEnd(3, '0'));   // Output: "500"

*/

const result = shadesOfGrey(81)
console.log("Result:", result);