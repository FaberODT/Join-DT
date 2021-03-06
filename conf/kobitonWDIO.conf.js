const ReportAggregator = require('@rpii/wdio-html-reporter').ReportAggregator;
const HtmlReporter = require('@rpii/wdio-html-reporter').HtmlReporter;

require('dotenv').config();
exports.config = {
    user: 'nimeshbhatt',
    key: '750cc62f-43b8-48a1-b237-aa12487c9255',
    runner: 'local',
    framework: 'jasmine',
    jasmineNodeOpts: {
        defaultTimeoutInterval: 2147483646
    },
    sync: false,
    logLevel: 'silent',
    deprecationWarnings: true,
    bail: 0,
    baseUrl: 'https://portal.kobiton.com',
    hostname: 'api.kobiton.com',
    waitforTimeout: 10000,
    connectionRetryTimeout: 90000,
    connectionRetryCount: 3,
    reporters: ['spec',
        [HtmlReporter, {
            debug: true,
            outputDir: './reports/html-reports/',
            filename: 'report.html',
            reportTitle: 'Test Report Title',
            
            //to show the report in a browser when done
            showInBrowser: true,

            //to turn on screenshots after every test
            useOnAfterCommandForScreenshot: false,
        }]
        // ,
        // [video, {
        //     saveAllVideos: false,       // If true, also saves videos for successful test cases
        //     videoSlowdownMultiplier: 3, // Higher to get slower videos, lower for faster videos [Value 1-100]
        // }]
    ],
    port: 443,
    maxInstances: 1,
    // beforeTest: () => {
    //   const chai = require('chai')
    //   const chaiWebdriver = require('chai-webdriverio').default
    //   chai.use(chaiWebdriver(browser))
    //   global.assert = chai.assert
    // }
    /**
     * Gets executed once before all workers get launched.
     * @param {Object} config wdio configuration object
     * @param {Array.<Object>} capabilities list of capabilities details
     */
    onPrepare: function (config, capabilities) {
        let reportAggregator = new ReportAggregator({
            outputDir: './reports/html-reports/',
            filename: 'master-report.html',
            reportTitle: 'Master Report',
            
            // to use the template override option, can point to your own file in the test project:
            // templateFilename: path.resolve(__dirname, '../src/wdio-html-reporter-alt-template.hbs')
        });
        reportAggregator.clean() ;

        global.reportAggregator = reportAggregator;

        global.trainingCertificates;

        global.dbsCertificates;

        global.incorporationCertiKin;

        global.businessCertiKin;

        global.rightToWorkChecks1;

        global.rightToWorkChecks2;

        global.rightToWorkChecks3;

        global.rightToWorkChecks4;

        global.professionalDetail;
        
        global.professionalQualification;

        global.professionalInsurance;

        global.professionalDetailCV;

        global.professionalDetailQualiCerti;

        global.professionalDetailInsurance;

    },

    /**
     * Function to be executed after a test (in Mocha/Jasmine).
     */
    afterTest: function(test, context, { error, result, duration, passed, retries }) {
        const path = require('path');
        const moment = require('moment');

        // if test passed, ignore, else take and save screenshot.
        if (test.passed) {
            return;
        }
        const timestamp = moment().format('YYYYMMDD-HHmmss.SSS');
        const filepath = path.join('reports/html-reports/screenshots/', timestamp + '.png');
        browser.saveScreenshot(filepath);
        process.emit('test:screenshot', filepath);
    },

    /**
     * Gets executed after all workers got shut down and the process is about to exit. An error
     * thrown in the onComplete hook will result in the test run failing.
     * @param {Object} exitCode 0 - success, 1 - fail
     * @param {Object} config wdio configuration object
     * @param {Array.<Object>} capabilities list of capabilities details
     * @param {<Object>} results object containing test results
     */
    onComplete: function(exitCode, config, capabilities, results) {
        (async () => {
            await global.reportAggregator.createReport( {
                config: config,
                capabilities: capabilities,
                results : results
            });
        })();
    },
  }
