const userInput = prompt(
  "Enter a temperature in degrees Celsius or Fahrenheit"
);

const cleanInput = removeSpaces(userInput);
const answer = convertTemp(cleanInput);
console.log(`${cleanInput} converted is:\n\n${answer} degrees.`);
