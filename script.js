function lowerGen() {
  var alphabet = ['a', 'b', 'c', 'd', 'e', 'f', 'g', 'h', 'i', 'j', 'k', 'l', 'm', 'n', 'o', 'p', 'q', 'r', 's', 't', 'u', 'v', 'w', 'x', 'y', 'z'];
  var pick = Math.floor(Math.random() * 24);
  return (alphabet[pick]);
}

function upperGen() {
  var upper = lowerGen();
  upper = upper.toUpperCase();
  return (upper);
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
  var passLength = document.getElementById("passLength").value;
  //length check 8-128
  if (passLength >= 8 && passLength <= 128) {
    var parameters = [];
    //adds functions to array based on user choice
    if (document.getElementById("lower").checked) {
      parameters.push(lowerGen);
    }
    if (document.getElementById("upper").checked) {
      parameters.push(upperGen);
    }
    if (document.getElementById("num").checked) {
      parameters.push(numGen);
    }
    if (document.getElementById("symbol").checked) {
      parameters.push(symbolGen);
    }
    //message if none are selected
    if (parameters.length === 0) {
      return ("You must select at least one parameter for the password\nTry again!");
    }
  }
  //message if length is out of bounds
  else {
    return ("Choose a valid length");
  }

  var pass = "";
  //displays the copy button
  copyBtn.style.display = "inline-block";
  //randomly chooses which function will be run for each character of password
  for (var i = 0; i < passLength; i++) {
    var rnd = Math.floor(Math.random() * parameters.length);
    pass = pass.concat(parameters[rnd]());
  }
  console.log(pass);
  return (pass);
}

// Assignment Code
var generateBtn = document.querySelector("#generate");
var copyBtn = document.getElementById("copyBtn");


// Write password to the #password input
function writePassword() {
  var password = generatePassword();
  var passwordText = document.querySelector("#password");
  passwordText.value = password;
  
  
}
//copy to clipboard button
function copyButton() {
  document.querySelector("#password").select();
  document.execCommand('copy');
  alert("Copied password to clipboard");
}

// Add event listener to generate button for mouse click and enter key
generateBtn.addEventListener("click", writePassword);
document.addEventListener("keypress", function(event){
  if(event.which === 13){
    generateBtn.click();
  }
});
//event listener for copy button
copyBtn.addEventListener("click", copyButton);