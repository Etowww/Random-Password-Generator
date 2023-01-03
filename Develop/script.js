// Assignment code here
let CharacterType = {
  LowerCase: ['a', 'b', 'c', 'd', 'e', 'f', 'g', 'h', 'i', 'j', 'k', 'l', 'm', 'n', 'o', 'p', 'q', 'r', 's', 't', 'u', 'v', 'w', 'x', 'y', 'z'],
  UpperCase: ['A', 'B', 'C', 'D', 'E', 'F', 'G', 'H', 'I', 'J', 'K', 'L', 'M', 'N', 'O', 'P', 'Q', 'R', 'S', 'T', 'U', 'V', 'W', 'X', 'Y', 'Z'],
  Numbers: ['0', '1', '2', '3', '4', '5', '6', '7', '8', '9'],
  Symbols: ['!', '@', '#', '$', '%', '^', '&', '*', '*', '(', ')', '_', '-','[',']','{','}'],
}
 

// Get references to the #generate element
var generateBtn = document.querySelector("#generate");

function generatePassword(){
  let password = '';
  for (var i = 0; i < characterLength; i++) {
    let RandomItem = Math.floor(Math.random() * possibleCharacters.length);
    password = password + possibleCharacters[RandomItem];
    console.log(password);
  }
  return password;
}


// Write password to the #password input
function writePassword() {
  possibleCharacters = [];
  characterLength = parseInt(prompt('How many characters would you like your password to contain? Please choose a character length between 1-128.'));
  if (isNaN(characterLength) || characterLength < 8 || characterLength >128) {
    alert('Character length must be a number between 8-128, please re-enter an acceptable number for the password length');
    return false;
  }
  else {
    console.log('This is an acceptable password length. ' + characterLength)
  }

  let validate = false;

  if (confirm('Would you like your password to include lowercase letters?')) {
    console.log('They would like to use lowercase letters.');
    validate = true;
    possibleCharacters = possibleCharacters.concat(CharacterType.LowerCase);
    console.log(possibleCharacters);
  }
  if (confirm('Would you like your password to include uppercase letters?')) {
    console.log('They would like to use uppercase letters.');
    validate = true;
    possibleCharacters = possibleCharacters.concat(CharacterType.UpperCase);
    console.log(possibleCharacters);
  }
  if (confirm('Would you like your password to include numbers?')) {
    console.log('They would like to use numbers.');
    validate = true;
    possibleCharacters = possibleCharacters.concat(CharacterType.Numbers);
    console.log(possibleCharacters);
  }
  if (confirm('Would you like your password to include symbols')) {
    console.log('They would like to use symbols.');
    validate = true;
    possibleCharacters = possibleCharacters.concat(CharacterType.Symbols);
    console.log(possibleCharacters);
  }
  
  if (validate != true) {
    alert('You must have atleast one type of character selected for a password to be generated. Please select a type of character from the prompts.')
  }


  var password = generatePassword();
  var passwordText = document.querySelector("#password");

  passwordText.value = password;

}

// Add event listener to generate button
generateBtn.addEventListener("click", writePassword);
