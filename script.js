// Module Challenge Three

// Arrays containing all the possible character types that can be used in a password
let LowerCase = ['a', 'b', 'c', 'd', 'e', 'f', 'g', 'h', 'i', 'j', 'k', 'l', 'm', 'n', 'o', 'p', 'q', 'r', 's', 't', 'u', 'v', 'w', 'x', 'y', 'z'];
let UpperCase = ['A', 'B', 'C', 'D', 'E', 'F', 'G', 'H', 'I', 'J', 'K', 'L', 'M', 'N', 'O', 'P', 'Q', 'R', 'S', 'T', 'U', 'V', 'W', 'X', 'Y', 'Z'];
let Numbers = ['0', '1', '2', '3', '4', '5', '6', '7', '8', '9'];
let Symbols = ['!', '@', '#', '$', '%', '^', '&', '*', '*', '(', ')', '_', '-', '[', ']', '{', '}'];

// Get references to the #generate element
var generateBtn = document.querySelector("#generate");

// Function that returns a random password based on the user selected requirements
function generatePassword() { 
  // Initialize an empty array where possible characters will be stored
  let possibleCharacters = [];
  // Determines the user's desired password length (Integer) from a prompt
  let characterLength = parseInt(prompt('How many characters would you like your password to contain? Please choose a character length between 8-128.'));
  // Validates that the user entered a correct character (Number) and that it is a number between 8 - 128
  // If user enters an incorrect input it triggers an alert and does not continue with more prompts
  if (isNaN(characterLength) || characterLength < 8 || characterLength > 128) {
    alert('Character length must be a number between 8-128, please re-enter an acceptable number for the password length');
    console.log('This is not an acceptable password. ' + characterLength);
    return null;
  }
  console.log('This is an acceptable password length. ' + characterLength);

  // 4 Prompts allowing user to select what type of characters they would like to include in their password
  // Sets the value of confirm (either true/false) to a variable
  // If the user selects a type of character (true) it is then added to an array of possible characters then that array is logged to the console
  let lowercaseConfirm = confirm('Would you like your password to include lowercase letters?')
  let uppercaseConfirm = confirm('Would you like your password to include uppercase letters?')
  let numbersConfirm =confirm('Would you like your password to include numbers?')
  let symbolsConfirm = confirm('Would you like your password to include symbols')
  if (lowercaseConfirm) {
    possibleCharacters = possibleCharacters.concat(LowerCase);
    console.log('List of possible Characters: ' + possibleCharacters);
  }
  if (uppercaseConfirm) {
    possibleCharacters = possibleCharacters.concat(UpperCase);
    console.log('List of possible Characters: ' + possibleCharacters);
  }
  if (numbersConfirm) {
    possibleCharacters = possibleCharacters.concat(Numbers);
    console.log('List of possible Characters: ' + possibleCharacters);
  }
  if (symbolsConfirm) {
    possibleCharacters = possibleCharacters.concat(Symbols);
    console.log('List of possible Characters: ' + possibleCharacters);
  }

  // Checks to see if the user has selected atleast one character type by checking the truthiness of the 4 prompt input variables
  // If all of the prompt input variables are still false, meaning no character type has been selected then an alert is triggered
  if (!lowercaseConfirm && !uppercaseConfirm && !numbersConfirm && !symbolsConfirm) {
    alert('You must have atleast one type of character selected for a password to be generated. Please select a type of character from the prompts.')
    return null
  }

  // Initialize new password
  let password = '';
  // Add to the empty string a random character from the possible characters array
  // Password length which is user input, determines the amount of random characters that get added to the empty string
  for (var i = 0; i < characterLength; i++) {
    let RandomItem = Math.floor(Math.random() * possibleCharacters.length);
    password = password + possibleCharacters[RandomItem];
    console.log(password);
  }
  return password;
}

// Write password to the #password input
function writePassword() {
  // Sets the randomly generated password from the generatePassword function to the query selected <text-area> (HTML lines 20-25) 
  // By changing the value of that text area the randomly generated password is then displayed for the user
  var password = generatePassword();
  var passwordText = document.querySelector("#password");
  passwordText.value = password;

}

// Add event listener to generate button
generateBtn.addEventListener("click", writePassword);
