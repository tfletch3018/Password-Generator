// Assignment Code
var generateBtn = document.querySelector("#generate");
var lowercaseChar = "abcdefghijklmnopqrstuvwxyz";
var uppercaseChar = "ABCDEFGHIJKLMNOPQRSTUVWXYZ";
var numberChar = "0123456789";
var specialChar = "!@#$%^&*()_-+={}[];:'`~<,>.?/|"
var passwordLength;
var uppercaseConfirm;
var numberConfirm;
var specialConfirm;

// Function to determine password length
function findLength() {
  passwordLength = prompt("Choose you password length (between 8-128 characters): ");

  if (passwordLength<8) {
    alert("Password length must be between 8-128 characters");
    findLength();
  } else if (passwordLength>128) {
    alert("Password length must be between 8-128 characters");
    findLength();
  } else if (isNaN (passwordLength)) {
    alert("Password length must be between 8-128 characters");
    findLength();
  } else {
    alert("You may select from 3 options of password characters. \nIf no option(s) are selected, password will default to all lowercase letters");
  }
  return passwordLength;
}

// Function used to confirm option to include uppercase characters in password generator
function confirmUppercase() {
  uppercaseConfirm = prompt("Would you like to include uppercase characters? \n(Yes or No)");
  uppercaseConfirm = uppercaseConfirm.toLowerCase();

  if (uppercaseConfirm === null || uppercaseConfirm === "") {
    alert("Please select Yes or No");
    confirmUppercase();
  
  } else if (uppercaseConfirm === "yes" || uppercaseConfirm ==="y") {
    uppercaseConfirm = true;
    return uppercaseConfirm;
  
  } else if (uppercaseConfirm === "no" || uppercaseConfirm ==="n") {
    uppercaseConfirm = false;
    return uppercaseConfirm;
  
  } else {
    alert("Please select Yes or No");
    confirmUppercase();
  }
  return uppercaseConfirm;
}

// Function used to confirm option to include numbers in password generator
function confirmNumbers() {
  numberConfirm = prompt ("Would you like to include numbers? \n(Yes or No)");
  numberConfirm = numberConfirm.toLowerCase();

  if (numberConfirm === null || numberConfirm === "") {
    alert ("Please select Yes or No");
    confirmNumbers();

  } else if (numberConfirm === "yes" || numberConfirm ==="y") {
    numberConfirm = true;
    return numberConfirm;

  } else if (numberConfirm === "no" || numberConfirm ==="n") {
    numberConfirm = false;
    return numberConfirm;
  
  } else {
    alert("Please select Yes or No");
    confirmNumbers()
  }
  return numberConfirm;
}

// Function used to confirm option to include special characters in password generator
function confirmSpecial() {
  specialConfirm = prompt ("Would you like to include special characters? \n(Yes or No)");
  specialConfirm = specialConfirm.toLowerCase();

  if (specialConfirm === null || specialConfirm === "") {
    alert ("Please select Yes or No");
    confirmSpecial();

  } else if (specialConfirm === "yes" || specialConfirm ==="y") {
    specialConfirm = true;
    return specialConfirm;

  } else if (specialConfrim === "no" || specialConfirm ==="n") {
    specialConfirm = false;
    return specialConfirm;

  } else {
    alert("Please select Yes or No")
    confirmSpecial()
  }
  return specialConfirm;
}

// Used to combine input from the previous selections
function generatePassword() {
findLength();
console.log(passwordLength);
confirmUppercase();
console.log(uppercaseConfirm);
confirmNumbers();
console.log(numberConfirm);
confirmSpecial();
console.log(specialConfirm);

var letters = lowercaseChar;
var password = "";
if (uppercaseConfirm && numberConfirm && specialConfirm) {
  letters += uppercaseChar + numberChar + specialChar;

} else if (uppercaseConfirm && numberConfirm) {
  letters += uppercaseChar + numberChar;

} else if (numberConfirm && specialConfirm) {
  letters += numberChar + specialChar;

} else if (uppercaseConfirm && specialConfirm) {
 letters += uppercaseChar + specialChar;
 
} else if (uppercaseConfrim) {
  letters += uppercaseChar;

} else if (numberConfirm) {
  letters += numberChar;

} else if (specialConfirm) {
  letters += specialChar;

} else {
  letters === lowercaseChar;
}

for(var i = 0; i < passwordLength; i++) {
  password += letters.charAt(Math.floor(Math.random() * letters.length));
}
return password;
}

// Write password to the #password input
function writePassword() {
  var password1 = "";
  var password1 = generatePassword();
  var passwordText = document.querySelector("#password");
  passwordText.value = password1;
}

// Add event listener to generate button
document.getElementById("generate").addEventListener ("click", function() {
  alert("Secure Password Generator");
});
generateBtn.addEventListener("click", writePassword);
