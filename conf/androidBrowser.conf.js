const {config} = require('./mobileBrowserWDIO.conf');
const androidInfo = require('./android.info');

// appium capabilities
config.capabilities = [
    {
        platformName: 'Android',
        browserName: 'chrome',
        // appPackage: 'com.android.chrome',
        // automationName: 'uiautomator2',
        // maxInstances: 1,
        deviceName: 'any',
        platformVersion: '10.0',
        autoGrantPermissions: true,
        noReset: false,
        chromedriverExecutable: process.cwd() + '/chromedrivers/chromedriver.exe'
    }
];

config.specs = [
    './test/specs/**/paymentOptions.e2e.js'
];

// config.suites = {
//     nonAPI: [
//         './test/specs/**/generalNurseDetails.e2e.js',
//         './test/specs/**/gradeAndEmployer.e2e.js',
//         './test/specs/**/nmcCheck.e2e.js',
//         './test/specs/**/personalDetails.e2e.js',
//         './test/specs/**/reference.e2e.js'
//     ],
//     withAPI: [
//         './test/specs/**/dbsDetails.e2e.js',
//         './test/specs/**/rightToWorkChecks.e2e.js',
//         './test/specs/**/taxAndNextOfKin.e2e.js',
//         './test/specs/**/training.e2e.js'
//     ]
// };

exports.config = config;