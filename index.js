class Bconatr {
  #passingTests = 0;
  #failingTests = 0;
  #overallResults = [];

  runTests(testSuites) {
    console.groupEnd();
    this.#printHeader("🥓 Tests start here. 🥓");
    this.#overallResults = testSuites.map((testSuite) => {
      return this.#runTestSuite(testSuite);
    });

    this.#printResults();
  }

  #runTestSuite({ suiteName, tests }) {
    if (window[suiteName] === undefined) {
      window[suiteName] = function () {};
    }

    const suiteResults = {
      suiteName,
      passing: 0,
      failing: 0,
      testResults: [],
    };

    tests.forEach(({ testDescription, evaluationString, expectedValue }) => {
      const actualValue = eval(evaluationString);
      let passed = false;
      if (actualValue === expectedValue) {
        passed = true;
        suiteResults.passing++;
        this.#passingTests++;
      } else {
        suiteResults.failing++;
        this.#failingTests++;
      }

      suiteResults.testResults.push({
        testDescription,
        evaluationString,
        expectedValue,
        actualValue,
        passed,
      });
    });

    return suiteResults;
  }

  #printResults() {
    console.groupEnd();
    const current = this.#overallResults.find(({ failing }) => failing > 0);

    this.#overallResults.forEach((suiteResults) => {
      const { suiteName, passing, failing, testResults } = suiteResults;
      const printSuiteHeader = (print) => {
        print(
          `%c${suiteName}: ${passing}/${passing + failing}`,
          failing ? "color: red;" : "color: green;"
        );
      };

      printSuiteHeader(
        suiteResults === current ? console.group : console.groupCollapsed
      );

      testResults.forEach(
        ({
          testDescription,
          evaluationString,
          expectedValue,
          actualValue,
          passed,
        }) => {
          if (passed) {
            this.#printPassMessage(`✅ pass: ${testDescription}`);
          } else {
            this.#printFailMessage(`🚨 FAIL: ${testDescription}`);
            this.#printTestDetails(
              evaluationString,
              expectedValue,
              actualValue
            );
          }
        }
      );

      console.groupEnd();
    });

    this.#printHeader("\n📋 Full test breakdown:\n");
    if (this.#failingTests) {
      this.#printPassMessage(`✅ ${this.#passingTests} tests passing ✅`);
      this.#printFailMessage(`🚨 ${this.#failingTests} TESTS FAILING 🚨`);
    } else {
      this.#printPassMessage(
        `\n🎉 All ${this.#passingTests} tests passing! 🎉`
      );
    }

    this.#printHeader("\n🏁 Tests end here. 🏁");
  }

  #printTestDetails(evaluationString, expectedValue, actualValue) {
    const expectedQuoteSymbol = typeof expectedValue === "string" ? '"' : "`";
    const actualQuoteSymbol = typeof actualValue === "string" ? '"' : "`";
    console.log(
      "RAN: " +
        evaluationString +
        "\n" +
        "WANTED BACK: " +
        expectedQuoteSymbol +
        expectedValue +
        expectedQuoteSymbol +
        "\n" +
        "GOT BACK: " +
        actualQuoteSymbol +
        actualValue +
        actualQuoteSymbol
    );
  }

  #printHeader(message) {
    console.log(
      `%c${message}`,
      "color: blue; font-weight: bold; font-size: 1.5em;"
    );
  }

  #printPassMessage(message) {
    console.log(`%c${message}`, "color: green; font-size: 1.2em;");
  }

  #printFailMessage(message) {
    console.log(
      `%c${message}`,
      "color: red; font-weight: bold; font-size: 1.2em;"
    );
  }
}
