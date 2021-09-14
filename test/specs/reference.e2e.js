const { assert, expect } = require('chai');
const apiScreen = require('../helper/setupUser');
const loginScreen = require('../pageobjects/login.screen');
const dashboardScreen = require('../pageobjects/dashBoard.screen');
const sectionScreen = require('../pageobjects/sections.screen');
const refereneScreen = require('../pageobjects/reference.screen');

describe('verify the reference screen of JoinPulse', () => {
    // it('to verify the title of google page', () => {
    //     browser.url("https://www.google.com");
    //     expect(browser.getTitle()).to.equal("Google");
    // });

    it('Verify details of Grade and Employer section', () => {
        // //following will open browser and load the url
        browser.url("https://e2e.joinpulse.co.uk");

        // //following will perform login 
        loginScreen.loginIntoSite("fabertester+nimesh001-e2e@gmail.com","Password123");

        // //following will assert dashboard screen
        dashboardScreen.assertDashboardLbl();

        sectionScreen.clickOnMenuBtn();
        sectionScreen.clickOnProfileMenuOption();

        //following will click on Peronal Details section 
        sectionScreen.clickOnReferenceSection();
        browser.pause(5000);

        //following will assert the section heading of Reference section
        refereneScreen.assertReferencePageHeader();

        //following will fill out fileds of Reference 1
        refereneScreen.fillOutReference1();

        //following will fill out fields of Reference 2
        refereneScreen.fillOutReference2();

        //following will click on Save and Continue button
        refereneScreen.clickOnSaveAndContinueBtn();
        browser.pause(5000);

        //following will click on Menu button (hamburger menu)
        sectionScreen.clickOnMenuBtn();
        sectionScreen.clickOnProfileMenuOption();

        //following will click on Peronal Details section 
        sectionScreen.clickOnReferenceSection();
        browser.pause(5000);

        //following will assert the section heading of Reference section
        refereneScreen.assertReferencePageHeader();

        //following will assert status of the References page
        refereneScreen.assertSectionStatus();

        //following will perform logout operation
        sectionScreen.clickOnMenuBtn();
        sectionScreen.clickOnLogoutBtn();

        //following will assert login screen
        loginScreen.assertLoginScreen();
    });
});