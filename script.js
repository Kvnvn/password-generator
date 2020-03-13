var generateBtn = document.querySelector("#generate");
// add variables to give an array 
var lowerCasechar = ["a", "b", "c", "d", "e", "f", "g", "h", "i", "j", "k", "l", "m", "n", "o", "p", "q", "r", "s", "t", "u", "v", "w", "x", "y", "z"];
var specialchar = ["!", "#", "$", "%", "&", "'", "*", "+", "-", ".", "/", ":", ";", "<", "=", ">", "?", "@", "[", "^", "_", "`", "{", "|", "}", "~"];
var upperCasechar = ["A", "B", "C", "D", "E", "F", "G", "H", "I", "J", "K", "L", "M", "N", "O", "P", "Q", "R", "S", "T", "U", "V", "W", "X", "Y", "Z"];
var numberchar = ["0", "1", "2", "3", "4", "5", "6", "7", "8", "9"];

// When the user clicks generate
generateBtn.addEventListener("click", writePassword);

// Write password to the #password input
function writePassword() {
  var password = generatePassword();
  var passwordText = document.querySelector("#password");
  passwordText.value = password;
}

function generatePassword () {
  // prompt user for number of chars
  var passwordLength = prompt("How many characters do you want the password to contain?");
  // save result in variable called passwordLength

  //ask if q's in order to get conditions for password generator 
  if (7 < passwordLength && passwordLength < 129) {
    var lowerCase = confirm("did you want to use Lowercase?");
    var upperCase = confirm("did you want to use Uppercase?");
    var specialkeys = confirm("did you want to use Special characters?");
    var number = confirm("did you want to use Numbers?");

  }
  // IF passwordLength is <= 7 or >= 129 then alert user that password length needs to be 8 to 128
  else {
    alert("Password length must be at least 8 to 128 characters long");
  }
  // let password = an empty string
  var password = "";
  for (i = 0; i < passwordLength;) {
    // set conditions to password length in order to loop properly
    if ((lowerCase === true) && i < passwordLength) {password = password + lowerCasechar[Math.floor(Math.random() * lowerCasechar.length)];
      i++;
    }

    if ((upperCase === true) && i < passwordLength) {
      password = password + upperCasechar[Math.floor(Math.random() * upperCasechar.length)];
      i++;
    }
    if ((number === true) && i < passwordLength) {
      password = password + numberchar[Math.floor(Math.random() * numberchar.length)];
      i++;
    }
    if ((specialkeys === true) && i < passwordLength) {
      password = password + specialchar[Math.floor(Math.random() * specialchar.length)];
      i++;
    }
  }
  return password;
};