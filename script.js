var generateBtn = document.querySelector("#generate");
// let lowerCaseChars = all the lowercase characters
// let upperCaseChars = all the uppercase characters
// let numberChars = all the number characters
// let special = all the allowed special characters
var lowerCasechar = ["a", "b", "c", "d", "e", "f", "g", "h", "i", "j", "k", "l", "m", "n", "o", "p", "q", "r", "s", "t", "u", "v", "w", "x", "y", "z"];
var specialchar = ["!", "#", "$", "%", "&", "'", "*", "+", "-", ".", "/", ":", ";", "<", "=", ">", "?", "@", "[", "^", "_", "`", "{", "|", "}", "~"];
var upperCasechar = ["A", "B", "C", "D", "E", "F", "G", "H", "I", "J", "K", "L", "M", "N", "O", "P", "Q", "R", "S", "T", "U", "V", "W", "X", "Y", "Z"];
var numberchar = ["0", "1", "2", "3", "4", "5", "6", "7", "8", "9"];

// When the user clicks generate
generateBtn.addEventListener("click", writePassword);

// Write password to the #password input
function writePassword() {

  // prompt user for number of chars
  // save result in variable called passwordLength
  var passwordLength = prompt("How many characters do you want the password to contain?");
  var passwordText = document.querySelector("#password");
  passwordText.value = password;
  //conditions for password generator 
  if (7 < passwordLength && passwordLength < 129) {
    var lowerCase = confirm("did you want to use Lowercase?");
    var upperCase = confirm("did you want to use Uppercase?");
    var specialkeys = confirm("did you want to use Special characters?");
    var number = confirm("did you want to use Numbers?");
    
}
else{
      alert("Password must be within 8 to 128 characters");}

      generatePassword();
    

function generatePassword() {

      return password;
}}