// Assignment code here
// create function to ask user for password options
var options = function() {
  //create variable with prompt to determine password length with confirmation message
  var passwordLength = window.prompt("How long would you like your password to be?  Please enter a number between 8 and 128.")
  // if (passwordLength) {
  //   window.alert("You have selected your password to be " + passwordLength + " characters long.")
  // }
while (passwordLength < 8 || passwordLength > 128) {
    window.prompt("Please enter a value between 8 and 128.")
    if (passwordLength === "" || passwordLength === null) {
    window.prompt("Please enter a value between 8 and 128.")
    } else {
    window.alert("You have selected your password to be " + passwordLength + " characters long.")
    break;
    }
}
  
  // create variable with prompt to confirm lowercase letters for password with confirmation message
  var typeLowercase = window.confirm("Would you like to include lowercase letters");
  if (typeLowercase) {
    window.alert("You have selected lowercase letters.");
  } else {
    window.alert("There will be no lowercase letters.");
  }
// create variable with prompt to confirm uppercase letters for password with confirmation message
  var typeUppercase = window.confirm("Would you like to include uppercase letters?");
  if (typeUppercase) {
    window.alert("You have selected Uppercase letters.");
  } else {
    window.alert("There will be no Uppercase letters.");
  }
// create variable with prompt to confirm numeric values for password with confirmation message
  var typeNumeric = window.confirm("Would you like to inlcude numeric values?");
  if (typeNumeric) {
    window.alert("You have selected numeric values.");
  } else {
    window.alert("There will be no numeric values.");
  }
// create variable with prompt to confirm special characters for password with confirmation message
  var typeSpecial = window.confirm("Would you like to include special characters?");
  if (typeSpecial) {
    window.alert("You have selected special characters.");
  } else {
    window.alert("There will be no special characters.");
  }
}




// Get references to the #generate element
var generateBtn = document.querySelector("#generate");

// Write password to the #password input
function writePassword() {
  options();
  var password = generatePassword();
  var passwordText = document.querySelector("#password");

  windows.alert("")

  passwordText.value = password;

}

// Add event listener to generate button
generateBtn.addEventListener("click", writePassword);