require('dotenv').config();
const { assert, expect } = require('chai');
const apiScreen = require('../helper/setupUser');
const loginScreen = require('../pageobjects/login.screen');
const dashboardScreen = require('../pageobjects/dashBoard.screen');
const sectionScreen = require('../pageobjects/sections.screen');
const personalDetailsScreen = require('../pageobjects/personalDetails.screen');
const interviewDetailsScreen = require('../pageobjects/interview.screen');
const dbsScreen = require('../pageobjects/dbs.screen');
const identificationDocumentScreen = require('../pageobjects/identificationDocumentsScreen.screen');
const professionalDetailsScreen = require('../pageobjects/professionalDetails.screen');
const refereneScreen = require('../pageobjects/reference.screen');
const trainingScreen = require('../pageobjects/training.screen');
const paymentMethodScreen = require('../pageobjects/paymentOptions.screen');
const termsAndConditionScreen = require('../pageobjects/termsAndConditions.screen');

describe('verify the reference screen of Join-DT', () => {
    beforeEach('Login and Redirect to Reference section', () => {
        //following will open browser and load the url
        browser.url(process.env.E2EPORTAL);

        //following will perform login 
        loginScreen.loginIntoSite(process.env.USER1, process.env.PASSWORD);

        //following will assert dashboard screen
        dashboardScreen.assertDashboardLbl();

        //following will click on Menu button (Hamburger icon)
        sectionScreen.clickOnMenuBtn();

        //following will click on Profile menu option
        sectionScreen.clickOnProfileMenuOption();
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

    it('Verify status of the section Personal Details', () => {
        //following will click on Personal Details section
        sectionScreen.clickOnPersonalDetailsSection();

        //following will assert the Personal details screen
        personalDetailsScreen.assertPersonaDetailsPageLbl();

        //following will assert the section status of Personal Details section
        personalDetailsScreen.assertPersonaDetailsPageStatus();
    });

    it('Verify status of the section Interview', () => {
        //following will click on Interview section
        sectionScreen.clickOnInterviewSection();

        //following will assert the Interview details screen
        interviewDetailsScreen.assertInterviewPageLbl();

        //following will assert the section status of Interview section
        interviewDetailsScreen.assertInterviewPageStatus();
    });

    it('Verify status of the section Declaration and DBS', () => {
        //following will click on Declaration and DBS section
        sectionScreen.clickOnDBSDetailsSection();

        //following will assert the Declaration and DBS screen
        dbsScreen.assertDBSPageHeader();

        //following will assert the section status of Declaration and DBS section
        dbsScreen.assertDBSDetailsSectionStatus("Complete");
    });

    it('Verify status of the section Identification document', () => {
        //following will click on Identification document section
        sectionScreen.clickOnIdentificationDocumentSection();

        //following will assert the Identification document screen
        identificationDocumentScreen.assertIdentificationDocumentsPageHeader();

        //following will assert the section status of Identification document 
        identificationDocumentScreen.assertSectionStatus();
    });

    it('Verify status of the section Professional details', () => {
        //following will click on Professional details section
        sectionScreen.clickOnProfessionalDetailsSection();

        //following will assert the Professional details screen
        professionalDetailsScreen.assertProfessionalDetailsPageHeader();

        //following will assert the section status of Professional details
        professionalDetailsScreen.assertSectionStatus();
    });

    it('Verify status of the section References', () => {
        //following will click on References section
        sectionScreen.clickOnReferenceSection();

        //following will assert the References screen
        refereneScreen.assertReferencePageHeader();

        //following will assert the section status of references
        refereneScreen.assertSectionStatus();
    });

    it('Verify status of the section Training', () => {
        //following will click on Training section
        sectionScreen.clickOnTrainingSection();

        //following will assert the Training screen
        trainingScreen.assertTrainingPageHeader();

        //following will assert the section status of Training
        trainingScreen.assertTrainingSectionStatus();
    });

    it('Verify status of the section Payment method', () => {
        //following will click on Payment method section
        sectionScreen.clickOnPaymentMethodSection();

        //following will assert the Payment method screen
        paymentMethodScreen.assertPaymentOptionPageHeader();

        //following will assert the section status of Payment method
        paymentMethodScreen.assertSectionStatus();
    });

    it('Verify status of the section Terms and Conditions', () => {
        //following will click on Terms and Conditions section
        sectionScreen.clickOnTermsSndConditionsSection();

        //following will assert the Terms and Conditions screen
        termsAndConditionScreen.assertTermsAndConditionsPageHeader();

        //following will assert the section status of Terms and Conditions
        termsAndConditionScreen.assertSectionStatus();
    });
});