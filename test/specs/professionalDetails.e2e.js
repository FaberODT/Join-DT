require('dotenv').config();
const { assert, expect } = require('chai');
const apiScreen = require('../helper/setupUser');
const loginScreen = require('../pageobjects/login.screen');
const dashboardScreen = require('../pageobjects/dashBoard.screen');
const sectionScreen = require('../pageobjects/sections.screen');
const professionalDetailsScreen = require('../pageobjects/professionalDetails.screen');

describe('verify the Professional details section', () => {

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

    it('To verify the details of professional details section - No Professional Memberships', () => {
        //following will generate the acacium token
        apiScreen.getFaberAuthToken();
        browser.pause(5000);

        //following will generate the dt tiken
        apiScreen.getJoinDTAuthToken();
        browser.pause(5000);

        //following will clear the user profile data
        apiScreen.deleteUserData();
        browser.pause(5000);

        //following will import the user profile data
        apiScreen.updateUserInformation();
        browser.pause(10000);

        //following will open browser and load the url
        browser.url(process.env.E2EPORTAL);

        //following will fetch the acacium Auth Token
        apiScreen.getFaberAuthTokenForUser();
        browser.pause(5000);

        //following will fetch the JoinPulse Auth token
        apiScreen.getJoinDTAuthTokenForUser();
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

        //following will save and continue the professional details section
        apiScreen.saveAndContinueProfessionalDetails();
        browser.pause(20000);

        //following will assert dashboard screen
        dashboardScreen.assertDashboardLbl();
        
        //following will click on Menu button - hamburger menu icon
        sectionScreen.clickOnMenuBtn();
        sectionScreen.clickOnProfileMenuOption();

        //following will click on Right To Work Checks option
        sectionScreen.clickOnProfessionalDetailsSection();        

        //following will assert the page header of the Section
        professionalDetailsScreen.assertProfessionalDetailsPageHeader();

        //following will assert the status of the section
        professionalDetailsScreen.assertSectionStatus();
    });

    it('To verify the details of professional details section - with BABCP Professional Membership', () => {
        //following will generate the acacium token
        apiScreen.getFaberAuthToken();
        browser.pause(5000);

        //following will generate the dt tiken
        apiScreen.getJoinDTAuthToken();
        browser.pause(5000);

        //following will clear the user profile data
        apiScreen.deleteUserData();
        browser.pause(5000);

        //following will import the user profile data
        apiScreen.updateUserInformation();
        browser.pause(10000);

        //following will open browser and load the url
        browser.url(process.env.E2EPORTAL);

        //following will generate the acacium token
        apiScreen.getFaberAuthTokenForUser();
        browser.pause(5000);

        //following will generate the dt tiken
        apiScreen.getJoinDTAuthTokenForUser();
        browser.pause(5000);

        //following will upload the CV for the section
        apiScreen.uploadCVForProfessionalDetailsSection1();
        browser.pause(10000);

        //following will upload qualification certificate for the section
        apiScreen.uploadQualificationCertificateForProfessionalDetails();
        browser.pause(10000);

        //following will upload insurance certificate for the section
        apiScreen.uploadProfessionalInsuranceCertificate();
        browser.pause(10000);

        //following will perform login 
        loginScreen.loginIntoSite(process.env.USER, process.env.PASSWORD);

        //following will save and continue the professional details section
        apiScreen.saveAndContinueProfessionalDetailsSection();
        browser.pause(20000);

        //following will assert dashboard screen
        dashboardScreen.assertDashboardLbl();

        //following will click on Menu button - hamburger menu icon
        sectionScreen.clickOnMenuBtn();
        //following will click on Profile menu option
        sectionScreen.clickOnProfileMenuOption();

        //following will click on Right To Work Checks option
        sectionScreen.clickOnProfessionalDetailsSection();        

        //following will assert the page header of the Section
        professionalDetailsScreen.assertProfessionalDetailsPageHeader();

        //following will assert the status of the section
        professionalDetailsScreen.assertSectionStatus();
    });

    it('To verify the details of professional details section - with BACP Professional Membership', () => {
        //following will open browser and load the url
        browser.url(process.env.E2EPORTAL);
        
        //following will perform login 
        loginScreen.loginIntoSite(process.env.USER, process.env.PASSWORD);

        //following will assert dashboard screen
        dashboardScreen.assertDashboardLbl();
        
        //following will click on Menu button - hamburger menu icon
        sectionScreen.clickOnMenuBtn();
        sectionScreen.clickOnProfileMenuOption();

        //following will click on Right To Work Checks option
        sectionScreen.clickOnProfessionalDetailsSection();        

        //following will assert the page header of the Section
        professionalDetailsScreen.assertProfessionalDetailsPageHeader();

        // //following will click on Yes radio button of Professional Membership
        // professionalDetailsScreen.clickOnYesRadioBtn();

        //following will click on BACP professional membership radio button
        professionalDetailsScreen.clickOnBACPRadioBtn();

        //following will enter value into BACP professional membership text box
        professionalDetailsScreen.enterValueForProfessionalMemberships();

        //following will click on Save and Continue button
        professionalDetailsScreen.clickOnSaveAndContinueBtn();
        browser.pause(5000);

        //following will click on Menu button - hamburger menu icon
        sectionScreen.clickOnMenuBtn();

        //following will click on Right To Work Checks option
        sectionScreen.clickOnProfessionalDetailsSection();        

        //following will assert the page header of the Section
        professionalDetailsScreen.assertProfessionalDetailsPageHeader();

        //following will assert the status of the section
        professionalDetailsScreen.assertSectionStatus();
    });

    it('To verify the details of professional details section - with HCPC Professional Membership', () => {
        //following will open browser and load the url
        browser.url(process.env.E2EPORTAL);
        
        //following will perform login 
        loginScreen.loginIntoSite(process.env.USER, process.env.PASSWORD);

        //following will assert dashboard screen
        dashboardScreen.assertDashboardLbl();
        
        //following will click on Menu button - hamburger menu icon
        sectionScreen.clickOnMenuBtn();
        sectionScreen.clickOnProfileMenuOption();

        //following will click on Right To Work Checks option
        sectionScreen.clickOnProfessionalDetailsSection();        

        //following will assert the page header of the Section
        professionalDetailsScreen.assertProfessionalDetailsPageHeader();

        // //following will click on Yes radio button of Professional Membership
        // professionalDetailsScreen.clickOnYesRadioBtn();

        //following will click on HCPC professional membership radio button
        professionalDetailsScreen.clickOnHCPCRadioBtn();

        //following will enter value into HCPC professional membership text box
        professionalDetailsScreen.enterValueForProfessionalMemberships();

        //following will click on Save and Continue button
        professionalDetailsScreen.clickOnSaveAndContinueBtn();
        browser.pause(5000);

        //following will click on Menu button - hamburger menu icon
        sectionScreen.clickOnMenuBtn();

        //following will click on Right To Work Checks option
        sectionScreen.clickOnProfessionalDetailsSection();        

        //following will assert the page header of the Section
        professionalDetailsScreen.assertProfessionalDetailsPageHeader();

        //following will assert the status of the section
        professionalDetailsScreen.assertSectionStatus();
    });

    it('To verify the details of professional details section - with Other Professional Membership', () => {
        //following will open browser and load the url
        browser.url(process.env.E2EPORTAL);
        
        //following will perform login 
        loginScreen.loginIntoSite(process.env.USER, process.env.PASSWORD);

        //following will assert dashboard screen
        dashboardScreen.assertDashboardLbl();
        
        //following will click on Menu button - hamburger menu icon
        sectionScreen.clickOnMenuBtn();
        sectionScreen.clickOnProfileMenuOption();

        //following will click on Right To Work Checks option
        sectionScreen.clickOnProfessionalDetailsSection();        

        //following will assert the page header of the Section
        professionalDetailsScreen.assertProfessionalDetailsPageHeader();

        // //following will click on Yes radio button of Professional Membership
        // professionalDetailsScreen.clickOnYesRadioBtn();

        //following will click on Other professional membership radio button
        professionalDetailsScreen.clickOnOtherRadioBtn();

        //following will enter value into Other professional membership text box
        professionalDetailsScreen.enterValueForOtherProfessional();

        //following will click on Save and Continue button
        professionalDetailsScreen.clickOnSaveAndContinueBtn();
        browser.pause(5000);

        //following will click on Menu button - hamburger menu icon
        sectionScreen.clickOnMenuBtn();

        //following will click on Right To Work Checks option
        sectionScreen.clickOnProfessionalDetailsSection();        

        //following will assert the page header of the Section
        professionalDetailsScreen.assertProfessionalDetailsPageHeader();

        //following will assert the status of the section
        professionalDetailsScreen.assertSectionStatus();
    });
});