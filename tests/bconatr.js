class Bconatr {
  #passingTests = 0;
  #failingTests = 0;
  #currentGroupName = null;
  #currentPassingTests = 0;
  #currentFailingTests = 0;
  #styles = {
    testHeaders: "color: blue; font-weight: bold; font-size: 1.5em;",
    passingTests: "color: green; font-size: 1.2em;",
    failingTests: "color: red; font-weight: bold; font-size: 1.2em;",
  };

  prepFunction(functionName) {
    if (window[functionName] === undefined) {
      window[functionName] = function () {};
    }

    console.groupEnd();
    if (!this.#currentGroupName) {
      console.log("%c🧪 Tests start here.", this.#styles.testHeaders);
    } else {
      this.#printCurrentTestResults();
    }

    console.groupCollapsed(functionName);
    this.#currentGroupName = functionName;
    this.#currentPassingTests = 0;
    this.#currentFailingTests = 0;
  }

  runTest(testDescription, evaluationString, expectedValue) {
    const actualValue = eval(evaluationString);
    if (actualValue === expectedValue) {
      console.log(`%c✅ pass: ${testDescription}`, this.#styles.passingTests);
      this.#passingTests++;
      this.#currentPassingTests++;
    } else {
      console.log(`%c🚨 FAIL: ${testDescription}`, this.#styles.failingTests);
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

  endTests() {
    console.groupEnd();
    this.#printCurrentTestResults();
    console.log("%c\n📋 Full test breakdown:\n", this.#styles.testHeaders);

    if (this.#failingTests) {
      console.log(
        `✅ %c${this.#passingTests} tests passing`,
        this.#styles.passingTests
      );

      console.log(
        `🚨 %c${this.#failingTests} TESTS FAILING\n`,
        this.#styles.failingTests
      );
    } else {
      console.log(
        `%c\n🎉 All ${this.#passingTests} tests passing!`,
        this.#styles.passingTests
      );
    }

    console.log("%c\n🏁 Tests end here.", this.#styles.testHeaders);
  }

  #printCurrentTestResults() {
    console.log(
      `%c✅ ${this.#currentPassingTests} tests passing`,
      this.#styles.passingTests
    );

    if (this.#currentFailingTests) {
      console.log(
        `%c🚨 ${this.#currentFailingTests} TESTS FAILING\n`,
        this.#styles.failingTests
      );
    }
  }
};
