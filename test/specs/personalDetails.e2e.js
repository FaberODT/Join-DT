const { assert, expect } = require('chai');
const apiScreen = require('../helper/setupUser');
const loginScreen = require('../pageobjects/login.screen');
const dashboardScreen = require('../pageobjects/dashBoard.screen');
const sectionScreen = require('../pageobjects/sections.screen');
const personalDetailScreen = require('../pageobjects/personalDetails.screen');

describe('verify the google browser page', () => {
    // it('to verify the title of google page', () => {
    //     browser.url("https://www.google.com");
    //     expect(browser.getTitle()).to.equal("Google");
    // });

    it('Verify details of Peronal Details section', () => {
        // //following will clear the worker's profile
        // apiScreen.deleteUserData();
        // browser.pause(2000);
        // //following will import worker's profile
        // apiScreen.getFaberAuthToken();
        // browser.pause(2000);
        // apiScreen.getJoinPulseAuthToken();
        // browser.pause(2000);
        // apiScreen.updateUserInformation();
        // browser.pause(2000);
        console.log("Worker's profile imported");

        // //following will open browser and load the url
        browser.url("https://e2e.joinpulse.co.uk");

        // //following will perform login 
        loginScreen.loginIntoSite("fabertester+nimesh001-e2e@gmail.com","Password123");

        // //following will assert dashboard screen
        dashboardScreen.assertDashboardLbl();

        sectionScreen.clickOnMenuBtn();
        sectionScreen.clickOnProfileMenuOption();

        //following will click on Peronal Details section 
        sectionScreen.clickOnPersonalDetailsSection();
        browser.pause(5000);

        //following assert that user is on Personal Details page
        personalDetailScreen.assertPersonaDetailsPageLbl();

        //following will assert the status of the Personal Details page
        personalDetailScreen.assertPersonaDetailsPageStatus();

        //following will assert the Personal Details
        personalDetailScreen.assertPersonalDetails();

        //following will perform logout operation
        sectionScreen.clickOnMenuBtn();
        sectionScreen.clickOnLogoutBtn();

        //following will assert login screen
        loginScreen.assertLoginScreen();
    });
});