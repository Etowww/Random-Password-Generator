// Module Challenge Three

// Object containing all the possible character types that can be used in a password
let CharacterType = {
  LowerCase: ['a', 'b', 'c', 'd', 'e', 'f', 'g', 'h', 'i', 'j', 'k', 'l', 'm', 'n', 'o', 'p', 'q', 'r', 's', 't', 'u', 'v', 'w', 'x', 'y', 'z'],
  UpperCase: ['A', 'B', 'C', 'D', 'E', 'F', 'G', 'H', 'I', 'J', 'K', 'L', 'M', 'N', 'O', 'P', 'Q', 'R', 'S', 'T', 'U', 'V', 'W', 'X', 'Y', 'Z'],
  Numbers: ['0', '1', '2', '3', '4', '5', '6', '7', '8', '9'],
  Symbols: ['!', '@', '#', '$', '%', '^', '&', '*', '*', '(', ')', '_', '-','[',']','{','}'],
}
 

// Get references to the #generate element
var generateBtn = document.querySelector("#generate");

// Function that returns a random password based on the user selected requirements
function generatePassword(){
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
  // Initialize an empty array where possible characters will be stored
  possibleCharacters = [];
  // Determines the user's desired password length (Integer) from a prompt
  characterLength = parseInt(prompt('How many characters would you like your password to contain? Please choose a character length between 1-128.'));
  // Validates that the user entered a correct character (Number) and that it is a number between 8 - 128
  // If user enters an incorrect input it triggers an alert and does not continue with more prompts
  if (isNaN(characterLength) || characterLength < 8 || characterLength >128) {
    alert('Character length must be a number between 8-128, please re-enter an acceptable number for the password length');
    console.log('This is not an acceptable password. ' + characterLength);
    return false;
  }
  else {
    console.log('This is an acceptable password length. ' + characterLength);
  }

  // Variable used to check if the user has entered atleast one possible character type
  let validate = false;
  // 4 Prompts allowing user to select what type of characters they would like to include in their password
  // If the user selects a type of character it is then added to an array of possible characters then that array is logged to the console
  // If any character type is selected it changes the validate variable to true
  if (confirm('Would you like your password to include lowercase letters?')) {
    validate = true;
    possibleCharacters = possibleCharacters.concat(CharacterType.LowerCase);
    console.log('List of possible Characters: ' + possibleCharacters);
  }
  if (confirm('Would you like your password to include uppercase letters?')) {
    validate = true;
    possibleCharacters = possibleCharacters.concat(CharacterType.UpperCase);
    console.log('List of possible Characters: ' + possibleCharacters);
  }
  if (confirm('Would you like your password to include numbers?')) {
    validate = true;
    possibleCharacters = possibleCharacters.concat(CharacterType.Numbers);
    console.log('List of possible Characters: ' + possibleCharacters);
  }
  if (confirm('Would you like your password to include symbols')) {
    validate = true;
    possibleCharacters = possibleCharacters.concat(CharacterType.Symbols);
    console.log('List of possible Characters: ' + possibleCharacters);
  }
  // Checks to see if the user has selected atleast one character type by checking the truthiness of the validate variable
  // If the validate variable is still false, meaning no character type has been selected then an alert is triggered
  if (validate != true) {
    alert('You must have atleast one type of character selected for a password to be generated. Please select a type of character from the prompts.')
  }

  // Sets the randomly generated password from the generatePassword function to the query selected <text-area> (HTML lines 20-25) 
  // By changing the value of that text area the randomly generated password is then displayed for the user
  var password = generatePassword();
  var passwordText = document.querySelector("#password");
  passwordText.value = password;

}

// Add event listener to generate button
generateBtn.addEventListener("click", writePassword);
