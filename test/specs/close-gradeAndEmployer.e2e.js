const { assert, expect } = require('chai');
const apiScreen = require('../helper/setupUser');
const loginScreen = require('../pageobjects/login.screen');
const dashboardScreen = require('../pageobjects/dashBoard.screen');
const sectionScreen = require('../pageobjects/sections.screen');
const gradeAndEmployerScreen = require('../pageobjects/gradeAndEmployer.screen');

describe('verify the google browser page', () => {
    // it('to verify the title of google page', () => {
    //     browser.url("https://www.google.com");
    //     expect(browser.getTitle()).to.equal("Google");
    // });

    it('Verify details of Grade and Employer section', () => {
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
        sectionScreen.clickOnGradeAndEmployerSection();
        browser.pause(5000);

        //following will assert that useris on Grade and Employer section
        gradeAndEmployerScreen.assertGradeAndEmployerPageLbl();

        //following will assert the statusof the Grade and Employer section
        gradeAndEmployerScreen.assertGradeAndEmployerPageStatus();

        //following will assert the Grade and Employer details
        gradeAndEmployerScreen.assertGradeAndEmployerDetails();
        
        //following will perform logout operation
        sectionScreen.clickOnMenuBtn();
        sectionScreen.clickOnLogoutBtn();

        //following will assert login screen
        loginScreen.assertLoginScreen();
    });
});