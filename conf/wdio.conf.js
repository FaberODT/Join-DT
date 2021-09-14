const ReportAggregator = require('@rpii/wdio-html-reporter').ReportAggregator;
const HtmlReporter = require('@rpii/wdio-html-reporter').HtmlReporter;

//the following line will fetch the parameter passed at run time
global.tag = process.argv[3];

//following if-else loop has been initialized to distiguish between the platforms, 
// we are passing parametr run time and the above line will help to fetch the passed paramter and based on that
// passed paramter platform specific details will be passed in config.
let platformNameValue, platformVersionValue, appValue; 
if(tag == "android"){
  platformNameValue = 'Android';
  platformVersionValue = '10.0';
  appValue = process.cwd() + '/app/QN_08_01.apk';
}
else{
  platformNameValue = 'iOS';
  platformVersionValue = '';
  appValue = '';
}
exports.config = {
    // 4723 is the default port for Appium
    port: 4723,
  
    // How much detail should be logged. The options are:
    // 'silent', 'verbose', 'command', 'data', 'result', 'error'
    logLevel: 'error',
  
    // This defines which kind of device we want to test on, as well as how it should be
    // configured.
    capabilities: [{
      // 'Android' or 'iOS'
      platformName: platformNameValue,
  
      // The version of the Android or iOS system
      platformVersion: platformVersionValue,
  
      // For Android, Appium uses the first device it finds using "adb devices". So, this
      // string simply needs to be non-empty.
      // For iOS, this must exactly match the device name as seen in Xcode.
      deviceName: 'any',
  
      // Where to find the .apk or .ipa file to install on the device. The exact location
      // of the file may change depending on your Cordova version.
      app: appValue,
  
      // By default, Appium runs tests in the native context. By setting autoWebview to
      // true, it runs our tests in the Cordova context.
      // autoWebview: true,
  
      // fullReset: true,
  
      // When set to true, it will not show permission dialogs, but instead grant all
      // permissions automatically.
      autoGrantPermissions: true

      // chromedriverExecutable: '.chromedrivers/chromedriver.exe'
    }],

    // sync: true,
  
    // Where the files we are testing can be found.
    specs: ['./test/specs/**/login.e2e.js'],
  
    // Use the Appium plugin for Webdriver. Without this, we would need to run appium
    // separately on the command line.
    services: ['appium'],
  
    // The reporter is what formats your test results on the command line.
    /**
     * HTML report
     */
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
    ],
  
    // wdio will run your tests using the framework below. You can choose from several,
    // much like the reporters. The full list is at https://www.npmjs.com/search?q=wdio-framework
    framework: 'jasmine',
  
    // By default, Jasmine times out within 10 seconds. This is not really enough time
    // for us as it takes a while for Appium to get set up.
    jasmineNodeOpts: {
      defaultTimeoutInterval: 90000000
    },

    //
    // =====
    // Hooks
    // =====
    // WebdriverIO provides several hooks you can use to interfere with the test process in order to enhance
    // it and to build services around it. You can either apply a single function or an array of
    // methods to it. If one of them returns with a promise, WebdriverIO will wait until that promise got
    // resolved to continue.
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