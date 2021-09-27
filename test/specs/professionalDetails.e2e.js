require('dotenv').config();
const { assert, expect } = require('chai');
const apiScreen = require('../helper/setupUser');
const loginScreen = require('../pageobjects/login.screen');
const dashboardScreen = require('../pageobjects/dashBoard.screen');
const sectionScreen = require('../pageobjects/sections.screen');
const professionalDetailsScreen = require('../pageobjects/professionalDetails.screen');

describe('verify the identification documents section', () => {

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

    it('to verify the details of identification documents section', () => {
        //following will open browser and load the url
        browser.url(process.env.E2EPORTAL);

        //following will fetch the acacium Auth Token
        apiScreen.getFaberAuthToken();
        browser.pause(5000);

        //following will fetch the JoinPulse Auth token
        apiScreen.getJoinDTAuthToken();
        browser.pause(5000);

        //following will upload file 1 
        apiScreen.uploadCVForProfessionalDetailsSection();
        browser.pause(10000);

        //following will upload file 2
        apiScreen.uploadForProfessionalQualificationCerti();
        browser.pause(10000);

        //following will upload file 3
        apiScreen.uploadForIndemnityInsurance();
        browser.pause(10000);

        //following will perform login 
        loginScreen.loginIntoSite(process.env.USER, process.env.PASSWORD);

        //following will save and continue the Identification documents section
        apiScreen.saveAndContinueProfessionalDetails();
        browser.pause(25000);
        
        //following will assert dashboard screen
        dashboardScreen.assertDashboardLbl();
        
        sectionScreen.clickOnMenuBtn();
        sectionScreen.clickOnProfileMenuOption();

        //following will click on Right To Work Checks option
        sectionScreen.clickOnProfessionalDetailsSection();        

        //following will assert the page header of the Section
        professionalDetailsScreen.assertIdentificationDocumentsPageHeader();

        //following will assert the status of the section
        professionalDetailsScreen.assertSectionStatus();
    });
});