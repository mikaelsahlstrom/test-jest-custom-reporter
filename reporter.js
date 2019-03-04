const { log } = console;

class Reporter {
    constructor(globalConfig, options) {
        this._globalConfig = globalConfig;
        this._options = options;
    }

    onRunStart({ numTotalTestSuites }) {
        log('');
        log('Found ' + numTotalTestSuites + ' test suites.');
    }


    onTestStart(test) {
        log('Start of test ' + test);
        //console.log('Start test ', test);
    }

    onTestResult(test, testResult, aggregatedResult) {
        const {
            numFailingTests,
            numPassingTests,
            numPendingTests,
            numTodoTests,
            testResults
        } = testResult;

        for (var i = 0; i < testResults.length; i += 1)
        {
            const {
                fullName,
                title,
                status
            } = testResults[i];

            log('Result of test ' + fullName + ': ' + status);
        }
    }

    onRunComplete(test, results) {
        const {
            numFailedTests,
            numPassedTests,
            numPendingTests,
            testResults,
            startTime
        } = results;

        log(numPassedTests + ' passing.');
        log(numFailedTests + ' failing.');
        log(numPendingTests + ' pending.');
    }
}

module.exports = Reporter;