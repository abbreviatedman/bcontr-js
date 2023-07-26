function removeSpaces(userInput) {
  return userInput.replaceAll(" ", "");
}

function getMeasurement(userInput) {
  return userInput[userInput.length - 1];
}

function getDegrees(userInput) {
  return Number(userInput.slice(0, -1));
}

function convertCToF(degreesC) {
  return (degreesC / 5) * 9 + 32;
}

function convertFToC(degreesF) {
  return ((degreesF - 32) / 9) * 5;
}

function convertTemp(userInput) {
  const measurement = getMeasurement(userInput).toLowerCase();
  const degrees = getDegrees(userInput);
  if (measurement === "c") {
    return convertCToF(degrees).toFixed(1) + "F"
  } else if (measurement === "f") {
    return convertFToC(degrees).toFixed(1) + "C"
  } else {
    return "Measurements must be in degrees Celsius or Fahrenheit--please try something like 32C or 100F";
  }
}
