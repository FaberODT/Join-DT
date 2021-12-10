const expect = require("chai").expect;
const DashboardScreen = require('../pageobjects/dashBoard.screen');
const LoginScreen = require('../pageobjects/login.screen');
global.tag = process.argv[3];
/**
* object containing all methods, selectors and functionality of login screen
*/
class interviewScreen {
    
    get pageHeaderLbl () { return $('//h1[@id="pageTitle"]')}

    get interviewPageStatus () { return $('////div[@id="statusMessageHeader"]/span')}

    assertInterviewPageLbl () {
        this.pageHeaderLbl.waitForExist({timeout: 60000});
        expect(this.pageHeaderLbl.getText()).to.equal("1. Personal details");
    }

    assertInterviewPageStatus () {
        this.interviewPageStatus.waitForExist({timeout: 60000});
        expect(this.interviewPageStatus.getText()).to.equal("Complete");
    }
}

module.exports = new interviewScreen();