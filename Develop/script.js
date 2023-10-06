// Assignment code here
// creating new variable called special characters
var specialCharacters = ["!", "#", "$", "%", "&", "'","(",")","*"];
var numbers = [0,1,2,3,4,5,6,7,8,9];
var lowerCase = ["a", "b", "c", "d", "e", "f", "g", "h", "i", "j", "k","l", "m", "n", "o", "p", "q", "r", "s", "t", "u", "v", "w", "x", "y", "z"];
var upperCase = ["A", "B", "C", "D", "E", "F", "G", "H", "I", "J", "K","L", "M","N", "O", "P", "Q", "R", "S", "T", "U", "V", "W", "X", "Y", "Z"];

// make a function for generatePassword
function generatePassword() {
// make a prompt that asks user to enter 8 - 128 characters
var passwordLength = prompt("Enter 8 to 128 characters")
// make a conditional statement for password length
if (passwordLength < 8 || passwordLength > 128) {
  alert("Please enter a valid number");
}
}
// make a prompt that confirms option of sp ch, num, lc, or uc


// make an empty array that holds info of what user wants


// Get references to the #generate element
var generateBtn = document.querySelector("#generate");

// Write password to the #password input
function writePassword() {
  var password = generatePassword();
  var passwordText = document.querySelector("#password");

  passwordText.value = password;

}

// Add event listener to generate button
generateBtn.addEventListener("click", writePassword);
