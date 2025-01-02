/*
Background
We've got a very long string, containing a bunch of User IDs. This string is a listing, which seperates each user ID with a comma and a whitespace ("' "). Sometimes there are more than only one whitespace. Keep this in mind! Futhermore, some user Ids are written only in lowercase, others are mixed lowercase and uppercase characters. Each user ID starts with the same 3 letter "uid", e.g. "uid345edj". But that's not all! Some stupid student edited the string and added some hashtags (#). User IDs containing hashtags are invalid, so these hashtags should be removed!

Task
Remove all hashtags
Remove the leading "uid" from each user ID
Return an array of strings --> split the string
Each user ID should be written in only lowercase characters
Remove leading and trailing whitespaces
*/

function getUsersIds(str){
  let finalArray = []
  const loopArray = str.split(', ') || str.split('')
  for (let i = 0; i<loopArray.length; i++) {
    if (loopArray[i].includes('#') || loopArray[i].includes('uid')) {
      const string1 = loopArray[i].trim();
      let string
      let nextString
        string = string1.replace(/^uid/, '')
        nextString = string.replace(/#/g, '')
      if (nextString.startsWith('uid') && nextString.length !== 3) {
        nextString = nextString.replace(/^uid/, '')
      }
     finalArray.push(nextString.trim().toLowerCase())
    }
  }
  return finalArray;
}

const result = getUsersIds("uid345edj")
console.log("Result:", result);