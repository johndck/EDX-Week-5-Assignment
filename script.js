// Array of special characters to be included in password
var specialCharacters = [
  "@",
  "%",
  "+",
  "\\",
  "/",
  "'",
  "!",
  "#",
  "$",
  "^",
  "?",
  ":",
  ",",
  ")",
  "(",
  "}",
  "{",
  "]",
  "[",
  "~",
  "-",
  "_",
  ".",
];

// Array of numeric characters to be included in password
var numericCharacters = ["0", "1", "2", "3", "4", "5", "6", "7", "8", "9"];

// Array of lowercase characters to be included in password
var lowerCasedCharacters = [
  "a",
  "b",
  "c",
  "d",
  "e",
  "f",
  "g",
  "h",
  "i",
  "j",
  "k",
  "l",
  "m",
  "n",
  "o",
  "p",
  "q",
  "r",
  "s",
  "t",
  "u",
  "v",
  "w",
  "x",
  "y",
  "z",
];

// Array of uppercase characters to be included in password
var upperCasedCharacters = [
  "A",
  "B",
  "C",
  "D",
  "E",
  "F",
  "G",
  "H",
  "I",
  "J",
  "K",
  "L",
  "M",
  "N",
  "O",
  "P",
  "Q",
  "R",
  "S",
  "T",
  "U",
  "V",
  "W",
  "X",
  "Y",
  "Z",
];

// Function to prompt user for password options
// Coded by John Dick

let getPasswordOptions = () => {
  // This function collects and captures the users requirements.
  // They must specify at least 1 requirement for the tool to generate a password.

  // As per the requirements this code captures the users requirement for the password.

  // If the user adds text, it won't proceed.
  // If the user leaves it blank it won't proceed.
  // If the user asks for less than 8 char or more than 128 it won't proceed

  let passwordReqs = {};
  let numCharacters = "";
  do {
    numCharacters = parseInt(
      prompt(
        "How many characters in your password? You have to have between 8 & 128..."
      )
    );
  } while (
    numCharacters === "" ||
    !numCharacters ||
    numCharacters < 8 ||
    numCharacters > 128
  );

  // set the password length based on what the user entered
  passwordReqs.passwordlength = numCharacters;
  // now gather the requirements

  do {
    passwordReqs.specialChar = confirm("Do you want special characters?");
    passwordReqs.numberChar = confirm("Do you want numbers?");
    passwordReqs.upperChar = confirm("Do you want upperCase?");
    passwordReqs.lowerChar = confirm("Do you want lowerCase?");
  } while (
    !passwordReqs.specialChar &&
    !passwordReqs.numberChar &&
    !passwordReqs.upperChar &&
    !passwordReqs.lowerChar
  );

  return passwordReqs;
};

let getRandom = (arr) => {
  return arr[Math.floor(Math.random() * arr.length)];
};

let generatePassword = () => {
  let requirements = getPasswordOptions();
  let password = "";
  let allChars = "";

  if (requirements.upperChar) {
    password += getRandom(upperCasedCharacters);
    allChars = upperCasedCharacters.join("");
  }

  if (requirements.lowerChar) {
    password += getRandom(lowerCasedCharacters);
    allChars += lowerCasedCharacters.join("");
  }

  if (requirements.specialChar) {
    password += getRandom(specialCharacters);
    allChars += specialCharacters.join("");
  }
  if (requirements.numberChar) {
    password += getRandom(numericCharacters);
    allChars += numericCharacters.join("");
  }

  while (password.length < requirements.passwordlength) {
    password += allChars[Math.floor(Math.random() * allChars.length)];
  }

  return password;
};

//let newPassword = generatePassword();
//console.log(newPassword);

// Get references to the #generate element
var generateBtn = document.querySelector("#generate");

// Write password to the #password input
function writePassword() {
  var password = generatePassword();
  var passwordText = document.querySelector("#password");

  passwordText.value = password;
}

// Add event listener to generate button
generateBtn.addEventListener("click", writePassword);
