const bconatr = () => ({
  _passingTests: 0,
  _failingTests: 0,
  _curentGroupName: null,
  _currentPassingTests: 0,
  _currentFailingTests: 0,
  _styles: {
    testHeaders: "color: blue; font-weight: bold; font-size: 1.5em;",
    passingTests: "color: green; font-weight: bold; font-size: 1.2em;",
    failingTests: "color: red; font-weight: bold; font-size: 1.2em;",
  },

  prepFunction(functionName) {
    if (window[functionName] === undefined) {
      window[functionName] = function () {};
    }

    console.groupEnd();
    if (!this._currentGroupName) {
      console.log("%c🧪 Tests start here.", this._styles.testHeaders);
    } else {
      this._printCurrentTestResults();
    }

    console.groupCollapsed(functionName);
    this._currentGroupName = functionName;
    this._currentPassingTests = 0;
    this._currentFailingTests = 0;
  },

  runTest(testName, invocationString, expectedValue) {
    const actualValue = eval(invocationString);
    if (actualValue === expectedValue) {
      console.log(`%c✅ ${testName}`, this._styles.passingTests);
      this._passingTests++;
      this._currentPassingTests++;
    } else {
      console.log(`%c🚨 ${testName}`, this._styles.failingTests);
      console.log(
        `Called: \`${invocationString}\`
Expected: \`${expectedValue}\`
Got: \`${actualValue}\``
      );

      this._failingTests++;
      this._currentFailingTests++;
    }
  },

  endTests() {
    console.groupEnd();
    this._printCurrentTestResults();
    console.log("%c\n📋 Full test breakdown:\n", this._styles.testHeaders);

    if (this._failingTests) {
      console.log(
        `%c${this._passingTests} tests passing`,
        this._styles.passingTests
      );

      console.log(
        `%c${this._failingTests} tests failing\n`,
        this._styles.failingTests
      );
    } else {
      console.log(
        `%c\n🎉 All ${this._passingTests} tests passing!`,
        this._styles.passingTests
      );
    }

    console.log("%c\n🏁 Tests end here.", this._styles.testHeaders);
  },

  _printCurrentTestResults() {
    console.log(
      `%c${this._currentPassingTests} tests passing`,
      this._styles.passingTests
    );

    if (this._currentFailingTests) {
      console.log(
        `%c${this._currentFailingTests} tests failing\n`,
        this._styles.failingTests
      );
    }
  },
});
