const expect = require("chai").expect;
global.tag = process.argv[3];

class sectionScreen {

    get menuBtn () { return $('//div[@id="mobile-nav-button"]')}

    get profileMenuOption () { return $('//h4[@id="nav-item-profile"]')}

    get personalDetailsSection  () { return $('//div[@id="navigation-section-list-item-personal-details"]')}

    get professionalDetailsSection () { return $('//div[@id="navigation-section-list-item-work-history-and-qualifications"]')}

    get gradeAndEmployerSection () { return $('//div[@id="navigation-section-list-item-grade-and-employer"]')}

    get generalNurseDetailsSection () { return $('//div[@id="navigation-section-list-item-general-nurse-details"]')}

    get nmcSection () { return $('//div[@id="navigation-section-list-item-nmc-check"]')}

    get trainingSection () { return $('//div[@id="navigation-section-list-item-training"]')}

    get taxAndNextOfKinSection () { return $('//div[@id="navigation-section-list-item-tax-and-next-of-kin"]')}

    get dbsDetailsSection () { return $('//div[@id="navigation-section-list-item-dbs"]')}

    get referenceSection () { return $('//div[@id="navigation-section-list-item-references"]')}

    get identificationDocumentSection () { return $('//div[@id="navigation-section-list-item-identification-documents"]')}

    get termsAndConditionsSection () { return $('//div[@id="navigation-section-list-item-terms-and-conditions"]')}

    get logoutBtn () { return $('//button[@id="nav-item-logout"]')}

    get discardChangesBtn () { return $('//button[@id="discard-changes-button"]')}

    clickOnMenuBtn () {
        this.menuBtn.waitForExist({timeout: 60000});
        this.menuBtn.click();
        browser.pause(1000);
    }

    clickOnLogoutBtn () { 
        this.logoutBtn.waitForExist({timeout: 60000});
        this.logoutBtn.click();
    }

    clickOnDiscardChangesBtn () {
        this.discardChangesBtn.waitForExist({timeout: 60000});
        this.discardChangesBtn.click();
    }

    clickOnProfileMenuOption () {
        browser.pause(1000);
        this.profileMenuOption.waitForExist({timeout: 60000});
        this.profileMenuOption.click();
        browser.pause(3000);
    }

    clickOnPersonalDetailsSection () { 
        this.personalDetailsSection.waitForExist({timeout: 60000});
        this.personalDetailsSection.click();
        browser.pause(2000);
    }

    clickOnProfessionalDetailsSection () {
        this.professionalDetailsSection.waitForExist({timeout: 60000});
        this.professionalDetailsSection.click();
        browser.pause(2000);
    }

    clickOnGradeAndEmployerSection () { 
        this.gradeAndEmployerSection.waitForExist({timeout: 60000});
        this.gradeAndEmployerSection.click();
        browser.pause(2000);
    }

    clickOnGeneralNurseDetailsSection () { 
        this.generalNurseDetailsSection.waitForExist({timeout: 60000});
        this.generalNurseDetailsSection.click();
        browser.pause(2000);
    }

    clickOnNMCSection () {
        this.nmcSection.waitForExist({timeout: 60000});
        this.nmcSection.click();
        browser.pause(2000);
    }

    clickOnTrainingSection () {
        this.trainingSection.waitForExist({timeout: 60000});
        this.trainingSection.click();
        browser.pause(2000);
    }

    clickOnTaxAndNextOfKinSection () { 
        // browser.touchAction([
        //     { action: 'press', x: 1000, y: 2000 },
        //     { action: 'moveTo', x: 1000, y: 1000 },
        //     'release'
        // ]);
        this.taxAndNextOfKinSection.scrollIntoView();
        browser.pause(1000);
        this.taxAndNextOfKinSection.waitForExist({timeout: 60000});
        this.taxAndNextOfKinSection.click();
        browser.pause(2000);
    }

    clickOnDBSDetailsSection () {
        this.dbsDetailsSection.waitForExist({timeout: 60000});
        this.dbsDetailsSection.click();
        browser.pause(2000);
    }

    clickOnTermsSndConditionsSection () {
        this.termsAndConditionsSection.waitForExist({timeout: 60000});
        this.termsAndConditionsSection.click();
        browser.pause(2000);
    }

    clickOnReferenceSection () {
        this.referenceSection.waitForExist({timeout: 60000});
        this.referenceSection.click();
        browser.pause(2000);
    }

    clickOnIdentificationDocumentSection () {
        this.identificationDocumentSection.waitForExist({timeout: 60000});
        this.identificationDocumentSection.click();
        browser.pause(2000);
    }
}
module.exports = new sectionScreen();