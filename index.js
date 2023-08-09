class Bconatr {
  #passingTests = 0;
  #failingTests = 0;
  #currentPassingTests = 0;
  #currentFailingTests = 0;
  #styles = {
    header: "color: blue; font-weight: bold; font-size: 1.5em;",
    passing: "color: green; font-size: 1.2em;",
    failing: "color: red; font-weight: bold; font-size: 1.2em;",
  };

  runTests(testSuites) {
    console.groupEnd();
    this.#printHeader("🧪 Tests start here.");
    Object.keys(testSuites).forEach((testSuiteName) =>
      this.#runTestSuite(testSuites, testSuiteName)
    );

    this.#printHeader("\n📋 Full test breakdown:\n");
    if (this.#failingTests) {
      this.#printPassMessage(`✅ ${this.#passingTests} tests passing`);
      this.#printFailMessage(`🚨 ${this.#failingTests} TESTS FAILING\n`);
    } else {
      this.#printPassMessage(`\n🎉 All ${this.#passingTests} tests passing!`);
    }

    this.#printHeader("\n🏁 Tests end here.");
  }

  #runTestSuite(testSuites, testSuiteName) {
    if (window[testSuiteName] === undefined) {
      window[testSuiteName] = function () {};
    }

    console.groupCollapsed(testSuiteName);
    this.#currentPassingTests = 0;
    this.#currentFailingTests = 0;
    const { tests } = testSuites[testSuiteName];
    tests.forEach((test) => this.#runTest(test));
    console.groupEnd();
    this.#printCurrentTestResults();
  }

  #runTest({ testDescription, evaluationString, expectedValue }) {
    const actualValue = eval(evaluationString);
    if (actualValue === expectedValue) {
      this.#printPassMessage(`✅ pass: ${testDescription}`);
      this.#passingTests++;
      this.#currentPassingTests++;
    } else {
      this.#printFailMessage(`🚨 FAIL: ${testDescription}`);
      console.log(
        `RAN: \`${evaluationString}\`
WANTED BACK: ${
          typeof expectedValue === "string"
            ? `"${expectedValue}"`
            : `\`${expectedValue}\``
        }
GOT: ${
          typeof actualValue === "string"
            ? `"${actualValue}"`
            : `\`${actualValue}\``
        }`
      );

      this.#failingTests++;
      this.#currentFailingTests++;
    }
  }

  #printCurrentTestResults() {
    this.#printPassMessage(`✅ ${this.#currentPassingTests} tests passing`);
    if (this.#currentFailingTests) {
      this.#printFailMessage(`🚨 ${this.#currentFailingTests} TESTS FAILING\n`);
    }
  }

  #printHeader(message) {
    console.log(`%c${message}`, this.#styles.header);
  }

  #printPassMessage(message) {
    console.log(`%c${message}`, this.#styles.passing);
  }

  #printFailMessage(message) {
    console.log(`%c${message}`, this.#styles.failing);
  }
}
