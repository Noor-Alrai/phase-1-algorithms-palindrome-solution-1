function isPalindrome(word) {

  // Write your algorithm here
 
  const reverseWord = word.split('').reverse().join('');
  

  if (word === reverseWord){
    return true;
  }
  else{
    return false;
  }
 

}

/* 
  Add your pseudocode here
  if the word and revers word are the same retrn true.
  else return false
*/

/*
  Add written explanation of your solution here
*/

// You can run `node index.js` to view these console logs
if (require.main === module) {
  // add your own custom tests in here
  console.log("Expecting: true");
  console.log("=>", isPalindrome("racecar"));

  console.log("");

  console.log("Expecting: false");
  console.log("=>", isPalindrome("robot"));
}

module.exports = isPalindrome;
console.log(isPalindrome("abssba"))