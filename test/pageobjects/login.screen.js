const expect = require("chai").expect;
const DashboardScreen = require('../pageobjects/dashBoard.screen');
const LoginScreen = require('../pageobjects/login.screen');
global.tag = process.argv[3];
/**
* object containing all methods, selectors and functionality of login screen
*/
class loginScreen {
    
    // get emailTxtBox () { return $('/hierarchy/android.widget.FrameLayout/android.widget.LinearLayout/android.widget.FrameLayout/android.widget.FrameLayout/android.widget.FrameLayout/android.view.ViewGroup/android.widget.FrameLayout[1]/android.widget.FrameLayout[2]/android.webkit.WebView/android.view.View/android.view.View/android.view.View/android.view.View/android.view.View/android.view.View/android.view.View/android.view.View[2]/android.view.View/android.view.View/android.view.View[2]/android.view.View/android.widget.EditText')}

    // get emailTxtBox () { return $('//android.widget.EditText[contains(@password, "false")]')}
    get emailTxtBox () { return $('//input[@name="username"]')}

    // get passwordTxtBox () { return $('/hierarchy/android.widget.FrameLayout/android.widget.LinearLayout/android.widget.FrameLayout/android.widget.FrameLayout/android.widget.FrameLayout/android.view.ViewGroup/android.widget.FrameLayout[1]/android.widget.FrameLayout[2]/android.webkit.WebView/android.view.View/android.view.View/android.view.View/android.view.View/android.view.View/android.view.View/android.view.View/android.view.View[2]/android.view.View/android.view.View/android.view.View[3]/android.view.View/android.view.View/android.widget.EditText')}

    // get passwordTxtBox () { return $('//android.widget.EditText[contains(@password, "true")]')}

    get passwordTxtBox () { return $('//input[@name="password"]')}

    get loginBtn () { return $('//button[@name="action"]')}


    enterEmailValue (emailId) {
        browser.pause(5000);
        console.log("current context is: " + browser.getContexts());
        // this.emailTxtBox.waitForExist({timeout: 60000});
        this.emailTxtBox.click();
        browser.pause(1000);
        this.emailTxtBox.setValue(emailId);
    }

    enterPasswordValue (password) {
        this.passwordTxtBox.waitForExist({timeout: 60000});
        this.passwordTxtBox.click();
        browser.pause(1000);
        this.passwordTxtBox.setValue(password);
    }

    clickOnLoginBtn () {
        this.loginBtn.waitForExist({timeout: 60000});
        this.loginBtn.click();
    }

    loginIntoSite(emailId, password) {
        this.enterEmailValue(emailId);
        this.enterPasswordValue(password);
        this.clickOnLoginBtn();
    }

    assertLoginScreen () {
        this.loginBtn.waitForExist({timeout: 60000});
        expect(this.loginBtn.isDisplayed()).to.equal(true);
    }
}

module.exports = new loginScreen();


// var loginScreen = function () {
//     // var loginBtn = browser.$('//android.widget.Button[contains(@text, "Let\'s Get Booking")]');    // var loginBtn = $("/hierarchy/android.widget.FrameLayout/android.widget.LinearLayout/android.widget.FrameLayout/android.webkit.WebView/android.webkit.WebView/android.view.View/android.view.View/android.view.View[2]/android.app.Dialog/android.view.View/android.view.View/android.view.View[2]/android.view.View/android.view.View[1]/android.view.View[7]/android.view.View[3]/android.view.View[2]/android.widget.Button");

//     var userNameTxtBox = browser.$('/hierarchy/android.widget.FrameLayout/android.widget.LinearLayout/android.widget.FrameLayout/android.webkit.WebView/android.webkit.WebView/android.view.View/android.view.View/android.view.View/android.view.View/android.view.View[2]/android.view.View[2]/android.view.View[3]/android.view.View/android.view.View[3]/android.view.View[1]/android.view.View[1]/android.view.View[1]/android.view.View/android.widget.EditText');

//     var passwordTxtBox = browser.$('/hierarchy/android.widget.FrameLayout/android.widget.LinearLayout/android.widget.FrameLayout/android.webkit.WebView/android.webkit.WebView/android.view.View/android.view.View/android.view.View/android.view.View/android.view.View[2]/android.view.View[2]/android.view.View[3]/android.view.View/android.view.View[4]/android.view.View[1]/android.view.View[1]/android.view.View[1]/android.view.View/android.widget.EditText');

//     var signInBtn = browser.$('//android.widget.Button[contains(@text, "Log In arrow forward circle outline")]');

//     this.clickOnLoginBtn = () => {
//         var loginBtn = browser.$('//android.widget.Button[contains(@text, "Let\'s Get Booking")]');
//         loginBtn.click();
//         // browser.$('//android.widget.Button[contains(@text, "Let\'s Get Booking")]').click();
//     };

//     this.enterUserName = (username) => {
//          userNameTxtBox.setValue(username);
//     };

//     this.enterPassword = (password) => {
//          passwordTxtBox.setValue(password);
//     };

//     this.clickOnSignInBtn = () => {
//          signInBtn.click();
//     };

//     this.loginIntoApp = (username, password) => {
//         this.clickOnLoginBtn();
//         browser.pause(10000);
//         this.enterUserName(username);
//         this.enterPassword(password);
//         this.clickOnSignInBtn();
//     };

// }
// module.exports = new loginScreen();