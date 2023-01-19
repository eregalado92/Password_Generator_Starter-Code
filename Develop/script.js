document.querySelector("#generate").addEventListener("click", writePassword);

var number = ["0", "1", "2", "3", "4", "5", "6", "7", "8", "9"];
var specialChar = ["!", "%", "&", ",", "*", "+", "-", ".", "/", "<", ">", "?","~"];
var lowerCase = ["a", "b", "c", "d", "e", "f", "g", "h", "i", "j", "k", "l", "m", "n", "o", "p", "q", "r", "s", "t", "u", "v", "w", "x", "y", "z"];
var upperCase = ["A", "B", "C", "D", "E", "F", "G", "H", "I", "J", "K", "L", "M", "N", "O", "P", "Q", "R", "S", "T", "U", "V", "W", "X", "Y", "Z"];
 
confirmLength = "";
confirmnupperCase;
confirmlowerCase;
confirmpecialCharacter;
confirmnumericCharacter;


function generatePassword() {
var confirmLength = (prompt("How many characters would you like your password to contain?"));
while(confirmLength <= 8 || confirmLength >= 50) {
alert("Password length must be between 8-50 characters Try again");
var confirmLength = (prompt("How many characters would you like your password to contain?"));
} 

alert(`Your password will have ${confirmLength} characters`);

var confirmspecialCharacter = confirm("Click OK to confirm if you would like to include special characters");
var confirmnumericCharacter = confirm("Click OK to confirm if you would like to include numeric characters");    
var confirmlowerCase = confirm("Click OK to confirm if you would like to include lowercase characters");
var confirmupperCase = confirm("Click OK to confirm if you would like to include uppercase characters");
 
while(confirmupperCase === false && confirmLowerCase === false && confirmSpecialCharacter === false && confirmNumericCharacter === false) {
alert("You must choose at least one parameter");
var confirmspecialCharacter = confirm("Click OK to confirm if you would like to include special characters");
var confirmnumericCharacter = confirm("Click OK to confirm if you would like to include numeric characters");    
var confirmlowerCase = confirm("Click OK to confirm if you would like to include lowercase characters");
var confirmupperCase = confirm("Click OK to confirm if you would like to include uppercase characters");   
} 

var passwordCharacters = []
    
if (confirmspecialCharacter) {
passwordCharacters = passwordCharacters.concat(specialChar)
}
if (confirmnumericCharacter) {
passwordCharacters = passwordCharacters.concat(number)
}
     
if (confirmlowerCase) {
passwordCharacters = passwordCharacters.concat(lowerCase)
}
if (confirmupperCase) {
passwordCharacters = passwordCharacters.concat(upperCase)
}
console.log(passwordCharacters)

var randomPassword = ""
      
for (var i = 0; i < confirmLength; i++) {
randomPassword = randomPassword + passwordCharacters[Math.floor(Math.random() * passwordCharacters.length)];
console.log(randomPassword)
}
return randomPassword;
}

function writePassword() {
var password = generatePassword();
var passwordText = document.querySelector("#password");
passwordText.value = password;
}
