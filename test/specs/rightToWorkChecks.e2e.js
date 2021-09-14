const { assert, expect } = require('chai');
const apiScreen = require('../helper/setupUser');
const loginScreen = require('../pageobjects/login.screen');
const dashboardScreen = require('../pageobjects/dashBoard.screen');
const sectionScreen = require('../pageobjects/sections.screen');
const rightToWorkChecksScreen = require('../pageobjects/rightToWorkChecks.screen');

describe('verify the right to work checks section', () => {
    // it('to verify the title of google page', () => {
    //     browser.url("https://www.google.com");
    //     expect(browser.getTitle()).to.equal("Google");
    // });

    it('to verify the details of right to work checks section', () => {
        // //following will open browser and load the url
        browser.url("https://e2e.joinpulse.co.uk");

        //following will fetch the acacium Auth Token
        apiScreen.getFaberAuthToken();
        browser.pause(5000);

        //following will fetch the JoinPulse Auth token
        apiScreen.getJoinPulseAuthToken();
        browser.pause(5000);

        // //following will perform login 
        loginScreen.loginIntoSite("fabertester+nimesh001-e2e@gmail.com","Password123");

        //following will upload file 1 
        apiScreen.uploadFile1ForRightToWorkChecksSection();
        browser.pause(15000);

        //following will upload file 2
        apiScreen.uploadFile2ForRightToWorkChecksSection();
        browser.pause(15000);

        //following will upload file 3
        apiScreen.uploadFile3ForRightToWorkChecksSection();
        browser.pause(15000);

        // //following will upload file 4
        // apiScreen.uploadFile4ForRightToWorkChecksSection();
        // browser.pause(10000);

        //following will save and continue the Right To Work Checkes section
        apiScreen.saveAndContinueRWCSection();
        browser.pause(8000);

        // //following will assert dashboard screen
        dashboardScreen.assertDashboardLbl();

        sectionScreen.clickOnMenuBtn();
        sectionScreen.clickOnProfileMenuOption();

        //following will click on Right To Work Checks option
        sectionScreen.clickOnRightToWorkChecksSection();        

        //following will assert the page header of the Section
        rightToWorkChecksScreen.assertRightToWorkChecksPageHeader();

        //following will assert the status of the section
        rightToWorkChecksScreen.assertSectionStatus();

        //following will perform logout operation
        sectionScreen.clickOnMenuBtn();
        sectionScreen.clickOnLogoutBtn();

        //following will assert login screen
        loginScreen.assertLoginScreen();
    });
});