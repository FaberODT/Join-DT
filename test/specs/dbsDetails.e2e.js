const { assert, expect } = require('chai');
const apiScreen = require('../helper/setupUser');
const loginScreen = require('../pageobjects/login.screen');
const dashboardScreen = require('../pageobjects/dashBoard.screen');
const sectionScreen = require('../pageobjects/sections.screen');
const dbsScreen = require('../pageobjects/dbs.screen');
const adminSectionScreen = require('../pageobjects/adminSections.screen');

describe('verify the DBS section', () => {
    afterEach('Logout functions only', () => {
        //following will perform logout operation
        sectionScreen.clickOnMenuBtn();
        sectionScreen.clickOnLogoutBtn();

        //following will assert login screen
        loginScreen.assertLoginScreen();
    });

    it('Verify DBS screen status after updating details - Not Signed', () => {
        //following will open browser and load the url
        browser.url("https://dt-e2e.faberodt.com");

        //following will perform login 
        loginScreen.loginIntoSite("fabertester+nimesh01-e2e@gmail.com","Password123");

        // //following will assert dashboard screen
        dashboardScreen.assertDashboardLbl();

        //following will click on Menu button (Hamburger menu)
        sectionScreen.clickOnMenuBtn();

        //following will click on Profile menu option 
        sectionScreen.clickOnProfileMenuOption();

        //following will click on DBS Details section
        sectionScreen.clickOnDBSDetailsSection();

        //following will assert that user is on DBS details screen
        dbsScreen.assertDBSPageHeader();

        //following will click on Yes radio button
        dbsScreen.clickOnYesRadioBtn();

        //following will enter certificate value
        dbsScreen.enterCertificateValue();

        //following will click on Save and Continue button
        dbsScreen.clickOnSaveAndContinueBtn();
        browser.pause(5000);

        //following will click on Menu button (Hamburger menu)
        sectionScreen.clickOnMenuBtn();

        //following will click on DBS Details section
        sectionScreen.clickOnDBSDetailsSection();

        //following will assert the status of the DBS details section
        dbsScreen.assertDBSDetailsSectionStatus("Incomplete");
    });

    it('Verify DBS screen status after updating details with NO DBS Registered', () => {
        //following will open browser and load the url
        browser.url("https://dt-e2e.faberodt.com");

        //following will perform login 
        loginScreen.loginIntoSite("fabertester+nimesh01-e2e@gmail.com","Password123");

        // //following will assert dashboard screen
        dashboardScreen.assertDashboardLbl();

        //following will click on Menu button (Hamburger menu)
        sectionScreen.clickOnMenuBtn();

        //following will click on Profile menu option 
        sectionScreen.clickOnProfileMenuOption();

        //following will click on DBS Details section
        sectionScreen.clickOnDBSDetailsSection();

        //following will assert that user is on DBS details screen
        dbsScreen.assertDBSPageHeader();

        //following will click on No radio button
        dbsScreen.clickOnNoRadioBtn();

        //following will click on No radio button from DBS questions
        dbsScreen.clickOnDBSQuestionNoRadioBtn(); 

        //following will click on Save and Continue button
        dbsScreen.clickOnSaveAndContinueBtn();
        browser.pause(5000);

        //following will click on Menu button (Hamburger menu)
        sectionScreen.clickOnMenuBtn();

        //following will click on DBS Details section
        sectionScreen.clickOnDBSDetailsSection();

        //following will assert the status of the DBS details section
        dbsScreen.assertDBSDetailsSectionStatus("Incomplete");
    });

    it('Verify DBS screen by Signed status for SignDeclarationStatus and section status as Issue', () => {
        //following will open browser and load the url
        browser.url("https://dt-e2e.faberodt.com");

        //following will perform login 
        loginScreen.loginIntoSite("fabertester+nimesh01-e2e@gmail.com","Password123");

        // //following will assert dashboard screen
        dashboardScreen.assertDashboardLbl();

        //following will click on Menu button (Hamburger menu)
        sectionScreen.clickOnMenuBtn();

        //following will click on Profile menu option 
        sectionScreen.clickOnProfileMenuOption();

        //following will click on DBS Details section
        sectionScreen.clickOnDBSDetailsSection();

        //following will assert that user is on DBS details screen
        dbsScreen.assertDBSPageHeader();

        //following will click on Yes radio button
        dbsScreen.clickOnYesRadioBtn();

        //following will enter certificate value
        dbsScreen.enterCertificateValueForIssue();

        //following will click on Save and Continue button
        dbsScreen.clickOnSaveAndContinueBtn();
        browser.pause(5000);

        //following will generate the acacium token
        apiScreen.getFaberAuthToken();
        browser.pause(5000);

        //following will generate the dt tiken
        apiScreen.getJoinDTAuthToken();
        browser.pause(5000);

        //following API will submit the DBS section from ADMIN with status as Signed and without File attached
        apiScreen.saveAndContinueDBSSectionAdminSignedWithoutFile();
        browser.pause(10000);

        //following will click on Menu button (Hamburger menu)
        sectionScreen.clickOnMenuBtn();

        //following will click on DBS Details section
        sectionScreen.clickOnDBSDetailsSection();

        //following will assert that user is on DBS details screen
        dbsScreen.assertDBSPageHeader();

        //following will assert the status of the DBS details section
        dbsScreen.assertDBSDetailsSectionStatus("Issue");

        //followin will assert the message content of the section
        dbsScreen.assertDBSMessageContent("SignedWithoutFile");
    });

    it('Verify DBS screen by Signed status for SignDeclarationStatus', () =>{
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
        browser.url("https://dt-e2e.faberodt.com");

        apiScreen.getFaberAuthTokenForUser();
        browser.pause(5000);

        apiScreen.getJoinDTAuthTokenForUser();
        browser.pause(5000);

        //following will upload certificate for DBS section
        apiScreen.uploadCertificateForDBSSection();
        browser.pause(10000);

        //following will save the DBS section
        apiScreen.saveAndContinueDBSSection();
        browser.pause(10000);

        //following will perform login 
        loginScreen.loginIntoSite("fabertester+nimesh01-e2e@gmail.com","Password123");

        //following will assert dashboard screen
        dashboardScreen.assertDashboardLbl();

        //following will save and continue DBS section with status SIGNED from admin
        apiScreen.saveAndContinueDBSSectionAdminSignedWithFile();
        browser.pause(5000);

        //following will click on Menu button (Hamburger menu)
        sectionScreen.clickOnMenuBtn();

        //following will click on Profile menu option 
        sectionScreen.clickOnProfileMenuOption();

        //following will click on DBS Details section
        sectionScreen.clickOnDBSDetailsSection();

        //following will assert that user is on DBS details screen
        dbsScreen.assertDBSPageHeader();

        //following will assert the status of the DBS details section
        dbsScreen.assertDBSDetailsSectionStatus("Pending");

        //followin will assert the message content of the section
        dbsScreen.assertDBSMessageContent("SignedWithFile");
    });
});