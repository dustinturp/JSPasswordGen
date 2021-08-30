
let generateBtn = document.querySelector("#generate");
let passEl = document.getElementById('password');

const numbers = "123456890"
const lowerLetters = "abcdefghijklmnopqrstuvwxyz"
const upperLetters = "ABCDEFGHIJKLMONPQRSTUVWXYZ"
const specialCharacters = "!#$%&'()*+,-./:;<=>?@[\]^_`{|}~"

// array of questions for password critera
const passOptions = [{q:"Do you want your password to contain lowercase letters?", a:lowerLetters},
{q:"Do you want your password to contain Uppercase letters?", a:upperLetters},
{q:"Do you want your password to contain Numbers letters?", a: numbers},
{q:"Do you want your password to contain Special Characters letters?", a: specialCharacters}];

//empty arrays for combining 
let builtArray = [];
let passArray = [];

//get random from array.
function getRandomNumber(passlen) {
  return (Math.floor(Math.random() * passlen))
};

// prompt user for password length
const promptPassLength =  function() {
  // select length of password 8-128 characters
  const inputPassLen = prompt("Enter password length (8-128 characters) ");
  // convert input to number.
  const userPassLength = parseInt(inputPassLen);
  //console.log(userPassLength);
  // check password length
  if (userPassLength < 8 || userPassLength > 128){
    alert("please select a valid password length (8-128)")
    return promptPassLength();
  }
  else {
    return userPassLength;
  }
};

// Write password to the #password input
function writePassword() {
  //assign password to result of passwword generator.
  const password = generatePassword();
  //update text field
  passEl.innerHTML = password;
  // passEl.appendChild(pass);
};

// prompt user for password criteria wrap this in a function!!
function passCriteria() {
  //iterate over password array
  for(let i = 0; i < passOptions.length; i++) {
      //capture selection made by the user in an array of T or F
      const selectionMade = confirm(passOptions[i].q);
        if (selectionMade === true) {
          // push the string in the answer to new array
         builtArray.push(passOptions[i].a);
      }
      // console.log(builtArray);
    }
  return builtArray;
};

// takes selection of password criteria and builds new array to gen pass from
const PassBuilder = function(array, passLen) {
  //console.log(array);
  //convert chosen critera array to a string.
  let passString = array.toString();
  //console.log(passString);
  //reconstruct string of all characters used into a new array
  passArray = passString.split('');
  //console.log(passArray);
  //password generation begins here
  let password = ''
  //loop taking password length and iterating over the new array of characters selected
  for (i = 0; i < passLen; i++) {
    // 
   password += passArray[getRandomNumber(passArray.length)];
  }
  //console.log(password)
  return password;
};
// build main array pass from that* 
// need only one for loop

//function calling other functions. 
const generatePassword = function() {
  // array of numbers 
  const passLength = promptPassLength();
  // console.log(passLength);
  const passOption = passCriteria();
  // console.log("This is passOptions", passOption);
  const passwordString = PassBuilder(passOption, passLength);
  // console.log(passwordString);
  return passwordString;
};

// Add event listener to generate button
generateBtn.addEventListener("click", writePassword);