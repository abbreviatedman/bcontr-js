const bcutr = () => ({
  _passingTests: 0,
  _failingTests: 0,
  _styles: {
    testHeaders: "color: blue; font-weight: bold; font-size: 1.5em;",
    passingTests: "color: green; font-weight: bold; font-size: 1.2em;",
    failingTests: "color: red; font-weight: bold; font-size: 1.2em;",
  },

  runTest(testName, invocationString, expectedValue) {
    const actualValue = eval(invocationString);
    if (actualValue === expectedValue) {
      console.log(`%c✅ ${testName}\n\n`, this._styles.passingTests);
      this._passingTests++;
    } else {
      console.log(`%c🚨 ${testName}\n\n`, this._styles.failingTests);
      console.log(
        `Called: \`${invocationString}\`
Expected: \`${expectedValue}\`,
Got: \`${actualValue}\`\n\n`
      );

      this._failingTests++;
    }
  },

  printTestHeader(testName) {
    console.groupEnd();
    console.groupCollapsed(testName);
  },

  endTests() {
    console.groupEnd();
    console.log(
      `%c\n\n${this._passingTests} tests passing\n`,
      this._styles.passingTests
    );

    console.log(
      `%c${this._failingTests} tests failing\n\n`,
      this._styles.failingTests
    );

    console.log(`%c🎉 Tests end here.\n\n`, this._styles.testHeaders);
  },
});
