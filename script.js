function lowerGen() {
  var alphabet = ['a', 'b', 'c', 'd', 'e', 'f', 'g', 'h', 'i', 'j', 'k', 'l', 'm', 'n', 'o', 'p', 'q', 'r', 's', 't', 'u', 'v', 'w', 'x', 'y', 'z'];
  var pick = Math.floor(Math.random() * 24);
  console.log(pick);
  return (alphabet[pick]);
}

function upperGen() {
  var up = lowerGen();
  up = up.toUpperCase();
  return (up);
}

function numGen() {
  var numbers = [0, 1, 2, 3, 4, 5, 6, 7, 8, 9];
  var pick = Math.floor(Math.random() * 10);
  return (numbers[pick]);
}

function symbolGen() {
  var symbols = ['~', '`', '!', '@', '#', '$', '%', '^', '&', '*', '(', ')', '-', '_', '+', '=', '[', ']', '{', '}', ':', ';', '"', "'", ',', '<', '.', '>', '/', '?', '|'];
  var pick = Math.floor(Math.random() * symbols.length);
  return (symbols[pick]);
}

function generatePassword() {

  var parameters = [];
  var passLength = 0;

  while (passLength === 0) {
    var passLength = prompt("Length of password", 10);
    if(passLength===0){
      
    }
  }
  
  //loop to ensure at least one parameter is selected
  do {
    //input wanted parametes for password
    var choice = {
      "lower": confirm("Do you want lowercase?"),
      "upper": confirm("Do you want uppercase?"),
      "num": confirm("Do you want numbers?"),
      "symbol": confirm("Do you want symbols?")
    }
    //determine which functions need to be run for password generation
    if (choice.lower) {
      parameters.push(lowerGen);
    }
    if (choice.upper) {
      parameters.push(upperGen);
    }
    if (choice.num) {
      parameters.push(numGen);
    }
    if (choice.symbol) {
      parameters.push(symbolGen);
    }
    //message if none are selected
    if (parameters.length === 0) {
      alert("You must select at least one parameter for the password\nTry again!");
    }

  } while (parameters.length === 0);
  var pass = "";

  for (var i = 0; i < passLength; i++) {
    var rnd = Math.floor(Math.random() * parameters.length);
    pass = pass.concat(parameters[rnd]());
  }

  return (pass);
}
// Assignment Code
var generateBtn = document.querySelector("#generate");

// Write password to the #password input
function writePassword() {
  var password = generatePassword();
  var passwordText = document.querySelector("#password");

  passwordText.value = password;

}

// Add event listener to generate button
generateBtn.addEventListener("click", writePassword);