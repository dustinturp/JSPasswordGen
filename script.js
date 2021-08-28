// Assignment Code
let generateBtn = document.querySelector("#generate");
let passEl = document.getElementById('password');
let passArray = [];

// let passEl = document.querySelector('#password');
const numbers = "123456890"
const lowerLetters = "abcdefghijklmnopqrstuvwxyz"
const upperLetters = "ABCDEFGHIJKLMONPQRSTUVWXYZ"
const specialCharacters = "!#$%&'()*+,-./:;<=>?@[\]^_`{|}~"

const passOptions = [{q:"Do you want your password to contain lowercase letters?", a:lowerLetters},
{q:"Do you want your password to contain Uppercase letters?", a:upperLetters},
{q:"Do you want your password to contain Numbers letters?", a: numbers},
{q:"Do you want your password to contain Special Characters letters?", a: specialCharacters}];

// const numbers = (() => {
//   const number_array = [...Array(10)].map((val, i) => String.fromCharCode(i + 48));
//   return number_array;
// })();
// // console.log(numbers);
// // array of lower case 
// const lowerLetters = (() => {
//   const lower = [...Array(26)].map((val, i) => String.fromCharCode(i + 97));
//   return lower;
// })();
// typeof lowerLetters;
// console.log(lowerLetters);

// array of upper case  
// const upperLetters = (() => {
//   const caps = [...Array(26)].map((val, i) => String.fromCharCode(i + 65));
//   return caps;
// })();
// console.log(upperLetters);
// array of special characters 
// reduce to manually written array. 
// const specialCharacters = " !#$%&'()*+,-./:;<=>?@[\]^_`{|}~".split('');
// array of all
//const allCharacters = [...numbers, ...lowerLetters, ...upperLetters, ...specialCharacters];

let builtArray = [];
// change all to chosen, with confirm

// let passEl = document.getElementById('#password')
//build function to merge arrays

// random pick gen

function getRandNum(passLen) {
  let randomIndex = (Math.floor(Math.random() * promptPassLength.length));
  return passLen[randomIndex];
};

function getRandomNumber(passlen) {
  return (Math.floor(Math.random() * passlen))
}


// let passLength = 0;

// update global variable with password length
const promptPassLength =  function() {
  // select length of password 8-128 characters
  const inputPassLen = prompt("Enter password length (8-128 characters) ");
  // convert input to number.
  const userPassLength = parseInt(inputPassLen);
  console.log(userPassLength);
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
  const password = generatePassword();
  passEl.innerHTML = password;
  // passEl.appendChild(pass);
};


// prompt user for password criteria wrap this in a function!!
function passCriteria() {
  for(let i = 0; i < passOptions.length; i++) {
      const selectionMade = confirm(passOptions[i].q);
      // builtArray.push(selectionMade);
        if (selectionMade === true) {
          // console.log("This is inside if statement")
          // let randomChar = getRandNum(passOptions[i].a)
          // console.log("this is random char", randomChar);
         builtArray.push(passOptions[i].a);
         //builtArray.push(selectionMade);
      }
      // console.log(builtArray);
    }
  return builtArray;
};


//test to see if we can keep pass length here 
// takes selection of password criteria and builds new array to gen pass from.
const PassBuilder = function(array, passLen) {
  console.log(array);
  let passString = array.toString();
  console.log(passString);
  passArray = passString.split('');
  console.log(passArray);
  let password = ''
  for (i = 0; i < passLen; i++) {
   password += passArray[getRandomNumber(passArray.length)];
  }
  console.log(password)

  return password;
};
// build main array pass from that* 
// need only one for loop

const generatePassword = function() {
  // array of numbers 
  const passLength = promptPassLength();
  // console.log(passLength);
  const passOption = passCriteria();
  // console.log("This is passOptions", passOption);
  const passwordString = PassBuilder(passOption, passLength);
  // console.log(passwordString);

  //passEl.innerHTML = pass;
  //passEl.appendChild()//maybe select parent element first
  // passEl.textContent = passwordString;
  // console.log(passEl);
  return passwordString;
};


  // display password on the page in the text box or alert. 

// Add event listener to generate button
generateBtn.addEventListener("click", writePassword);