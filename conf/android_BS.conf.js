require('dotenv').config();

exports.config = {

  user: process.env.BS_USER,
  key: process.env.BS_KEY,

  updateJob: false,

  specs: ['./test/specs/**/paymentOptions.e2e.js'],

  exclude: [],
  maxInstances: 10,

  capabilities: [{
    'browser': 'chrome',
    'device': 'Samsung Galaxy S21',
    'os_version': '11.0',
    'browserName': 'android',
    'realMobile': 'true'
  }],

  logLevel: 'warn',
  coloredLogs: true,
  screenshotPath: './errorShots/',
  baseUrl: '',
  waitforTimeout: 10000,
  connectionRetryTimeout: 90000,
  connectionRetryCount: 3,
  host: 'hub.browserstack.com',

  before: function () {
    var chai = require('chai');
    global.expect = chai.expect;
    chai.Should();
  },

  framework: 'jasmine',
  // By default, Jasmine times out within 10 seconds. This is not really enough time
  // for us as it takes a while for Appium to get set up.
  jasmineNodeOpts: {
    defaultTimeoutInterval: 900000
  },

  // Code to mark the status of test on BrowserStack based on the assertion status
  afterTest: function (test, context, { error, result, duration, passed, retries }) {
    if(passed) {
      browser.executeScript('browserstack_executor: {"action": "setSessionStatus", "arguments": {"status":"passed","reason": "Assertions passed"}}');
    } else {
      browser.executeScript('browserstack_executor: {"action": "setSessionStatus", "arguments": {"status":"failed","reason": "At least 1 assertion failed"}}');
    }
  }
}

// Code to support common capabilities
exports.config.capabilities.forEach(function(caps, index){
  for(var i in exports.config.commonCapabilities) caps[i] = caps[i] || exports.config.commonCapabilities[i];
  exports.config.capabilities[index] = { ...caps, ...caps['browser'] && { browserName: caps['browser'] } };
});