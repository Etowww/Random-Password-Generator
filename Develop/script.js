// Assignment code here


// Get references to the #generate element
var generateBtn = document.querySelector("#generate");

function generatePassword(){
  // Initialize the new password
  let NewPass = '';

}


// Write password to the #password input
function writePassword() {
  characterLength = parseInt(prompt('How many characters would you like your password to contain? Please choose a character length between 1-128.'));
  if (isNaN(characterLength) || characterLength < 8 || characterLength >128) {
    alert('Character length must be a number between 8-128, please re-enter an acceptable number for the password length');
  }
  else {
    console.log('This is an acceptable password length.')
  }

  if (confirm('Would you like your password to include lowercase letters?')) {
    console.log('They would like to use lowercase letters.')
  }
  if (confirm('Would you like your password to include uppercase letters?')) {
    console.log('They would like to use uppercase letters.')
  }
  if (confirm('Would you like your password to include numbers?')) {
    console.log('They would like to use numbers.')
  }
  if (confirm('Would you like your password to include special characters')) {
    console.log('They would like to use special numbers.')
  }


  var password = generatePassword();
  var passwordText = document.querySelector("#password");

  passwordText.value = password;

}

// Add event listener to generate button
generateBtn.addEventListener("click", writePassword);
