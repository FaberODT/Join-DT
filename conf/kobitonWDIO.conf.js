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
    reporters: ['spec'],
    port: 443,
    maxInstances: 1,
    // beforeTest: () => {
    //   const chai = require('chai')
    //   const chaiWebdriver = require('chai-webdriverio').default
    //   chai.use(chaiWebdriver(browser))
    //   global.assert = chai.assert
    // }
  }
