require('dotenv').config();
const { assert, expect } = require('chai');
const loginScreen = require('../pageobjects/login.screen');
const dashboardScreen = require('../pageobjects/dashBoard.screen');
const sectionScreen = require('../pageobjects/sections.screen');
const personalDetailScreen = require('../pageobjects/personalDetails.screen');

describe('verify the google browser page', () => {

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
        browser.url(process.env.E2EPORTAL);

        // //following will perform login 
        loginScreen.loginIntoSite(process.env.USER, process.env.PASSWORD);

        // //following will assert dashboard screen
        dashboardScreen.assertDashboardLbl();

        sectionScreen.clickOnMenuBtn();
        sectionScreen.clickOnProfileMenuOption();

        //following will click on Peronal Details section 
        sectionScreen.clickOnPersonalDetailsSection();
        // browser.pause(5000);

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