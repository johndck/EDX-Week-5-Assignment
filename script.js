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

let getPasswordOptions = () => {
  let passwordReqs = {};
  let numCharacters = "";
  while (numCharacters === "" || !numCharacters) {
    numCharacters = parseInt(
      prompt("How many characters in your password? Has to be >5 & <128")
    );
    while (numCharacters < 8 || numCharacters > 128) {
      alert("Your password must have more than 8 or less than 128 characters");
      numCharacters = parseInt(
        prompt("How many characters in your password? Has to be >5 & <128")
      );
    }
  }
  // set the password length
  passwordReqs.passwordlength = numCharacters;
  // now gather the requirements
  // add in while loop to make sure at least 1 is set to true

  do {
    let special = confirm("Do you want special characters?");
    if (special) {
      passwordReqs.specialChar = true;
    } else {
      passwordReqs.specialChar = false;
    }
    // now gather the numbers
    let numberChar = confirm("Do you want numbers?");
    if (numberChar) {
      passwordReqs.numberChar = true;
    } else {
      passwordReqs.numberChar = false;
    }
    // now gather the uppercase
    let upperChar = confirm("Do you want upperCase?");
    if (upperChar) {
      passwordReqs.upperChar = true;
    } else {
      passwordReqs.upperChar = false;
    }
    // now gather the lowercase
    let lowerChar = confirm("Do you want lowerCase?");
    if (lowerChar) {
      passwordReqs.lowerChar = true;
    } else {
      passwordReqs.lowerChar = false;
    }
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
