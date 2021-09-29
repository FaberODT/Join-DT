const expect = require("chai").expect;
global.tag = process.argv[3];

class referenceScreen {

    get pageHeaderLbl () { return $('//h1[@id="pageTitle"]')}

    get saveBtn () { return $('//button[@id="saveButton"]')}

    get sectionStatus () { return $('//div[@id="statusMessageHeader"]/span')}

    get refName1 () { return $('//input[@id="Reference-0-RefereeName"]')}

    get refEmail1 () { return $('//input[@id="Reference-0-RefereeWorkEmailAddress"]')}

    get refJobTitle1 () { return $('//input[@id="Reference-0-JobTitle"]')}

    get refEmployer1 () { return $('//input[@id="Reference-0-Employer"]')}

    get refFrom1 () { return $('//input[@id="Reference-0-ReferencePeriodStartDate"]')}

    get refTo1 () { return $('//input[@id="Reference-0-ReferencePeriodEndDate"]')}

    get refName2 () { return $('//input[@id="Reference-1-RefereeName"]')}

    get refEmail2 () { return $('//input[@id="Reference-1-RefereeWorkEmailAddress"]')}

    get refJobTitle2 () { return $('//input[@id="Reference-1-JobTitle"]')}

    get refEmployer2 () { return $('//input[@id="Reference-1-Employer"]')}

    get refFrom2 () { return $('//input[@id="Reference-1-ReferencePeriodStartDate"]')}

    get refTo2 () { return $('//input[@id="Reference-1-ReferencePeriodEndDate"]')}

    assertReferencePageHeader () {
        this.pageHeaderLbl.waitForExist({timeout: 60000});
        expect(this.pageHeaderLbl.getText()).to.equal("6. References");
    }

    clickOnSaveAndContinueBtn () {
        this.saveBtn.waitForExist({timeout: 60000});
        this.saveBtn.click();
    }

    assertSectionStatus () {
        this.sectionStatus.waitForExist({timeout: 60000});
        expect(this.sectionStatus.getText()).to.equal("Pending");
    }

    enterValueForRefName1 () {
        this.refName1.waitForExist({timeout: 60000});
        this.refName1.scrollIntoView();
        this.refName1.setValue("Rio");
    }

    enterValueForRefName2 () {
        this.refName2.waitForExist({timeout: 60000});
        this.refName2.scrollIntoView();
        this.refName2.setValue("Denver");
    }

    enterValueForEmail1 () {
        this.refEmail1.waitForExist({timeout: 60000});
        this.refEmail1.scrollIntoView();
        browser.pause(1000);
        this.refEmail1.setValue("rio@test.com");
    }
    
    enterValueForEmail2 () {
        this.refEmail2.waitForExist({timeout: 60000});
        this.refEmail2.scrollIntoView();
        browser.pause(1000);
        this.refEmail2.setValue("denver@test.com");
    }

    enterValueForJobTitle1() {
        this.refJobTitle1.waitForExist({timeout: 60000});
        this.refJobTitle1.scrollIntoView();
        this.refJobTitle1.setValue("Senior");
    }
    
    enterValueForJobTitle2() {
        this.refJobTitle2.waitForExist({timeout: 60000});
        this.refJobTitle2.scrollIntoView();
        this.refJobTitle2.setValue("Senior");
    }

    enterValueForEmployer1() {
        this.refEmployer1.waitForExist({timeout: 60000});
        this.refEmployer1.scrollIntoView();
        this.refEmployer1.setValue("PMC");
    }
    
    enterValueForEmployer2() {
        this.refEmployer2.waitForExist({timeout: 60000});
        this.refEmployer2.scrollIntoView();
        this.refEmployer2.setValue("PMC");
    }

    enterValueForDateFrom1 () {
        this.refFrom1.waitForExist({timeout: 60000});
        this.refFrom1.scrollIntoView();
        browser.pause(1000);
        this.refFrom1.setValue("012004");
    }
    
    enterValueForDateFrom2 () {
        this.refFrom2.waitForExist({timeout: 60000});
        this.refFrom2.scrollIntoView();
        browser.pause(1000);
        this.refFrom2.setValue("012005");
    }

    enterValueForDateTo1 () {
        this.refTo1.waitForExist({timeout: 60000});
        this.refTo1.scrollIntoView();
        this.refTo1.setValue("012006");
    }

    enterValueForDateTo2 () {
        this.refTo2.waitForExist({timeout: 60000});
        this.refTo2.scrollIntoView();
        this.refTo2.setValue("012009");
    }

    fillOutReference1 () {
        this.enterValueForRefName1();
        this.enterValueForEmail1();
        this.enterValueForJobTitle1();
        this.enterValueForEmployer1();
        this.enterValueForDateFrom1();
        this.enterValueForDateTo1();
    }
    
    fillOutReference2 () {
        this.enterValueForRefName2();
        this.enterValueForEmail2();
        this.enterValueForJobTitle2();
        this.enterValueForEmployer2();
        this.enterValueForDateFrom2();
        this.enterValueForDateTo2();
    }
}
module.exports = new referenceScreen();