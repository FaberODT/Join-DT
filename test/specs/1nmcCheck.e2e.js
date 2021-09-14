const { assert, expect } = require('chai');
const apiScreen = require('../helper/setupUser');
const loginScreen = require('../pageobjects/login.screen');
const dashboardScreen = require('../pageobjects/dashBoard.screen');
const nmcScreen = require('../pageobjects/nmc.screen');
const sectionScreen = require('../pageobjects/sections.screen');
const trainingScreen = require('../pageobjects/training.screen');

describe('verify the google browser page', () => {
    // it('to verify the title of google page', () => {
    //     browser.url("https://www.google.com");
    //     expect(browser.getTitle()).to.equal("Google");
    // });

    it('Update NMC section & check section status', () => {
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

        // //following will click on NMC Section 
        // dashboardScreen.clickOnNMCCheckSection();

        //following will click on Menu button (Hamburger menu)
        sectionScreen.clickOnMenuBtn();

        //following will click on Profile menu option 
        sectionScreen.clickOnProfileMenuOption();

        //following will click on NMC Section
        sectionScreen.clickOnNMCSection();
        
        //following will assert that user is on NMC Checking page
        nmcScreen.assertNMCCheckPageHeader();

        //following will enter value into NMC Pin text box
        nmcScreen.enterNMCPinValue();

        //following will click on Save and Continue button
        nmcScreen.clickOnSaveAndContinueBtn();
        browser.pause(5000);

        sectionScreen.clickOnMenuBtn();
        sectionScreen.clickOnProfileMenuOption();

        //following will change the Section back to NMC Checking
        sectionScreen.clickOnNMCSection();

        browser.pause(5000);
        //following will assert that user is back on NMC Checking page
        nmcScreen.assertNMCCheckPageHeader();

        //following will assert status of the NMC Checking page
        nmcScreen.assertNMCSectionStatus();

        // //following will assert NMC section message
        // nmcScreen.assertNMCMessage();

        //following will perform logout operation
        sectionScreen.clickOnMenuBtn();
        sectionScreen.clickOnLogoutBtn();

        //following will assert login screen
        loginScreen.assertLoginScreen();
    });
});