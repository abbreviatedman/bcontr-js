// const userInput = prompt(
// 	"Enter a temperature in degrees Celsius or Fahrenheit"
// );

// const cleanInput = removeSpaces(userInput);
// const answer = convertTemperature(cleanInput);
// console.log(answer);

// removes spaces from anywhere in the string
function removeSpaces(userInput) {
  return userInput.replaceAll(" ", "");
}

function getMeasurement(userInput) {
  return userInput[userInput.length - 1]
}

function getDegrees(userInput) {
  return Number(userInput.slice(0, -1));
}

