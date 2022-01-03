require('dotenv').config();
const { assert, expect } = require('chai');
const apiScreen = require('../helper/setupUser');
const loginScreen = require('../pageobjects/login.screen');
const sectionScreen = require('../pageobjects/sections.screen');
const dashboardScreen = require('../pageobjects/dashBoard.screen');
const personalDetailScreen = require('../pageobjects/personalDetails.screen');
const dbsScreen = require('../pageobjects/dbs.screen');
const identificationDocumentsScreen = require('../pageobjects/identificationDocumentsScreen.screen');
const paymentOptionScreen = require('../pageobjects/paymentOptions.screen');
const professionalDetailsScreen = require('../pageobjects/professionalDetails.screen');
const termsAndConditionScreen = require('../pageobjects/termsAndConditions.screen');
const refereneScreen = require('../pageobjects/reference.screen');
const personalDetailsScreen = require('../pageobjects/personalDetails.screen');
const interviewDetailsScreen = require('../pageobjects/interview.screen');
const identificationDocumentScreen = require('../pageobjects/identificationDocumentsScreen.screen');
const trainingScreen = require('../pageobjects/training.screen');
const paymentMethodScreen = require('../pageobjects/paymentOptions.screen');

describe('Join Pulse E2E Environment: ', () => {

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
    
    /**
     * Following test case will verify the Personal details tab details
     */
    it('Verify details of Peronal Details section', () => {
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
    });

    /**
     * Following group of test cases will verify the auto Save feature
     */
    it('Verify auto save after updating Lastname value', () => {
        //following method call will perform login and redirect user to dashboarad
        loginScreen.verifyUptoDashBoard();

        //following will click on Personal Detail section
        sectionScreen.clickOnPersonalDetailsSection();

        //following will assert the Personal Detail section header
        personalDetailScreen.assertPersonaDetailsPageLbl();

        //following will update the last name value
        personalDetailScreen.enterLastName();

        //following will assert the notification message on screen
        personalDetailScreen.assertChangesSavedNotification();

        //following will click on "Professional Details" section
        sectionScreen.clickOnMenuBtn();

        //following will click on DBS details section
        sectionScreen.clickOnDBSDetailsSection();
        browser.pause(3000);

        //following will again go back to Personal Detail section to verify updated value
        sectionScreen.clickOnMenuBtn();
        //following will click on Personal details section
        sectionScreen.clickOnPersonalDetailsSection();

        //following will assert the Last Name value
        personalDetailScreen.assertLastNameValue()
    });

    it('Verify auto save after updating Date value', () => {
        //following method call will perform login and redirect user to dashboarad
        loginScreen.verifyUptoDashBoard();

        //following will click on Personal Detail section
        sectionScreen.clickOnPersonalDetailsSection();

        //following will assert the Personal Detail section header
        personalDetailScreen.assertPersonaDetailsPageLbl();

        //following will update the Date of birth value
        personalDetailScreen.enterDateOfBirth();

        //following will assert the notification message on screen
        personalDetailScreen.assertChangesSavedNotification();

        //following will click on "Professional Details" section
        sectionScreen.clickOnMenuBtn();

        //following will click on DBS details section
        sectionScreen.clickOnDBSDetailsSection();
        browser.pause(3000);

        //following will again go back to Personal Detail section to verify updated value
        sectionScreen.clickOnMenuBtn();
        //following will click on Personal details section
        sectionScreen.clickOnPersonalDetailsSection();

        //following will assert the Date of birth value
        personalDetailScreen.assertDateOfBirthValue();
    });

    it('Verify auto save after updating gender value', () => {
        //following method call will perform login and redirect user to dashboarad
        loginScreen.verifyUptoDashBoard();

        //following will click on Personal Detail section
        sectionScreen.clickOnPersonalDetailsSection();

        //following will assert the Personal Detail section header
        personalDetailScreen.assertPersonaDetailsPageLbl();

        //following will update the Date of birth value
        personalDetailScreen.switchGender();

        //following will assert the notification message on screen
        personalDetailScreen.assertChangesSavedNotification();

        //following will click on "Professional Details" section
        sectionScreen.clickOnMenuBtn();

        //following will click on DBS details section
        sectionScreen.clickOnDBSDetailsSection();
        browser.pause(3000);

        //following will again go back to Personal Detail section to verify updated value
        sectionScreen.clickOnMenuBtn();
        //following will click on Personal details section
        sectionScreen.clickOnPersonalDetailsSection();

        //following will assert the gender value
        personalDetailScreen.assertGenderValue();
    });

    it('Verify auto save after updating Mobile number value', () => {
        //following method call will perform login and redirect user to dashboarad
        loginScreen.verifyUptoDashBoard();

        //following will click on Personal Detail section
        sectionScreen.clickOnPersonalDetailsSection();

        //following will assert the Personal Detail section header
        personalDetailScreen.assertPersonaDetailsPageLbl();

        //following will update the Mobile number value
        personalDetailScreen.enterMobile();

        //following will assert the notification message on screen
        personalDetailScreen.assertChangesSavedNotification();

        //following will click on "Professional Details" section
        sectionScreen.clickOnMenuBtn();

        //following will click on DBS details section
        sectionScreen.clickOnDBSDetailsSection();
        browser.pause(3000);

        //following will again go back to Personal Detail section to verify updated value
        sectionScreen.clickOnMenuBtn();
        //following will click on Personal details section
        sectionScreen.clickOnPersonalDetailsSection();

        //following will assert the Mobile value
        personalDetailScreen.assertMobileValue();
    });

    it('Verify auto save after updating Address line 1 value', () => {
        //following method call will perform login and redirect user to dashboarad
        loginScreen.verifyUptoDashBoard();

        //following will click on Personal Detail section
        sectionScreen.clickOnPersonalDetailsSection();

        //following will assert the Personal Detail section header
        personalDetailScreen.assertPersonaDetailsPageLbl();

        //following will update the Address line 1 value
        personalDetailScreen.enterAddressLine1();

        //following will assert the notification message on screen
        personalDetailScreen.assertChangesSavedNotification();
        
        //following will click on "Professional Details" section
        sectionScreen.clickOnMenuBtn();

        //following will click on DBS details section
        sectionScreen.clickOnDBSDetailsSection();
        browser.pause(3000);

        //following will again go back to Personal Detail section to verify updated value
        sectionScreen.clickOnMenuBtn();
        //following will click on Personal details section
        sectionScreen.clickOnPersonalDetailsSection();

        //following will assert the Address line 1 value
        personalDetailScreen.assertAddressLine1Value();
    });

    it('Verify auto save after updating DBS value', () => {
        //following method call will perform login and redirect user to dashboarad
        loginScreen.verifyUptoDashBoard();

        //following will click on Declaration and DBS section
        sectionScreen.clickOnDBSDetailsSection();

        //following will assert the Declaration and DBS section header
        dbsScreen.assertDBSPageHeader();

        //following will switch the DBS certificate value
        dbsScreen.switchDBSValue();

        //following will assert the notification message on screen
        personalDetailScreen.assertChangesSavedNotification();

        //following will click on "DBS details" section
        sectionScreen.clickOnMenuBtn();
        //following will click on DBS details Section
        sectionScreen.clickOnDBSDetailsSection();
        browser.pause(3000);

        //following will again go back to Declaration and DBS section to verify updated value
        sectionScreen.clickOnMenuBtn();
        //following will click on Declaration and DBS section
        sectionScreen.clickOnDBSDetailsSection();

        //following will assert the DBS value
        dbsScreen.assertDBSValue();
    });

    it('Verify Auto save with triggers in the DBS Details section', () => {
        //following method call will perform login and redirect user to dashboarad
        loginScreen.verifyUptoDashBoard();

        //following will click on Declaration and DBS section
        sectionScreen.clickOnDBSDetailsSection();

        //following will assert the Declaration and DBS section header
        dbsScreen.assertDBSPageHeader();

        //following will click on NO radio button
        dbsScreen.clickOnNoRadioBtn();

        //following will click on DBS Question No Radio button
        dbsScreen.clickOnDBSQuestionNoRadioBtn();

        //following will assert that "DBS Application" panel is displaying on the screen
        dbsScreen.assertDBSApplicationLbl();

        //following will click on Menu button
        sectionScreen.clickOnMenuBtn();

        //following will click on Personal details section
        sectionScreen.clickOnPersonalDetailsSection();
        browser.pause(3000);

        //following will click on Menu button
        sectionScreen.clickOnMenuBtn();
        
        //following will click on DBS section
        sectionScreen.clickOnDBSDetailsSection();

        //following will assert DBS section page label
        dbsScreen.assertDBSPageHeader();

        //following will click on Yes radio button
        dbsScreen.clickOnYesRadioBtn();
        browser.pause(1000);

        //following will assert Auto save message on the screen
        personalDetailScreen.assertChangesSavedNotification();

        //following will assert DBS Certificate number text box
        dbsScreen.assertCertificateNumberTxtBox();

        //following will assert DBS file uploader
        dbsScreen.assertCertificateUploadPanel();

        //following will assert that "DBS Application" panel is not displaying on the screen
        dbsScreen.assertDBSApplicationLbl();

        //following will click on Menu button
        sectionScreen.clickOnMenuBtn();

        //following will click on Personal details section
        sectionScreen.clickOnPersonalDetailsSection();
        browser.pause(3000);

        //following will click on Menu button
        sectionScreen.clickOnMenuBtn();
        
        //following will click on DBS section
        sectionScreen.clickOnDBSDetailsSection();

        //following will assert DBS Certificate number text box
        dbsScreen.assertCertificateNumberTxtBox();

        //following will assert DBS file uploader
        dbsScreen.assertCertificateUploadPanel();

        //following will assert that "DBS Application" panel is not displaying on the screen
        dbsScreen.assertDBSApplicationLbl();
    });

    /**
     * Following group of test cases will verify the DBS section screen
     */
    it('Verify DBS screen status - updating details, Not Signed', () => {
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

        //following will perform login 
        loginScreen.loginIntoSite(process.env.USER, process.env.PASSWORD);

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
        dbsScreen.enterCertificateValue("Valid");

        //following will click on Save and Continue button
        dbsScreen.clickOnSaveAndContinueBtn();
        browser.pause(5000);

        //following will click on Menu button (Hamburger menu)
        sectionScreen.clickOnMenuBtn();
        // //following will click on Profile menu option
        // sectionScreen.clickOnProfileMenuOption();

        //following will click on DBS Details section
        sectionScreen.clickOnDBSDetailsSection();

        //following will assert the status of the DBS details section
        dbsScreen.assertDBSDetailsSectionStatus("Incomplete");
    });

    it('Verify DBS screen status - updating details, with NO DBS Registered', () => {
        //following will open browser and load the url
        browser.url(process.env.E2EPORTAL);

        //following will perform login 
        loginScreen.loginIntoSite(process.env.USER, process.env.PASSWORD);

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
        // //following will click on Profile menu option
        // sectionScreen.clickOnProfileMenuOption();

        //following will click on DBS Details section
        sectionScreen.clickOnDBSDetailsSection();

        //following will assert the status of the DBS details section
        dbsScreen.assertDBSDetailsSectionStatus("Incomplete");
    });

    it('Verify DBS screen status - Signed for SignDeclarationStatus from admin, section status as Issue - 1', () => {
        //following will open browser and load the url
        browser.url(process.env.E2EPORTAL);

        //following will perform login 
        loginScreen.loginIntoSite(process.env.USER, process.env.PASSWORD);

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
        dbsScreen.enterCertificateValue("Issue77");

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

        //following will perform logout operation
        sectionScreen.clickOnMenuBtn();
        //following will click on Profile menu option
        sectionScreen.clickOnProfileMenuOption();

        //following will click on Logout option
        sectionScreen.clickOnLogoutBtn();

        //following will assert login screen
        loginScreen.assertLoginScreen();

        //following will perform login 
        loginScreen.loginIntoSite(process.env.USER, process.env.PASSWORD);

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

        //following will assert the status of the DBS details section
        dbsScreen.assertDBSDetailsSectionStatus("Issue");

        //followin will assert the message content of the section
        dbsScreen.assertDBSMessageContent("SignedWithoutFile");
    });

    it('Verify DBS screen status - Signed for SignDeclarationStatus from admin, section status as Issue - 2', () => {
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

        //following will perform login 
        loginScreen.loginIntoSite(process.env.USER, process.env.PASSWORD);

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
        dbsScreen.enterCertificateValue("Issue66");

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
        apiScreen.saveAndContinueDBSSectionAdminSignedWithoutFile66();
        browser.pause(10000);

        //following will perform logout operation
        sectionScreen.clickOnMenuBtn();
        //following will click on Profile menu option
        sectionScreen.clickOnProfileMenuOption();

        //following will click on Logout option
        sectionScreen.clickOnLogoutBtn();

        //following will assert login screen
        loginScreen.assertLoginScreen();

        //following will perform login 
        loginScreen.loginIntoSite(process.env.USER, process.env.PASSWORD);

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

        //following will assert the status of the DBS details section
        dbsScreen.assertDBSDetailsSectionStatus("Issue");

        //followin will assert the message content of the section
        dbsScreen.assertDBSMessageContent("SignedWithoutFile1");
    });

    it('Verify DBS screen status - Signed for SignDeclarationStatus from admin, section status as Issue - 3', () => {
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

        //following will perform login 
        loginScreen.loginIntoSite(process.env.USER, process.env.PASSWORD);

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
        dbsScreen.enterCertificateValue("Issue55");

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
        apiScreen.saveAndContinueDBSSectionAdminSignedWithoutFile55();
        browser.pause(10000);

        //following will perform logout operation
        sectionScreen.clickOnMenuBtn();
        //following will click on Profile menu option
        sectionScreen.clickOnProfileMenuOption();

        //following will click on Logout option
        sectionScreen.clickOnLogoutBtn();

        //following will assert login screen
        loginScreen.assertLoginScreen();

        //following will perform login 
        loginScreen.loginIntoSite(process.env.USER, process.env.PASSWORD);

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

        //following will assert the status of the DBS details section
        dbsScreen.assertDBSDetailsSectionStatus("Issue");

        //followin will assert the message content of the section
        dbsScreen.assertDBSMessageContent("SignedWithoutFile2");
    });

    it('Verify DBS screen status - Signed for SignDeclarationStatus from admin, section status as Issue - 4', () => {
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

        //following will perform login 
        loginScreen.loginIntoSite(process.env.USER, process.env.PASSWORD);

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
        dbsScreen.enterCertificateValue("Valid");

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
        apiScreen.saveAndContinueDBSSectionAdminSignedWithoutFile99();
        browser.pause(10000);

        //following will perform logout operation
        sectionScreen.clickOnMenuBtn();
        //following will click on Profile menu option
        sectionScreen.clickOnProfileMenuOption();

        //following will click on Logout option
        sectionScreen.clickOnLogoutBtn();

        //following will assert login screen
        loginScreen.assertLoginScreen();

        //following will perform login 
        loginScreen.loginIntoSite(process.env.USER, process.env.PASSWORD);

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

        //following will assert the status of the DBS details section
        dbsScreen.assertDBSDetailsSectionStatus("Pending");

        //followin will assert the message content of the section
        dbsScreen.assertDBSMessageContent("SignedWithoutFile3");
    });

    it('Verify DBS screen status - Signed for SignDeclarationStatus from admin, section status as Issue - 5', () => {
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

        //following will perform login 
        loginScreen.loginIntoSite(process.env.USER, process.env.PASSWORD);

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
        dbsScreen.enterCertificateValue("Issue88");

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
        apiScreen.saveAndContinueDBSSectionAdminSignedWithoutFile88();
        browser.pause(10000);

        //following will perform logout operation
        sectionScreen.clickOnMenuBtn();
        //following will click on Profile menu option
        sectionScreen.clickOnProfileMenuOption();

        //following will click on Logout option
        sectionScreen.clickOnLogoutBtn();

        //following will assert login screen
        loginScreen.assertLoginScreen();

        //following will perform login 
        loginScreen.loginIntoSite(process.env.USER, process.env.PASSWORD);

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

        //following will assert the status of the DBS details section
        dbsScreen.assertDBSDetailsSectionStatus("Pending");

        //followin will assert the message content of the section
        dbsScreen.assertDBSMessageContent("SignedWithoutFile4");
    });

    it('Verify DBS screen status - Signed and Complete', () => {
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

        //following will perform login 
        loginScreen.loginIntoSite(process.env.USER, process.env.PASSWORD);

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

        //following will generate the acacium token
        apiScreen.getFaberAuthToken();
        browser.pause(5000);

        //following will generate the dt tiken
        apiScreen.getJoinDTAuthToken();
        browser.pause(5000);

        //following API will submit the DBS section from ADMIN with status as Signed and without File attached
        apiScreen.saveAndContinueDBSSectionAdminSignedWithoutFileComplete();
        browser.pause(10000);

        //following will perform logout operation
        sectionScreen.clickOnMenuBtn();
        //following will click on Profile menu option
        sectionScreen.clickOnProfileMenuOption();

        //following will click on Logout option
        sectionScreen.clickOnLogoutBtn();

        //following will assert login screen
        loginScreen.assertLoginScreen();

        //following will perform login 
        loginScreen.loginIntoSite(process.env.USER, process.env.PASSWORD);

        // //following will assert dashboard screen
        dashboardScreen.assertDashboardLbl();

        //following will click on Menu button (Hamburger menu)
        sectionScreen.clickOnMenuBtn();
        //following will click on Profile menu option
        sectionScreen.clickOnProfileMenuOption();

        //following will click on DBS Details section
        sectionScreen.clickOnDBSDetailsSection();

        //following will assert the status of the DBS details section
        dbsScreen.assertDBSDetailsSectionStatus("Complete");

        //followin will assert the message content of the section
        dbsScreen.assertDBSMessageContent("Complete");
    });

    it('Verify DBS screen status - Signed for SignDeclarationStatus from admin, section status as Pending', () =>{
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
        loginScreen.loginIntoSite(process.env.USER, process.env.PASSWORD);

        //following will assert dashboard screen
        dashboardScreen.assertDashboardLbl();

        //following will save and continue DBS section with status SIGNED from admin
        apiScreen.saveAndContinueDBSSectionAdminSignedWithFile();
        browser.pause(5000);

        //following will perform logout operation
        sectionScreen.clickOnMenuBtn();
        //following will click on Profile menu option
        sectionScreen.clickOnProfileMenuOption();

        //following will click on Logout option
        sectionScreen.clickOnLogoutBtn();

        //following will assert login screen
        loginScreen.assertLoginScreen();

        //following will perform login 
        loginScreen.loginIntoSite(process.env.USER, process.env.PASSWORD);

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

        //following will assert the status of the DBS details section
        dbsScreen.assertDBSDetailsSectionStatus("Pending");

        //followin will assert the message content of the section
        dbsScreen.assertDBSMessageContent("SignedWithFile");
    });

    /**
     * Following group of test cases will verify the Identification Document section screen
     */
    it('to verify the details of identification documents section - without name change', () => {
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
        apiScreen.uploadFile1ForIdentificationDocumentsSection();
        browser.pause(10000);

        //following will upload file 2
        apiScreen.uploadFile2ForIdentificationDocumentsSection();
        browser.pause(10000);

        //following will upload file 3
        apiScreen.uploadFile3ForIdentificationDocumentsSection();
        browser.pause(10000);

        //following will perform login 
        loginScreen.loginIntoSite(process.env.USER, process.env.PASSWORD);

        //following will save and continue the Identification documents section
        apiScreen.saveAndContinueRWCSection();
        browser.pause(20000);
        
        //following will assert dashboard screen
        dashboardScreen.assertDashboardLbl();
        
        sectionScreen.clickOnMenuBtn();
        sectionScreen.clickOnProfileMenuOption();

        //following will click on Right To Work Checks option
        sectionScreen.clickOnIdentificationDocumentSection();        

        //following will assert the page header of the Section
        identificationDocumentsScreen.assertIdentificationDocumentsPageHeader();

        //following will assert the status of the section
        identificationDocumentsScreen.assertSectionStatus();
    });

    it('to verify the details of identification documents section - with name change', () => {
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

        //following will upload file 1 
        apiScreen.uploadFile1ForIdentificationDocumentsSection();
        browser.pause(10000);

        //following will upload file 2
        apiScreen.uploadFile2ForIdentificationDocumentsSection();
        browser.pause(10000);

        //following will upload file 3
        apiScreen.uploadFile3ForIdentificationDocumentsSection();
        browser.pause(10000);

        //following will perform login 
        loginScreen.loginIntoSite(process.env.USER, process.env.PASSWORD);

        //following will upload changed name file
        apiScreen.uploadFileChangedNameForIdentificationDocumentsSection();
        browser.pause(10000);

        //following will save and continue the Identification documents section
        apiScreen.saveAndContinueRWCSectionWithChangedName();
        browser.pause(25000);
        
        //following will assert dashboard screen
        dashboardScreen.assertDashboardLbl();

        //following will perform logout operation
        sectionScreen.clickOnMenuBtn();
        //following will click on Profile menu option
        sectionScreen.clickOnProfileMenuOption();

        //following will click on Logout button
        sectionScreen.clickOnLogoutBtn();

        //following will assert login screen
        loginScreen.assertLoginScreen();

        //following will perform login 
        loginScreen.loginIntoSite(process.env.USER, process.env.PASSWORD);

        //following will assert dashboard screen
        dashboardScreen.assertDashboardLbl();
        
        sectionScreen.clickOnMenuBtn();
        sectionScreen.clickOnProfileMenuOption();

        //following will click on Right To Work Checks option
        sectionScreen.clickOnIdentificationDocumentSection();        

        //following will assert the page header of the Section
        identificationDocumentsScreen.assertIdentificationDocumentsPageHeader();

        //following will assert the status of the section
        identificationDocumentsScreen.assertSectionStatus();
    });

    /**
     * Following group of test cases will verify the Payment option section screen
     */
    it('Verify Payment option section with PAYE payment method', () => {
        //following method call will perform login and redirect user to dashboarad
        loginScreen.verifyUptoDashBoard();

        //following will click on Payment Option section
        sectionScreen.clickOnTaxAndNextOfKinSection();

        //following will assert that user is on Payment Option screen
        paymentOptionScreen.assertPaymentOptionPageHeader();

        //following will click on "PAYE" radio button
        paymentOptionScreen.clickOnPayeRadioBtn();

        //following will click on Save and Continue button
        paymentOptionScreen.clickOnSaveAndContinueBtn();
        browser.pause(5000);

        //following will click on Menu button - hamburger menu option
        sectionScreen.clickOnMenuBtn();
        // sectionScreen.clickOnProfileMenuOption();

        //following will click on Payment options section
        sectionScreen.clickOnTaxAndNextOfKinSection();
        browser.pause(5000);

        //following will assert that user is on Payment Option screen
        paymentOptionScreen.assertPaymentOptionPageHeader();
        
        //following will assert the status of the section
        paymentOptionScreen.assertSectionStatus();
    });

    it('Verify Payment option section with UMBRELLA payment method', () => {
        //following method call will perform login and redirect user to dashboarad
        loginScreen.verifyUptoDashBoard();

        //following will click on Payment Option section
        sectionScreen.clickOnTaxAndNextOfKinSection();

        //following will assert that user is on Payment Option screen
        paymentOptionScreen.assertPaymentOptionPageHeader();

        //following will click on "UMBRELLA" radio button
        paymentOptionScreen.clickOnUmbrellaRadioBtn();

        //following will click on Save and Continue button
        paymentOptionScreen.clickOnSaveAndContinueBtn();
        browser.pause(5000);

        //following will click on Menu button - hamburger menu option
        sectionScreen.clickOnMenuBtn();
        // sectionScreen.clickOnProfileMenuOption();

        //following will click on Payment Option section
        sectionScreen.clickOnTaxAndNextOfKinSection();
        browser.pause(5000);

        //following will assert that user is on Payment Option screen
        paymentOptionScreen.assertPaymentOptionPageHeader();
        
        //following will assert the status of the section
        paymentOptionScreen.assertSectionStatus();
    });

    /**
     * Following group of test cases will verify the Professional details section screen
     */
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

    /**
     * Following group of test cases will verify the Terms and Conditions section screen
     */
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

    /**
     * Following group of test cases will verify the Section status of every sections
     */
    // it('Verify status of the section Personal Details', () => {
    //     //following method call will perform login and redirect user on dashboard page
    //     loginScreen.verifyUptoDashBoardForSectionStatus();

    //     //following will click on Personal Details section
    //     sectionScreen.clickOnPersonalDetailsSection();

    //     //following will assert the Personal details screen
    //     	.assertPersonaDetailsPageLbl();

    //     //following will assert the section status of Personal Details section
    //     personalDetailsScreen.assertPersonaDetailsPageStatus();
    // });

    // it('Verify status of the section Interview', () => {
    //     //following method call will perform login and redirect user on dashboard page
    //     loginScreen.verifyUptoDashBoardForSectionStatus();
        
    //     //following will click on Interview section
    //     sectionScreen.clickOnInterviewSection();

    //     //following will assert the Interview details screen
    //     interviewDetailsScreen.assertInterviewPageLbl();

    //     //following will assert the section status of Interview section
    //     interviewDetailsScreen.assertInterviewPageStatus();
    // });

    // it('Verify status of the section Declaration and DBS', () => {
    //     //following method call will perform login and redirect user on dashboard page
    //     loginScreen.verifyUptoDashBoardForSectionStatus();
        
    //     //following will click on Declaration and DBS section
    //     sectionScreen.clickOnDBSDetailsSection();

    //     //following will assert the Declaration and DBS screen
    //     dbsScreen.assertDBSPageHeader();

    //     //following will assert the section status of Declaration and DBS section
    //     dbsScreen.assertDBSDetailsSectionStatus("Complete");
    // });

    // it('Verify status of the section Identification document', () => {
    //     //following method call will perform login and redirect user on dashboard page
    //     loginScreen.verifyUptoDashBoardForSectionStatus();
        
    //     //following will click on Identification document section
    //     sectionScreen.clickOnIdentificationDocumentSection();

    //     //following will assert the Identification document screen
    //     identificationDocumentScreen.assertIdentificationDocumentsPageHeader();

    //     //following will assert the section status of Identification document 
    //     identificationDocumentScreen.assertSectionStatus();
    // });

    // it('Verify status of the section Professional details', () => {
    //     //following method call will perform login and redirect user on dashboard page
    //     loginScreen.verifyUptoDashBoardForSectionStatus();
        
    //     //following will click on Professional details section
    //     sectionScreen.clickOnProfessionalDetailsSection();

    //     //following will assert the Professional details screen
    //     professionalDetailsScreen.assertProfessionalDetailsPageHeader();

    //     //following will assert the section status of Professional details
    //     professionalDetailsScreen.assertSectionStatus();
    // });

    // it('Verify status of the section References', () => {
    //     //following method call will perform login and redirect user on dashboard page
    //     loginScreen.verifyUptoDashBoardForSectionStatus();
        
    //     //following will click on References section
    //     sectionScreen.clickOnReferenceSection();

    //     //following will assert the References screen
    //     refereneScreen.assertReferencePageHeader();

    //     //following will assert the section status of references
    //     refereneScreen.assertSectionStatus();
    // });

    // it('Verify status of the section Training', () => {
    //     //following method call will perform login and redirect user on dashboard page
    //     loginScreen.verifyUptoDashBoardForSectionStatus();
        
    //     //following will click on Training section
    //     sectionScreen.clickOnTrainingSection();

    //     //following will assert the Training screen
    //     trainingScreen.assertTrainingPageHeader();

    //     //following will assert the section status of Training
    //     trainingScreen.assertTrainingSectionStatus();
    // });

    // it('Verify status of the section Payment method', () => {
    //     //following method call will perform login and redirect user on dashboard page
    //     loginScreen.verifyUptoDashBoardForSectionStatus();
        
    //     //following will click on Payment method section
    //     sectionScreen.clickOnPaymentMethodSection();

    //     //following will assert the Payment method screen
    //     paymentMethodScreen.assertPaymentOptionPageHeader();

    //     //following will assert the section status of Payment method
    //     paymentMethodScreen.assertSectionStatus();
    // });

    // it('Verify status of the section Terms and Conditions', () => {
    //     //following method call will perform login and redirect user on dashboard page
    //     loginScreen.verifyUptoDashBoardForSectionStatus();
        
    //     //following will click on Terms and Conditions section
    //     sectionScreen.clickOnTermsSndConditionsSection();

    //     //following will assert the Terms and Conditions screen
    //     termsAndConditionScreen.assertTermsAndConditionsPageHeader();

    //     //following will assert the section status of Terms and Conditions
    //     termsAndConditionScreen.assertSectionStatus();
    // });

    // /**
    //  * Following group of test cases will verify the References section screen
    //  */
    // it('Verify details of Reference section with 2 References', () => {
    //     //following method call will perform login and redirect user on dashboard page
    //     loginScreen.verifyUptoDashBoard();

    //     //following will click on Peronal Details section 
    //     sectionScreen.clickOnReferenceSection();
    //     browser.pause(5000);

    //     //following will assert the section heading of Reference section
    //     refereneScreen.assertReferencePageHeader();

    //     //following will fill out fileds of Reference 1
    //     refereneScreen.fillOutReference1();

    //     //following will fill out fields of Reference 2
    //     refereneScreen.fillOutReference2();

    //     //following will click on Save and Continue button
    //     refereneScreen.clickOnSaveAndContinueBtn();
    //     browser.pause(5000);

    //     //following will click on Menu button (hamburger menu)
    //     sectionScreen.clickOnMenuBtn();
    //     // sectionScreen.clickOnProfileMenuOption();

    //     //following will click on Peronal Details section 
    //     sectionScreen.clickOnReferenceSection();
    //     browser.pause(5000);

    //     //following will assert the section heading of Reference section
    //     refereneScreen.assertReferencePageHeader();

    //     //following will assert status of the References page
    //     refereneScreen.assertSectionStatus();
    // });

    // it('Verify details of Reference section with 3 References', () => {
    //     //following method call will perform login and redirect user on dashboard page
    //     loginScreen.verifyUptoDashBoard();

    //     //following will click on Peronal Details section 
    //     sectionScreen.clickOnReferenceSection();
    //     browser.pause(5000);

    //     //following will assert the section heading of Reference section
    //     refereneScreen.assertReferencePageHeader();

    //     //following will click on "Add another" button
    //     refereneScreen.clickOnAddAnotherBtn();

    //     //following will fill out fields of Reference 3
    //     refereneScreen.fillOutReference3();

    //     //following will click on Save and Continue button
    //     refereneScreen.clickOnSaveAndContinueBtn();
    //     browser.pause(5000);

    //     //following will click on Menu button (hamburger menu)
    //     sectionScreen.clickOnMenuBtn();
    //     // sectionScreen.clickOnProfileMenuOption();

    //     //following will click on Peronal Details section 
    //     sectionScreen.clickOnReferenceSection();
    //     browser.pause(5000);

    //     //following will assert the section heading of Reference section
    //     refereneScreen.assertReferencePageHeader();

    //     //following will assert status of the References page
    //     refereneScreen.assertSectionStatus();
    // });

    // it('Verify details of Reference section with 4 References', () => {
    //     //following method call will perform login and redirect user on dashboard page
    //     loginScreen.verifyUptoDashBoard();

    //     //following will click on Peronal Details section 
    //     sectionScreen.clickOnReferenceSection();
    //     browser.pause(5000);

    //     //following will assert the section heading of Reference section
    //     refereneScreen.assertReferencePageHeader();

    //     //following will click on "Add another" button
    //     refereneScreen.clickOnAddAnotherBtn();

    //     //following will fill out fields of Reference 4
    //     refereneScreen.fillOutReference4();

    //     //following will click on Save and Continue button
    //     refereneScreen.clickOnSaveAndContinueBtn();
    //     browser.pause(5000);

    //     //following will click on Menu button (hamburger menu)
    //     sectionScreen.clickOnMenuBtn();
    //     // sectionScreen.clickOnProfileMenuOption();

    //     //following will click on Peronal Details section 
    //     sectionScreen.clickOnReferenceSection();
    //     browser.pause(5000);

    //     //following will assert the section heading of Reference section
    //     refereneScreen.assertReferencePageHeader();

    //     //following will assert status of the References page
    //     refereneScreen.assertSectionStatus();
    // });
});