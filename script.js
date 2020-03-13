var generateBtn = document.querySelector("#generate");
// let lowerCaseChars = all the lowercase characters
// let upperCaseChars = all the uppercase characters
// let numberChars = all the number characters
// let special = all the allowed special characters
var lowerCase = ["a", "b", "c", "d", "e", "f", "g", "h", "i", "j", "k", "l", "m", "n", "o", "p", "q", "r", "s", "t", "u", "v", "w", "x", "y", "z"];
var special = ["!", "#", "$", "%", "&", "'", "*", "+", "-", ".", "/", ":", ";", "<", "=", ">", "?", "@", "[", "^", "_", "`", "{", "|", "}", "~"];
var upperCase = ["A", "B", "C", "D", "E", "F", "G", "H", "I", "J", "K", "L", "M", "N", "O", "P", "Q", "R", "S", "T", "U", "V", "W", "X", "Y", "Z"];
var numberChars = ["0", "1", "2", "3", "4", "5", "6", "7", "8", "9"];
// When the user clicks generate
generateBtn.addEventListener("click", writePassword);
// Write password to the #password input
function writePassword() {
  // prompt user for number of chars
  var passwordLength = prompt("How many characters do you want the password to be?");
  // save result in variable called passwordLength
  if (7 < passwordLength)
    var lowerCase = confirm("did you want to use lowercase?");
  else if (passwordLength < 129) alert("max characters is 129")

//psuedo startup help
// var passwordText = document.querySelector("#password");
// passwordText.value = password;
// var password = generatePassword();
// let lowerCaseChars = all the lowercase characters
// let upperCaseChars = all the uppercase characters
// let numberChars = all the number characters
// let special = all the allowed special characters
// When the user clicks generate
// prompt user for number of chars
// save result in variable called passwordLength
// IF passwordLength is greater than 7 and less than 129
//   assign each of the following results to variables
//   let useNums = confirm user want to use numbers
//   let useLcase = confirm user wants lowercase characters
//   let useUcase = confirm user wants uppercase
//   let useSpecial = confirm user wants special chars