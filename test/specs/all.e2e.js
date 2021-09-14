const { assert, expect } = require('chai');
const apiScreen = require('../helper/setupUser');
const loginScreen = require('../pageobjects/login.screen');
const dashboardScreen = require('../pageobjects/dashBoard.screen');
const nmcScreen = require('../pageobjects/nmc.screen');
const sectionScreen = require('../pageobjects/sections.screen');
const trainingScreen = require('../pageobjects/training.screen');
const dbsScreen = require('../pageobjects/dbs.screen');
const generalNurseDetailsScreen = require('../pageobjects/generalNurseDetails.screen');
const gradeAndEmployerScreen = require('../pageobjects/gradeAndEmployer.screen');
const personalDetailScreen = require('../pageobjects/personalDetails.screen');
const refereneScreen = require('../pageobjects/reference.screen');
const rightToWorkChecksScreen = require('../pageobjects/rightToWorkChecks.screen');
const taxAndNextOfKinScreen = require('../pageobjects/taxAndNextOfKin.screen');


describe('Join Pulse E2E Environment: ', () => {

    afterEach('Logout functions only', () => {
        //following will perform logout operation
        sectionScreen.clickOnMenuBtn();
        sectionScreen.clickOnLogoutBtn();

        //following will assert login screen
        loginScreen.assertLoginScreen();
    });
    
    it('Update NMC section & check section status', () => {
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

        // //following will click on NMC Section 
        // dashboardScreen.clickOnNMCCheckSection();

        //following will click on Menu button (Hamburger menu)
        sectionScreen.clickOnMenuBtn();

        //following will click on Profile menu option 
        sectionScreen.clickOnProfileMenuOption();

        //following will click on NMC Section
        sectionScreen.clickOnNMCSection();
        
        //following will assert that user is on NMC Checking page
        nmcScreen.assertNMCCheckPageHeader();

        //following will enter value into NMC Pin text box
        nmcScreen.enterNMCPinValue();

        //following will click on Save and Continue button
        nmcScreen.clickOnSaveAndContinueBtn();
        browser.pause(5000);

        sectionScreen.clickOnMenuBtn();
        sectionScreen.clickOnProfileMenuOption();

        //following will change the Section back to NMC Checking
        sectionScreen.clickOnNMCSection();

        browser.pause(5000);
        //following will assert that user is back on NMC Checking page
        nmcScreen.assertNMCCheckPageHeader();

        //following will assert status of the NMC Checking page
        nmcScreen.assertNMCSectionStatus();

        // //following will assert NMC section message
        // nmcScreen.assertNMCMessage();

        // //following will perform logout operation
        // sectionScreen.clickOnMenuBtn();
        // sectionScreen.clickOnLogoutBtn();

        // //following will assert login screen
        // loginScreen.assertLoginScreen();
    });

    it('to verify the title of the DBS section screen after saving it', () => {
        //following will fetch the acacium Auth Token
        apiScreen.getFaberAuthToken();
        browser.pause(5000);

        //following will fetch the JoinPulse Auth token
        apiScreen.getJoinPulseAuthToken();
        browser.pause(5000);

        //following will upload the certificate for the training section
        apiScreen.uploadCertificateForDBSSection();
        browser.pause(15000);

        //following will save and continue the training section with all mandate details
        apiScreen.saveAndContinueDBSSection();
        browser.pause(15000);

        //following will open browser and load the url
        browser.url("https://e2e.joinpulse.co.uk");

        //following will perform login 
        loginScreen.loginIntoSite("fabertester+nimesh001-e2e@gmail.com","Password123");

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
        dbsScreen.assertDBSDetailsSectionStatus();
        
        // //following will perform logout operation
        // sectionScreen.clickOnMenuBtn();
        // sectionScreen.clickOnLogoutBtn();

        // //following will assert login screen
        // loginScreen.assertLoginScreen();
    });

    it('Verify details of General Information section', () => {
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
        sectionScreen.clickOnGeneralNurseDetailsSection();
        browser.pause(5000);

        //following will assert that useris on General Nurse details section
        generalNurseDetailsScreen.assertGeneralNurseDetailsPageLbl();

        //following will assert the statusof the General Nurse Details section
        generalNurseDetailsScreen.assertGeneralNurseDetailsPageStatus();

        //following will assert the General Nurse Details
        generalNurseDetailsScreen.assertGeneralNurseDetails();

        // //following will perform logout operation
        // sectionScreen.clickOnMenuBtn();
        // sectionScreen.clickOnLogoutBtn();

        // //following will assert login screen
        // loginScreen.assertLoginScreen();
        
    });

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
        
        // //following will perform logout operation
        // sectionScreen.clickOnMenuBtn();
        // sectionScreen.clickOnLogoutBtn();

        // //following will assert login screen
        // loginScreen.assertLoginScreen();
    });

    it('Verify details of references section', () => {
        //following will fetch the acacium Auth Token
        apiScreen.getFaberAuthToken();
        browser.pause(5000);

        //following will fetch the JoinPulse Auth token
        apiScreen.getJoinPulseAuthToken();
        browser.pause(5000);

        //following will save the References section 
        apiScreen.saveAndContinueReferencesSection();
        browser.pause(15000);

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

        // //following will fill out fileds of Reference 1
        // refereneScreen.fillOutReference1();

        // //following will fill out fields of Reference 2
        // refereneScreen.fillOutReference2();

        // //following will click on Save and Continue button
        // refereneScreen.clickOnSaveAndContinueBtn();
        // browser.pause(5000);

        // //following will click on Menu button (hamburger menu)
        // sectionScreen.clickOnMenuBtn();
        // sectionScreen.clickOnProfileMenuOption();

        // //following will click on Peronal Details section 
        // sectionScreen.clickOnReferenceSection();
        // browser.pause(5000);

        //following will assert the section heading of Reference section
        refereneScreen.assertReferencePageHeader();

        //following will assert status of the References page
        refereneScreen.assertSectionStatus();

        // //following will perform logout operation
        // sectionScreen.clickOnMenuBtn();
        // sectionScreen.clickOnLogoutBtn();

        // //following will assert login screen
        // loginScreen.assertLoginScreen();
    });

    it('to verify the details of right to work checks section', () => {
        // //following will open browser and load the url
        browser.url("https://e2e.joinpulse.co.uk");

        //following will fetch the acacium Auth Token
        apiScreen.getFaberAuthToken();
        browser.pause(5000);

        //following will fetch the JoinPulse Auth token
        apiScreen.getJoinPulseAuthToken();
        browser.pause(5000);

        // //following will perform login 
        loginScreen.loginIntoSite("fabertester+nimesh001-e2e@gmail.com","Password123");

        //following will upload file 1 
        apiScreen.uploadFile1ForRightToWorkChecksSection();
        browser.pause(15000);

        //following will upload file 2
        apiScreen.uploadFile2ForRightToWorkChecksSection();
        browser.pause(15000);

        //following will upload file 3
        apiScreen.uploadFile3ForRightToWorkChecksSection();
        browser.pause(15000);

        // //following will upload file 4
        // apiScreen.uploadFile4ForRightToWorkChecksSection();
        // browser.pause(10000);

        //following will save and continue the Right To Work Checkes section
        apiScreen.saveAndContinueRWCSection();
        browser.pause(8000);

        // //following will assert dashboard screen
        dashboardScreen.assertDashboardLbl();

        sectionScreen.clickOnMenuBtn();
        sectionScreen.clickOnProfileMenuOption();

        //following will click on Right To Work Checks option
        sectionScreen.clickOnRightToWorkChecksSection();        

        //following will assert the page header of the Section
        rightToWorkChecksScreen.assertRightToWorkChecksPageHeader();

        //following will assert the status of the section
        rightToWorkChecksScreen.assertSectionStatus();

        // //following will perform logout operation
        // sectionScreen.clickOnMenuBtn();
        // sectionScreen.clickOnLogoutBtn();

        // //following will assert login screen
        // loginScreen.assertLoginScreen();
    });

    it('Verify Tax and next kin section with LIMITED COMPANY payment option - using API', () => {
        //following will fetch the acacium Auth Token
        apiScreen.getFaberAuthToken();
        browser.pause(5000);

        //following will fetch the JoinPulse Auth token
        apiScreen.getJoinPulseAuthToken();
        browser.pause(5000);

        //following will upload certificate for the Incorporation
        apiScreen.uploadCertificateForIncorporationNextOfKin();
        browser.pause(15000);

        //following will upload certificate for the Business bank account
        apiScreen.uploadCertificateForBusinessNextOfKin();
        browser.pause(15000);

        //following will save and continue the Next of the Kin section
        apiScreen.saveAndContinueNextOfKinSection();
        browser.pause(5000);

        //following will open browser and load the url
        browser.url("https://e2e.joinpulse.co.uk");

        //following will perform login 
        loginScreen.loginIntoSite("fabertester+nimesh001-e2e@gmail.com","Password123");

        // //following will assert dashboard screen
        dashboardScreen.assertDashboardLbl();

        //following will click on Menu button (Hamburger menu)
        sectionScreen.clickOnMenuBtn();
        sectionScreen.clickOnProfileMenuOption();
        sectionScreen.clickOnTaxAndNextOfKinSection();
        browser.pause(8000);
 
        //following will assert that user is on Tax and next of kin screen
        taxAndNextOfKinScreen.assertTaxAndNextOfKinPageHeader();
        
        //following will assert the status of the section
        taxAndNextOfKinScreen.assertSectionStatus();

        // //following will perform logout operation
        // sectionScreen.clickOnMenuBtn();
        // sectionScreen.clickOnLogoutBtn();

        // //following will assert login screen
        // loginScreen.assertLoginScreen();
    });

    it('Verify Tax and next kin section with PAYE payment option', () => {
        //following will open browser and load the url
        browser.url("https://e2e.joinpulse.co.uk");

        //following will perform login 
        loginScreen.loginIntoSite("fabertester+nimesh001-e2e@gmail.com","Password123");

        // //following will assert dashboard screen
        dashboardScreen.assertDashboardLbl();

        sectionScreen.clickOnMenuBtn();
        sectionScreen.clickOnProfileMenuOption();

        //following will click on Tax and next of kin section
        sectionScreen.clickOnTaxAndNextOfKinSection();

        //following will assert that user is on Tax and next of kin screen
        taxAndNextOfKinScreen.assertTaxAndNextOfKinPageHeader();

        //following will click on "PAYE" radio button
        taxAndNextOfKinScreen.clickOnPayeRadioBtn();

        //following will enter First Name
        taxAndNextOfKinScreen.enterFirstName("Nimesh");

        //following will enter Last Name
        taxAndNextOfKinScreen.enterLastName("Bhatt");

        //following will enter Phone number
        taxAndNextOfKinScreen.enterPhone("07912345678");

        //following will enter relation ship
        taxAndNextOfKinScreen.enterRelationShip("Friend");

        //following will click on Save and Continue button
        taxAndNextOfKinScreen.clickOnSaveAndContinueBtn();
        browser.pause(8000);

        sectionScreen.clickOnMenuBtn();
        sectionScreen.clickOnProfileMenuOption();

        //following will click on Tax and next of kin section
        sectionScreen.clickOnTaxAndNextOfKinSection();
        browser.pause(8000);

        //following will assert that user is on Tax and next of kin screen
        taxAndNextOfKinScreen.assertTaxAndNextOfKinPageHeader();
        
        //following will assert the status of the section
        taxAndNextOfKinScreen.assertSectionStatus();

        //following will assert the section values
        taxAndNextOfKinScreen.fetchPAYEValues();

        // //following will perform logout operation
        // sectionScreen.clickOnMenuBtn();
        // sectionScreen.clickOnLogoutBtn();

        // //following will assert login screen
        // loginScreen.assertLoginScreen();
    });

    it('Verify Tax and next kin section with UMBRELLA payment option', () => {
        //following will open browser and load the url
        browser.url("https://e2e.joinpulse.co.uk");
        //following will perform login 
        loginScreen.loginIntoSite("fabertester+nimesh001-e2e@gmail.com","Password123");

        // //following will assert dashboard screen
        dashboardScreen.assertDashboardLbl();

        sectionScreen.clickOnMenuBtn();
        sectionScreen.clickOnProfileMenuOption();

        //following will click on Tax and next of kin section
        sectionScreen.clickOnTaxAndNextOfKinSection();

        //following will assert that user is on Tax and next of kin screen
        taxAndNextOfKinScreen.assertTaxAndNextOfKinPageHeader();

        //following will click on "UMBRELLA" radio button
        taxAndNextOfKinScreen.clickOnUmbrellaRadioBtn();
        //following will enter Umbrella Company name 
        taxAndNextOfKinScreen.enterUmbrellaCompanyName("Umbrella!");

        //following will enter First Name
        taxAndNextOfKinScreen.enterFirstName("Nimesh");

        //following will enter Last Name
        taxAndNextOfKinScreen.enterLastName("Bhatt");

        //following will enter Phone number
        taxAndNextOfKinScreen.enterPhone("07912345678");

        //following will enter relation ship
        taxAndNextOfKinScreen.enterRelationShip("Friend");

        //following will click on Save and Continue button
        taxAndNextOfKinScreen.clickOnSaveAndContinueBtn();
        browser.pause(8000);

        sectionScreen.clickOnMenuBtn();
        sectionScreen.clickOnProfileMenuOption();

        //following will click on Tax and next of kin section
        sectionScreen.clickOnTaxAndNextOfKinSection();
        browser.pause(8000);

        //following will assert that user is on Tax and next of kin screen
        taxAndNextOfKinScreen.assertTaxAndNextOfKinPageHeader();
        
        //following will assert the status of the section
        taxAndNextOfKinScreen.assertSectionStatus();

        //following will fetch Umbrella company name
        taxAndNextOfKinScreen.fetchUmbrellaCompanyName();
        //following will assert the section values
        taxAndNextOfKinScreen.fetchPAYEValues();

        //  //following will perform logout operation
        // sectionScreen.clickOnMenuBtn();
        // sectionScreen.clickOnLogoutBtn();

        // //following will assert login screen
        // loginScreen.assertLoginScreen();
    });

    it('add certificate to training section - using API', () => {
        //following will fetch the acacium Auth Token
        apiScreen.getFaberAuthToken();
        browser.pause(5000);

        //following will fetch the JoinPulse Auth token
        apiScreen.getJoinPulseAuthToken();
        browser.pause(5000);

        //following will upload the certificate for the training section
        apiScreen.uploadFileForTrainingSection();
        browser.pause(10000);

        //following will open browser and load the url
        browser.url("https://e2e.joinpulse.co.uk");

        //following will upload the certificate for the training section
        apiScreen.uploadFileForTrainingSection1();
        browser.pause(10000);

        //following will save and continue the training section with all mandate details
        apiScreen.saveAndContinueTrainingSection();
        browser.pause(10000);

        //following will perform login 
        loginScreen.loginIntoSite("fabertester+nimesh001-e2e@gmail.com","Password123");

        // //following will assert dashboard screen
        dashboardScreen.assertDashboardLbl();

        //following will click on Menu button (Hamburger menu)
        sectionScreen.clickOnMenuBtn();
        sectionScreen.clickOnProfileMenuOption();
        sectionScreen.clickOnTrainingSection();
        
        //following will assert training screen
        trainingScreen.assertTrainingPageHeader();

        //following will assert the Status of the Training Section
        trainingScreen.assertTrainingSectionStatus();

        // //following will click on Menu button (Hamburger menu)
        // sectionScreen.clickOnMenuBtn();
        
        // //following will click on Logout button
        // sectionScreen.clickOnLogoutBtn();

        // //following will assert login screen
        // loginScreen.assertLoginScreen();
    });

    // it('verify training section after removing certificate', () => {
    //     //following will open browser and load the url
    //     browser.url("https://e2e.joinpulse.co.uk");

    //     //following will perform login 
    //     loginScreen.loginIntoSite("fabertester+nimesh001-e2e@gmail.com","Password123");

    //     // //following will assert dashboard screen
    //     dashboardScreen.assertDashboardLbl();

    //     //following will click on Menu button (Hamburger menu)
    //     sectionScreen.clickOnMenuBtn();
    //     sectionScreen.clickOnProfileMenuOption();
    //     sectionScreen.clickOnTrainingSection();
        
    //     //following will assert training screen
    //     trainingScreen.assertTrainingPageHeader();

    //     // //following will click on Delete button of the first Certificate
    //     // trainingScreen.clickFirstCertiDeleteIcon();

    //     // //following will click on delete button from certificate delete confirmation pop-up
    //     // trainingScreen.clickCertiDeleteConfirmation();

    //     //following will deselect the Counter Fraud check box in order to remove the uploaded certificate
    //     trainingScreen.clickOnCertificateCheckBoxes();

    //     //following will click on Save and Continue button
    //     trainingScreen.clickOnSaveAndContinueBtn();

    //     //following will click on Menu button (Hamburger menu)
    //     sectionScreen.clickOnMenuBtn();
    //     sectionScreen.clickOnProfileMenuOption();
    //     sectionScreen.clickOnTrainingSection();
        
    //     //following will assert training screen
    //     trainingScreen.assertTrainingPageHeader();

    //     //following will assert the section status
    //     trainingScreen.assertTrainingSectionStatus();

    //     // //following will click on Menu button (Hamburger menu)
    //     // sectionScreen.clickOnMenuBtn();
        
    //     // //following will click on Logout button
    //     // sectionScreen.clickOnLogoutBtn();

    //     // //following will assert login screen
    //     // loginScreen.assertLoginScreen();
    // });

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
        browser.url("https://e2e.joinpulse.co.uk");

        // //following will perform login 
        loginScreen.loginIntoSite("fabertester+nimesh001-e2e@gmail.com","Password123");

        // //following will assert dashboard screen
        dashboardScreen.assertDashboardLbl();

        sectionScreen.clickOnMenuBtn();
        sectionScreen.clickOnProfileMenuOption();

        //following will click on Peronal Details section 
        sectionScreen.clickOnPersonalDetailsSection();
        browser.pause(5000);

        //following assert that user is on Personal Details page
        personalDetailScreen.assertPersonaDetailsPageLbl();

        //following will assert the status of the Personal Details page
        personalDetailScreen.assertPersonaDetailsPageStatus();

        //following will assert the Personal Details
        personalDetailScreen.assertPersonalDetails();

        // //following will perform logout operation
        // sectionScreen.clickOnMenuBtn();
        // sectionScreen.clickOnLogoutBtn();

        // //following will assert login screen
        // loginScreen.assertLoginScreen();
    });
});