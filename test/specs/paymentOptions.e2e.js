require('dotenv').config();
const { assert, expect } = require('chai');
const apiScreen = require('../helper/setupUser');
const loginScreen = require('../pageobjects/login.screen');
const dashboardScreen = require('../pageobjects/dashBoard.screen');
const sectionScreen = require('../pageobjects/sections.screen');
const paymentOptionScreen = require('../pageobjects/paymentOptions.screen');


describe('verify the Payment options section', () => {
    beforeEach('Login and verify Payment option section', () => {
        //following will open browser and load the url
        browser.url(process.env.E2EPORTAL);

        //following will perform login 
        loginScreen.loginIntoSite(process.env.USER, process.env.PASSWORD);

        //following will assert dashboard screen
        dashboardScreen.assertDashboardLbl();

        sectionScreen.clickOnMenuBtn();
        sectionScreen.clickOnProfileMenuOption();

        //following will click on Payment Option section
        sectionScreen.clickOnTaxAndNextOfKinSection();

        //following will assert that user is on Payment Option screen
        paymentOptionScreen.assertTaxAndNextOfKinPageHeader();
    });

    afterEach('Logout from the application', () => {
        //following will perform logout operation
        sectionScreen.clickOnMenuBtn();
        sectionScreen.clickOnLogoutBtn();

        //following will assert login screen
        loginScreen.assertLoginScreen();
    });

    it('Verify Payment option section with PAYE payment method', () => {
        //following will click on "PAYE" radio button
        paymentOptionScreen.clickOnPayeRadioBtn();

        //following will click on Save and Continue button
        paymentOptionScreen.clickOnSaveAndContinueBtn();
        browser.pause(5000);

        //following will click on Menu button - hamburger menu option
        sectionScreen.clickOnMenuBtn();

        //following will click on Payment options section
        sectionScreen.clickOnTaxAndNextOfKinSection();
        browser.pause(5000);

        //following will assert that user is on Payment Option screen
        paymentOptionScreen.assertTaxAndNextOfKinPageHeader();
        
        //following will assert the status of the section
        paymentOptionScreen.assertSectionStatus();
    });

    it('Verify Payment option section with UMBRELLA payment method', () => {
        //following will click on "UMBRELLA" radio button
        paymentOptionScreen.clickOnUmbrellaRadioBtn();

        //following will click on Save and Continue button
        paymentOptionScreen.clickOnSaveAndContinueBtn();
        browser.pause(5000);

        //following will click on Menu button - hamburger menu option
        sectionScreen.clickOnMenuBtn();

        //following will click on Payment Option section
        sectionScreen.clickOnTaxAndNextOfKinSection();
        browser.pause(5000);

        //following will assert that user is on Payment Option screen
        paymentOptionScreen.assertTaxAndNextOfKinPageHeader();
        
        //following will assert the status of the section
        paymentOptionScreen.assertSectionStatus();
    });
});