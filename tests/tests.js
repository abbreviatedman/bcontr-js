const testRunner = bcontr();

testRunner.printTestHeader("removeSpaces");

testRunner.runTest(
  "removeSpaces should remove any spaces from the start of the string, test 1",
  'removeSpaces(" AnnieCannons")',
  "AnnieCannons"
);

testRunner.runTest(
  "removeSpaces should remove any spaces from the start of the string, test 2",
  'removeSpaces("  AnnieCannons")',
  "AnnieCannons"
);

testRunner.runTest(
  "removeSpaces should remove any spaces from the end of the string, test 1",
  'removeSpaces("AnnieCannons ")',
  "AnnieCannons"
);

testRunner.runTest(
  "removeSpaces should remove any spaces from the end of the string, test 2",
  'removeSpaces("AnnieCannons  ")',
  "AnnieCannons"
);

testRunner.runTest(
  "removeSpaces should remove any spaces from the middle of the string, test 1",
  'removeSpaces("Annie Cannons")',
  "AnnieCannons"
);

testRunner.runTest(
  "removeSpaces should remove any spaces from the middle of the string, test 2",
  'removeSpaces("Annie  Cannons")',
  "AnnieCannons"
);

testRunner.printTestHeader("getMeasurement");

testRunner.runTest(
  "getMeasurement should return the measurement type, test 1",
  'getMeasurement("30C")',
  "C"
);

testRunner.runTest(
  "getMeasurement should return the measurement type, test 2",
  'getMeasurement("60F")',
  "F"
);

testRunner.runTest(
  "getMeasurement should return the measurement type from a string with a negative number in it, test 1",
  'getMeasurement("-30C")',
  "C"
);

testRunner.runTest(
  "getMeasurement should return the measurement type from a string with a negative number in it, test 2",
  'getMeasurement("-60F")',
  "F"
);

testRunner.runTest(
  "getMeasurement should return the measurement type from a string with a single digit number in it, test 1",
  'getMeasurement("3C")',
  "C"
);

testRunner.runTest(
  "getMeasurement should return the measurement type from a string with a single digit number in it, test 2",
  'getMeasurement("6F")',
  "F"
);

testRunner.runTest(
  "getMeasurement should return the measurement type from a string with a triple digit number in it, test 1",
  'getMeasurement("300C")',
  "C"
);

testRunner.runTest(
  "getMeasurement should return the measurement type from a string with a triple digit number in it, test 2",
  'getMeasurement("600F")',
  "F"
);

testRunner.printTestHeader("getDegrees");

// getDegrees should convert the string to a number
console.assert(
  typeof getDegrees("30C") === "number" &&
    typeof getDegrees("40F") === "number",
  "getDegrees should convert the string to a number"
);

console.assert(
  getDegrees("30C") === 30 && getDegrees("50F") === 50,
  "getDegrees should return the number of degrees"
);

// getDegrees should handle single digit numbers
console.assert(
  getDegrees("3C") === 3 && getDegrees("5F") === 5,
  "getDegrees should handle single digit numbers"
);

// getDegrees should handle triple digit numbers
console.assert(
  getDegrees("300C") === 300 && getDegrees("500F") === 500,
  "getDegrees should handle triple digit numbers"
);

// getDegrees should handle negative numbers
testRunner.runTest(
  "getDegrees should handle negative numbers, test 1",
  'getDegrees("-30F")',
  -30
);

testRunner.runTest(
  "getDegrees should handle negative numbers, test 2",
  'getDegrees("-10C")',
  -10
);

testRunner.endTests();
