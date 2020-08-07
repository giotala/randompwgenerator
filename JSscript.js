// Assignment Code
alert("Welcome to Password Generator! Make sure you only type with y or n or it won't generate password for you. Thank you!")
//Sourced characters from charcode

function getRandomNumber() {
  return String.fromCharCode(Math.floor(Math.random() * 10) + 48);
}
function getSymbol() {
  var symbol = "_)(*&^%$#@!;"
  return symbol[Math.floor(Math.random() * symbol.length)];
}
function getRandomBigChar() {
  return String.fromCharCode(Math.floor(Math.random() * 26) + 65);
}
function getRandomSmallChar() {
  return String.fromCharCode(Math.floor(Math.random() * 26) + 97);
}

//---------------------------------

function randomIntFromInterval(min, max) {
  return Math.floor(Math.random() * (max - min + 1) + min);
}
//-------if the subjecct is true or false--------

function yesResponse(response) {
  if (
    response !== null &&
    response.toLowerCase() !== "n" &&
    response.toLowerCase() !== "no" &&
    response !== ""
    ) {
    return true;
  } else return false;
}
//-------------------------------
//-------------------------------


function criteria() {
  var ask = prompt(
    "Would like us to help you create your password? Type y (yes) or n (no)."
  );
  var length = null;
  if (yesResponse(ask)) {
    length = prompt(
      "How long would you password be? (With a minimum of 8 and maximum of 18)."
    );
  } else {
    length = Math.floor(Math.random() * (128 - 8 + 1) + 8);
  }
  var types = {
    lowercase: prompt("Would you like to include lowercase letters? Type y (yes) or n (no)."),
    uppercase: prompt("Would you like to include uppercase letters? Type y (yes) or n (no)."),
    numeric: prompt("How about numbers? Type y (yes) or n (no)."),
    specialSymbol: prompt("Lastly, would you like symbols in it? Type y (yes) or n (no)."),
  };
  var criteria = { length: length, types: types };
  return criteria;
}
//-------------Function password generator-------------
function generatePassword() {
  var password = "";
  var validCriteria = criteria();
  const validFuncs = [];
    if (yesResponse(validCriteria.types.numeric)) {
      validFuncs.push(getRandomNumber);
  }
    if (yesResponse(validCriteria.types.specialSymbol)) {
      validFuncs.push(getSymbol);
  }
    if (yesResponse(validCriteria.types.lowercase)) {
      validFuncs.push(getRandomSmallChar);
  }
    if (yesResponse(validCriteria.types.uppercase)) {
      validFuncs.push(getRandomBigChar);
  }
    if (!validFuncs) alert("We encourage atlease one Character type!");
    else {
    for (var i = 0; i < validCriteria.length; i++) {
      var randomInt = randomIntFromInterval(0, validFuncs.length - 1);
      password = password.concat(validFuncs[randomInt]());
    }
  }
  return password;
}

//-------------Functions Button-------------

function writePassword() {
    var password = generatePassword();
    var passwordText = document.querySelector("#password");
    passwordText.value = password;
}

//------------buttons-------------------------

var generateButton = document.querySelector("#generate");
generateButton.addEventListener("click", writePassword);



