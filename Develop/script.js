// Assignment code here
// create new variable for special characters, num, lc, and uc
var specialCharacters = ["!", "#", "$", "%", "&", "'","(",")","*"];
var numbers = [0,1,2,3,4,5,6,7,8,9];
var lowercase = ["a", "b", "c", "d", "e", "f", "g", "h", "i", "j", "k","l", "m", "n", "o", "p", "q", "r", "s", "t", "u", "v", "w", "x", "y", "z"];
var uppercase = ["A", "B", "C", "D", "E", "F", "G", "H", "I", "J", "K","L", "M","N", "O", "P", "Q", "R", "S", "T", "U", "V", "W", "X", "Y", "Z"];

// make a function for generatePassword
function generatePassword() {
// make a prompt that asks user to enter 8 - 128 characters
var passwordLength = prompt("Enter a number between 8 to 128")
// make a conditional statement for password length
if (passwordLength < 8 || passwordLength > 128) {
  alert("Please enter a valid number");
}
// make a prompt that confirms option of sp ch, num, lc, or uc
var option = prompt("Include lowercase, uppercase, numeric, and/or special characters?")
}


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
