// Assignment code here
var num = ["0", "1", "2", "3", "4", "5", "6", "7", "8", "9"];
var char = ["A", "B", "C", "D", "E", "F", "G", "H", "I", "J", "K", "L", "M", "N", "O", "P", "Q", "R", "S", "T", "U", "V", "W", "X", "Y", "Z"]
var special = ["!", "'", "#", "$", "%", "&", "(", ")", "*", "+", ",", "-", ".", "/", ":", ";", "<", "=", ">", "?", "@", "[", "]", "^", "_", "`", "{", "}", "|", "~"]

var passwordArray = [];


// create function to ask user for password options
var options = function() {
  //create variable with prompt to determine password length with confirmation message
  var passwordLength = window.prompt("How long would you like your password to be?  Please enter a number between 8 and 128.")

  if (passwordLength >= 8 && passwordLength <= 128) {
    window.alert("You have selected your password to be " + passwordLength + " characters long.")
  } else if (passwordLength < 8 || passwordLength > 128) {
    window.alert("Invalid Entry.  Try Again.");
    return options();
  } else if (passwordLength === "" || passwordLength === null) {
    window.alert("Invalid Entry.  Try Again.");
    return options();
  } else {
    return options()
  };

// create variable with prompt to confirm lowercase letters for password with confirmation message and push to passwordArray if true.
  var typeLowercase = window.confirm("Would you like to include lowercase letters");
  if (typeLowercase) {
    for (var i = 0; i < char.length; i++) {
      passwordArray.push(char[i].toLowerCase());
    }
    window.alert("You have selected lowercase letters.");
  } else {
    window.alert("There will be no lowercase letters.");
  }
// create variable with prompt to confirm uppercase letters for password with confirmation message and push to passwordArray if true.
  var typeUppercase = window.confirm("Would you like to include uppercase letters?");
  if (typeUppercase) {
    for (var i = 0; i < char.length; i++) {
      passwordArray.push(char[i]);
    }
    window.alert("You have selected Uppercase letters.");
  } else {
    window.alert("There will be no Uppercase letters.");
  }
// create variable with prompt to confirm numeric values for password with confirmation message and push to passwordArray if true.
  var typeNumeric = window.confirm("Would you like to inlcude numeric values?");
  if (typeNumeric) {
    for (var i = 0; i < num.length; i++) {
      passwordArray.push(num[i].toString());
    }
    window.alert("You have selected numeric values.");
  } else {
    window.alert("There will be no numeric values.");
  }
// create variable with prompt to confirm special characters for password with confirmation message and push to passwordArray if true.
  var typeSpecial = window.confirm("Would you like to include special characters?");
  if (typeSpecial) {
    for (var i = 0; i < special.length; i++) {
      passwordArray.push(special[i].toString());
    }
    window.alert("You have selected special characters.");
  } else {
    window.alert("There will be no special characters.");
  }
  console.log(passwordArray);
  console.log(passwordLength);

  for(var i = 0; i < passwordLength.length; i++) {
    console.log(passwordArray);
    return passwordArray;
  }
  return passwordArray;;
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