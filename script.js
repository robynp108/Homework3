// Assignment Code
var generateBtn = document.querySelector("#generate");

//global variables meaning at the very top of our code

// Array of numeric characters to be included in password
var numericCharacters = ['0', '1', '2', '3', '4', '5', '6', '7', '8', '9']; 

// Array of special characters to be included in password

	//your code here
var specialCharacters = ['!', '"', '#', '$', '%', '&', '(', ')', '*', '+', ',', '-', '.', '/', ':', ';', '<', '=', '>', '?', '@', '[', '\\', ']', '^', '_', '`', '{', '|', '}', '~'];
// Array of lowercase characters to be included in password

  //your code here
var lowerCaseCharacters = ["a", "b", "c", "d", "e", "f", "g", "h", "i", "j", "k", "l", "m", "n", "o", "p", "q", "r", "s", "t", "u", "v", "w", "x", "y", "z"];
// Array of uppercase characters to be included in password

	//your code here
var upperCaseCharacters = ["A", "B", "C", "D", "E", "F", "G", "H", "I", "J", "K", "L", "M", "N", "O", "P", "Q", "R", "S", "T", "U", "V", "W", "X", "Y", "Z"];

function generatePassword () {
		//a prompt for how many characters the user would like
			//must be 8-128 characters
      //store it in a variable
  var howManyCharacters = prompt("How many characters to use (8-128?");    

		//ask the user if they want lowercase
			//store it in a variable
  var lowerCaseChoice = confirm("Would you like to use lowercase characters?");
		//ask the user if they want uppercase
			//store it in a variable
  var upperCaseChoice = confirm("Would you like to use uppercase characters?");
		//ask the user if they want numeric
			//store it in a variable
  var numsChoice = confirm("Would you like to use numeric characters?");
		//ask the user if they want special characters
      //store it in a variable
  var specialsChoice = confirm("Would you like to use special characters?");

  var passwordOptions = [];
  
  if (lowerCaseChoice) {
    passwordOptions = passwordOptions.concat(lowerCaseCharacters);
  } 

  if (upperCaseChoice) {
    passwordOptions = passwordOptions.concat(upperCaseCharacters);
  } 

  if (numsChoice) {
    passwordOptions = passwordOptions.concat(numericCharacters);
  } 

  if (specialsChoice) {
    passwordOptions = passwordOptions.concat(specialCharacters);
  } 

  if (passwordOptions.length === 0) {
    alert("You must choose at least one character type.");
    return "";
  } 

  var password = "";
  for (var i = 0; i < howManyCharacters; i++) {
    password = password + "a";
  }
  return password;

}

// Write password to the #password input
function writePassword () {
  var password = generatePassword();
  var passwordText = document.querySelector("#password");

  passwordText.value = password;

}

// Add event listener to generate button
generateBtn.addEventListener("click", writePassword);