/*
A person's full name is usually composed of a first name, middle name and last name; however in some cultures (for example in South India) there may be more than one middle name.

Write a function that takes the full name of a person, and returns the initials, separated by dots ('.'). The initials must be uppercase. The last name of the person must appear in full, with its first letter in uppercase as well.

See the pattern below:

"code wars"            ---> "C.Wars"
"Barack hussein obama" ---> "B.H.Obama"
Names in the full name are separated by exactly one space (' ' ) ; without leading or trailing spaces. Names will always be lowercase, except optionally their first letter.
*/

function initials(n){
  const initArray = n.split(' ')
  let string = ''
  for (let i = 0; i<initArray.length; i++) {
    if (i === (initArray.length - 1)) {
    string += `${initArray[i][0].toUpperCase()}${initArray[i].slice(1).toLowerCase()}`
    } else {
      string += `${initArray[i][0].toUpperCase()}.`
    }
  }
  return string

}

const result = initials('Kanuru Vamsi Krishna')
console.log("Result:", result);