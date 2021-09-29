require('dotenv').config();
const { assert, expect } = require('chai');
const apiScreen = require('../helper/setupUser');
const loginScreen = require('../pageobjects/login.screen');
const dashboardScreen = require('../pageobjects/dashBoard.screen');
const sectionScreen = require('../pageobjects/sections.screen');
const termsAndConditionScreen = require('../pageobjects/termsAndConditions.screen');

describe('verify the Terms and Conditions screen of Join-DT', () => {
    afterEach('Logout functions only', () => {
        //following will perform logout operation
        sectionScreen.clickOnMenuBtn();
        //following will click on Profile menu option
        sectionScreen.clickOnProfileMenuOption();

        //following will click on Logout button
        sectionScreen.clickOnLogoutBtn();

        //following will assert login screen
        loginScreen.assertLoginScreen();
    });

    it('Verify details of Terms and Conditions section', () => {
        // //following will open browser and load the url
        browser.url(process.env.E2EPORTAL);

        // //following will perform login 
        loginScreen.loginIntoSite(process.env.USER, process.env.PASSWORD);

        // //following will assert dashboard screen
        dashboardScreen.assertDashboardLbl();

        sectionScreen.clickOnMenuBtn();
        sectionScreen.clickOnProfileMenuOption();

        //following will click on Terms and Conditions section 
        sectionScreen.clickOnTermsSndConditionsSection();
        browser.pause(5000);

        //following will assert the section heading of Reference section
        termsAndConditionScreen.assertTermsAndConditionsPageHeader();

        //following will fill out the next of kin details
        termsAndConditionScreen.fillNextOfKin();

        //following will click on Save and Continue button
        termsAndConditionScreen.clickOnSaveAndContinueBtn();
        browser.pause(5000);

        //following will click on Menu button (hamburger menu)
        sectionScreen.clickOnMenuBtn();

        //following will click on Peronal Details section 
        sectionScreen.clickOnTermsSndConditionsSection();
        browser.pause(5000);

        //following will assert the section heading of Terms and Conditions section
        termsAndConditionScreen.assertTermsAndConditionsPageHeader();

        //following will assert status of the Terms and Conditions page
        termsAndConditionScreen.assertSectionStatus();
    });
});