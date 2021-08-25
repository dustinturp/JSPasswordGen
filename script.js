// Assignment Code
var generateBtn = document.querySelector("#generate");

const numbers = (() => {
  const number_array = [...Array(10)].map((val, i) => String.fromCharCode(i + 48));
  return number_array;
})();
// array of lower case 
const lowerLetters = (() => {
  const lower = [...Array(26)].map((val, i) => String.fromCharCode(i + 97));
  return lower;
})();
// array of upper case  
const upperLetters = (() => {
  const caps = [...Array(26)].map((val, i) => String.fromCharCode(i + 65));
  return caps;
})();
// array of special characters 
const specialCharacters = " !#$%&'()*+,-./:;<=>?@[\]^_`{|}~".split('');
// array of all
const allCharacters = [...numbers, ...lowerLetters, ...upperLetters, ...specialCharacters];

//build function to merge arrays

// random pick gen

function getRandNum(passLen) {
  return (Math.floor(Math.random() * passLen))
}

// let passLength = 0;

// update global variable with password length
const promptPassLength =  function() {
  // select length of password 8-128 characters
  const inputPassLen = prompt("Enter password length (8-128 characters) ")
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
  // const passLength = promptPassLength();
  // console.log(passLength);
  // const passCriteriaSelection = passCriteria();
  // console.log(passCriteriaSelection);

  const password = generatePassword();
};

// prompt user for password criteria wrap this in a function!!
const passCriteria = function() {
  const promptPassCharacters = prompt("Enter Password Criteria. Lowercase, Uppercase, Numbers, special Characters, all of the above");
  if (promptPassCharacters == "" || promptPassCharacters === null) {
    alert("You need a valid answer.");
    return promptPassCharacters();
  }
  const promptPassCharLower = promptPassCharacters.toLocaleLowerCase();
  var chosenPassOption = 0;
  switch (promptPassCharLower) {
    case "1":
    case "lowercase":
    case "low":
      // function lower option
      // filler
      chosenPassOption = 1;
      break;
    case "2":
    case "upper":
    case "uppercase":
      // function to select upper array
      chosenPassOption = 2;
      break;
    case "3":
    case "numbers":
    case "num":
      // select num array
      chosenPassOption = 3;
      break;
    case "4":
    case "special":
    case "special characters":
      // select special and lower letters
      chosenPassOption = 4;
      break;
    case "all":
    case "5":
    case "everything":
    case "all of the above":
      // select to choose from all arrays
      // add option 6 for upper and lower
      chosenPassOption = 5;
      break;
    default: 
      alert("You did not pick a valid option");
      passCriteria();
      break;
  }
  console.log(chosenPassOption);
  return chosenPassOption;
};

//test to see if we can keep pass length here 
// takes selection of password criteria and builds new array to gen pass from.
const PassBuilder = function(num, num2) {
  console.log(num,num2)
  if (num2 == 1) {
    for ( let i = 0; i < num; i++) {
      password += lowerLetters[getRandNum(lowerLetters.length)];
    }
    console.log(password);
  }
  else if (num2 == 2) {
    for ( let i = 0; i < num; i++) {
     password += upperLetters[getRandNum(upperLetters.length)];
     
    }
  }
  else if (num2 == 3) {
    for ( let i = 0; i < num; i++) {
      password += numbers[getRandNum(numbers.length)];
      
    }
  }
  else if (num2 == 4) {
    for ( let i = 0; i < num; i++) {
      password += specialCharacters[getRandNum(specialCharacters.length)];
    }
  }
  else if (num2 == 5) {
    for ( let i = 0; i < num; i++) {
      password += allCharacters[getRandNum(allCharacters.length)];
    }
  }
  console.log(password)
  return password;
};


const generatePassword = function() {
  // array of numbers 
  

  const passLength = promptPassLength();
  console.log(passLength);

  const passOption = passCriteria();
  console.log(passOption);
  const passwordString = PassBuilder(passLength, passOption);
  console.log(passwordString);
  return passwordString;

  // build new array from chosen option.
  for ( let i = 0; i < passLength; i++) {
    // select number of characters from new combined array if all selected arrays.

  }
  //built password returned
};

  var passwordText = document.querySelector("#password");
  passwordText.value = password;

  // display password on the page in the text box or alert. 

// Add event listener to generate button
// added to HTML on click
generateBtn.addEventListener("click", writePassword);