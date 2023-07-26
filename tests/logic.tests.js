const testRunner = new Bconatr();

testRunner.runTests({
  removeSpaces: [
    {
      testDescription:
        "removeSpaces should remove any spaces from the start of the string, test 1",
      evaluationString: 'removeSpaces(" AnnieCannons")',
      expectedValue: "AnnieCannons",
    },
    {
      testDescription:
        "removeSpaces should remove any spaces from the start of the string, test 3",
      evaluationString: 'removeSpaces(" laura")',
      expectedValue: "laura",
    },
    {
      testDescription:
        "removeSpaces should remove any spaces from the start of the string, test 2",
      evaluationString: 'removeSpaces("  AnnieCannons")',
      expectedValue: "AnnieCannons",
    },
    {
      testDescription:
        "removeSpaces should remove any spaces from the end of the string, test 1",
      evaluationString: 'removeSpaces("AnnieCannons ")',
      expectedValue: "AnnieCannons",
    },
    {
      testDescription:
        "removeSpaces should remove any spaces from the end of the string, test 2",
      evaluationString: 'removeSpaces("AnnieCannons  ")',
      expectedValue: "AnnieCannons",
    },
    {
      testDescription:
        "removeSpaces should remove any spaces from the middle of the string, test 1",
      evaluationString: 'removeSpaces("Annie Cannons")',
      expectedValue: "AnnieCannons",
    },
    {
      testDescription:
        "removeSpaces should remove any spaces from the middle of the string, test 2",
      evaluationString: 'removeSpaces("Annie  Cannons")',
      expectedValue: "AnnieCannons",
    },
  ],

  getMeasurement: [
    {
      testDescription: "getMeasurement should return the measurement, test 1",
      evaluationString: 'getMeasurement("60F")',
      expectedValue: "F",
    },
    {
      testDescription: "getMeasurement should return the measurement, test 2",
      evaluationString: 'getMeasurement("30C")',
      expectedValue: "C",
    },
    {
      testDescription:
        "getMeasurement should return the measurement from a string with a negative number in it, test 1",
      evaluationString: 'getMeasurement("-30C")',
      expectedValue: "C",
    },
    {
      testDescription:
        "getMeasurement should return the measurement from a string with a negative number in it, test 2",
      evaluationString: 'getMeasurement("-60F")',
      expectedValue: "F",
    },
    {
      testDescription:
        "getMeasurement should return the measurement from a string with a single digit number in it, test 1",
      evaluationString: 'getMeasurement("3C")',
      expectedValue: "C",
    },
    {
      testDescription:
        "getMeasurement should return the measurement from a string with a single digit number in it, test 2",
      evaluationString: 'getMeasurement("6F")',
      expectedValue: "F",
    },
    {
      testDescription:
        "getMeasurement should return the measurement from a string with a triple digit number in it, test 1",
      evaluationString: 'getMeasurement("300C")',
      expectedValue: "C",
    },
    {
      testDescription:
        "getMeasurement should return the measurement from a string with a triple digit number in it, test 2",
      evaluationString: 'getMeasurement("600F")',
      expectedValue: "F",
    },
  ],

  getDegrees: [
    {
      testDescription: "getDegrees should return the degrees, test 1",
      evaluationString: 'getDegrees("60F")',
      expectedValue: 60,
    },
    {
      testDescription: "getDegrees should return the degrees, test 2",
      evaluationString: 'getDegrees("30C")',
      expectedValue: 30,
    },
    {
      testDescription:
        "getDegrees should return the degrees from a string with a negative number in it, test 1",
      evaluationString: 'getDegrees("-30C")',
      expectedValue: -30,
    },
    {
      testDescription:
        "getDegrees should return the degrees from a string with a negative number in it, test 2",
      evaluationString: 'getDegrees("-60F")',
      expectedValue: -60,
    },
    {
      testDescription:
        "getDegrees should return the degrees from a string with a single digit number in it, test 1",
      evaluationString: 'getDegrees("3C")',
      expectedValue: 3,
    },
    {
      testDescription:
        "getDegrees should return the degrees from a string with a single digit number in it, test 2",
      evaluationString: 'getDegrees("6F")',
      expectedValue: 6,
    },
    {
      testDescription:
        "getDegrees should return the degrees from a string with a triple digit number in it, test 1",
      evaluationString: 'getDegrees("300C")',
      expectedValue: 300,
    },
    {
      testDescription:
        "getDegrees should return the degrees from a string with a triple digit number in it, test 2",
      evaluationString: 'getDegrees("600F")',
      expectedValue: 600,
    },
  ],

  convertCToF: [
    {
      testDescription:
        "convertCToF should convert degrees to Fahrenheit, test 1",
      evaluationString: "convertCToF(20)",
      expectedValue: 68,
    },
    {
      testDescription:
        "convertCToF should convert degrees to Fahrenheit, test 2",
      evaluationString: "convertCToF(15)",
      expectedValue: 59,
    },
    {
      testDescription: "convertFToC should convert freezing points",
      evaluationString: "convertCToF(0)",
      expectedValue: 32,
    },
    {
      testDescription: "convertCToF should convert boiling points",
      evaluationString: "convertCToF(100)",
      expectedValue: 212,
    },
  ],

  convertFToC: [
    {
      testDescription: "convertFToC should convert degrees to Celsius, test 1",
      evaluationString: "convertFToC(77)",
      expectedValue: 25,
    },
    {
      testDescription: "convertFToC should convert degrees to Celsius, test 2",
      evaluationString: "convertFToC(14)",
      expectedValue: -10,
    },
    {
      testDescription: "convertFToC should convert freezing points",
      evaluationString: "convertFToC(32)",
      expectedValue: 0,
    },
    {
      testDescription: "convertFToC should convert boiling points",
      evaluationString: "convertFToC(212)",
      expectedValue: 100,
    },
  ],

  convertTemp: [
    {
      testDescription:
        "convertTemp should convert a temperature from Celsius to Fahrenheit, test 1",
      evaluationString: 'convertTemp("60C")',
      expectedValue: "140.0F",
    },
    {
      testDescription:
        "convertTemp should convert a temperature from Celsius to Fahrenheit, test 2",
      evaluationString: 'convertTemp("30C")',
      expectedValue: "86.0F",
    },
    {
      testDescription:
        "convertTemp should convert a temperature from Celsius to Fahrenheit, test 3",
      evaluationString: 'convertTemp("-60C")',
      expectedValue: "-76.0F",
    },
    {
      testDescription:
        "convertTemp should convert a temperature from Fahrenheit to Celsius, test 1",
      evaluationString: 'convertTemp("60F")',
      expectedValue: "15.6C",
    },
    {
      testDescription:
        "convertTemp should convert a temperature from Fahrenheit to Celsius, test 2",
      evaluationString: 'convertTemp("-60F")',
      expectedValue: "-51.1C",
    },
    {
      testDescription:
        "convertTemp should convert a temperature from Fahrenheit to Celsius, test 3",
      evaluationString: 'convertTemp("-30F")',
      expectedValue: "-34.4C",
    },
    {
      testDescription: "convertTemp can handle lowercase letters, test 1",
      evaluationString: 'convertTemp("60c")',
      expectedValue: "140.0F",
    },
    {
      testDescription: "convertTemp can handle lowercase letters, test 2",
      evaluationString: 'convertTemp("30c")',
      expectedValue: "86.0F",
    },
    {
      testDescription: "convertTemp calls getDegrees",
      evaluationString: "convertTemp.toString().includes('getDegrees')",
      expectedValue: true,
    },
    {
      testDescription: "convertTemp calls getMeasurement",
      evaluationString: "convertTemp.toString().includes('getMeasurement')",
      expectedValue: true,
    },
    {
      testDescription: "convertTemp calls convertCToF",
      evaluationString: "convertTemp.toString().includes('convertCToF')",
      expectedValue: true,
    },
    {
      testDescription: "convertTemp calls convertFToC",
      evaluationString: "convertTemp.toString().includes('convertFToC')",
      expectedValue: true,
    },
    {
      testDescription:
        "convertTemp returns a helpful error message if the input is invalid, test 1",
      evaluationString: 'convertTemp("60")',
      expectedValue:
        "Measurements must be in degrees Celsius or Fahrenheit--please try something like 32C or 100F",
    },
    {
      testDescription:
        "convertTemp returns a helpful error message if the input is invalid, test 2",
      evaluationString: 'convertTemp("60Fahrenheit")',
      expectedValue:
        "Measurements must be in degrees Celsius or Fahrenheit--please try something like 32C or 100F",
    },
    {
      testDescription:
        "convertTemp returns a helpful error message if the input is invalid, test 3",
      evaluationString: 'convertTemp("60X")',
      expectedValue:
        "Measurements must be in degrees Celsius or Fahrenheit--please try something like 32C or 100F",
    },
  ],
});
