require('dotenv').config();
const { assert, expect } = require('chai');
const apiScreen = require('../helper/setupUser');
const loginScreen = require('../pageobjects/login.screen');
const dashboardScreen = require('../pageobjects/dashBoard.screen');
const sectionScreen = require('../pageobjects/sections.screen');
const refereneScreen = require('../pageobjects/reference.screen');

describe('verify the reference screen of Join-DT', () => {
    beforeEach('Login and Redirect to Reference section', () => {
        //following will open browser and load the url
        browser.url(process.env.E2EPORTAL);

        //following will perform login 
        loginScreen.loginIntoSite(process.env.USER, process.env.PASSWORD);

        //following will assert dashboard screen
        dashboardScreen.assertDashboardLbl();

        sectionScreen.clickOnMenuBtn();
        sectionScreen.clickOnProfileMenuOption();

        //following will click on Peronal Details section 
        sectionScreen.clickOnReferenceSection();
        browser.pause(5000);

        //following will assert the section heading of Reference section
        refereneScreen.assertReferencePageHeader();
    });

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

    it('Verify details of Reference section with 2 References', () => {
        //following will fill out fileds of Reference 1
        refereneScreen.fillOutReference1();

        //following will fill out fields of Reference 2
        refereneScreen.fillOutReference2();

        //following will click on Save and Continue button
        refereneScreen.clickOnSaveAndContinueBtn();
        browser.pause(5000);

        //following will click on Menu button (hamburger menu)
        sectionScreen.clickOnMenuBtn();
        // sectionScreen.clickOnProfileMenuOption();

        //following will click on Peronal Details section 
        sectionScreen.clickOnReferenceSection();
        browser.pause(5000);

        //following will assert the section heading of Reference section
        refereneScreen.assertReferencePageHeader();

        //following will assert status of the References page
        refereneScreen.assertSectionStatus();
    });

    it('Verify details of Reference section with 3 References', () => {
        //following will click on "Add another" button
        refereneScreen.clickOnAddAnotherBtn();

        //following will fill out fields of Reference 3
        refereneScreen.fillOutReference3();

        //following will click on Save and Continue button
        refereneScreen.clickOnSaveAndContinueBtn();
        browser.pause(5000);

        //following will click on Menu button (hamburger menu)
        sectionScreen.clickOnMenuBtn();
        // sectionScreen.clickOnProfileMenuOption();

        //following will click on Peronal Details section 
        sectionScreen.clickOnReferenceSection();
        browser.pause(5000);

        //following will assert the section heading of Reference section
        refereneScreen.assertReferencePageHeader();

        //following will assert status of the References page
        refereneScreen.assertSectionStatus();
    });

    it('Verify details of Reference section with 4 References', () => {
        //following will click on "Add another" button
        refereneScreen.clickOnAddAnotherBtn();

        //following will fill out fields of Reference 4
        refereneScreen.fillOutReference4();

        //following will click on Save and Continue button
        refereneScreen.clickOnSaveAndContinueBtn();
        browser.pause(5000);

        //following will click on Menu button (hamburger menu)
        sectionScreen.clickOnMenuBtn();
        // sectionScreen.clickOnProfileMenuOption();

        //following will click on Peronal Details section 
        sectionScreen.clickOnReferenceSection();
        browser.pause(5000);

        //following will assert the section heading of Reference section
        refereneScreen.assertReferencePageHeader();

        //following will assert status of the References page
        refereneScreen.assertSectionStatus();
    });
});