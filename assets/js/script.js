//create arrays to draw characters from
var num = ["0", "1", "2", "3", "4", "5", "6", "7", "8", "9"];
var alph = ["A", "B", "C", "D", "E", "F", "G", "H", "I", "J", "K", "L", "M", "N", "O", "P", "Q", "R", "S", "T", "U", "V", "W", "X", "Y", "Z"]
var special = ["!", "'", "#", "$", "%", "&", "(", ")", "*", "+", "-", ".", "/", ":", ";", "<", "=", ">", "?", "@", "[", "]", "^", "_", "`", "{", "}", "|", "~"]
//create array to fill with selected characters
var mixedChars = [];
//create array to fill with random chars from mixedChars array
var passwordArr = [];

// create function to ask user for password generatePassword
var generatePassword = function() {
  var passwordText = document.querySelector("#password");
  passwordText.value = "";
  //create variable with prompt to determine password length with confirmation message
  var passwordLength = window.prompt("How long would you like your password to be?  Please enter a number between 8 and 128.")

  if (passwordLength >= 8 && passwordLength <= 128) {
    window.alert("You have selected your password to be " + passwordLength + " characters long.")
  } else if (passwordLength === "") {
    window.alert("Invalid Entry.  Try Again.");
    return generatePassword();
  } else if (passwordLength === null) {
    return generatePassword();
  } else if (passwordLength < 8 || passwordLength > 128) {
    window.alert("Invalid Entry.  Try Again.");
    return generatePassword();
  } else {
    window.alert("Invalid Entry.  Try Again.")
    return generatePassword();
  };

  // create variable with prompt to confirm lowercase letters for password with confirmation message and push to mixedChars if true.
  var typeLowercase = window.confirm("Would you like to include lowercase letters");
  if (typeLowercase) {
    for (var i = 0; i < alph.length; i++) {
      mixedChars.push(alph[i].toLowerCase());
    }
    window.alert("You have selected lowercase letters.");
  } else {
    window.alert("There will be no lowercase letters.");
  }
  // create variable with prompt to confirm uppercase letters for password with confirmation message and push to mixedChars if true.
  var typeUppercase = window.confirm("Would you like to include uppercase letters?");
  if (typeUppercase) {
    for (var i = 0; i < alph.length; i++) {
      mixedChars.push(alph[i]);
    }
    window.alert("You have selected Uppercase letters.");
  } else {
    window.alert("There will be no Uppercase letters.");
  }
  // create variable with prompt to confirm numeric values for password with confirmation message and push to mixedChars if true.
  var typeNumeric = window.confirm("Would you like to inlcude numeric values?");
  if (typeNumeric) {
    for (var i = 0; i < num.length; i++) {
      mixedChars.push(num[i].toString());
    }
    window.alert("You have selected numeric values.");
  } else {
    window.alert("There will be no numeric values.");
  }
  // create variable with prompt to confirm special characters for password with confirmation message and push to mixedChars if true.
  var typeSpecial = window.confirm("Would you like to include special characters?");
  if (typeSpecial) {
    for (var i = 0; i < special.length; i++) {
      mixedChars.push(special[i].toString());
    }
    window.alert("You have selected special characters.");
  } else {
    window.alert("There will be no special characters.");
  }

  if (!typeLowercase && !typeUppercase && !typeNumeric && !typeSpecial){
    window.alert("You must pick at least 1 type of character! Please try again.")
    return generatePassword();
  }
  //clears the password array
  var passwordArr = [];
  // creates and ranomizes password  
  for (var i = 0; i < passwordLength; i++) {
    arrLength = mixedChars.length;
    var passwordChars = Math.floor(Math.random() * arrLength + 1);
    mixedChars[passwordChars];
    passwordArr.push(mixedChars[passwordChars]);
  }

  var functionResult = passwordArr.join('');

  return functionResult;
}
// Get references to the #generate element
var generateBtn = document.querySelector("#generate");

// Write password to the #password input
function writePassword() {
  var password = generatePassword();
  var passwordText = document.querySelector("#password");
  passwordText.value = password;
}

 // generateBtn.addEventListener("click", writePassword);
generateBtn.addEventListener("click", writePassword)


