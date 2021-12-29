const expect = require("chai").expect;
global.tag = process.argv[3];

class referenceScreen {

    get pageHeaderLbl () { return $('//h1[@id="pageTitle"]')}

    get saveBtn () { return $('//button[@id="submit-button"]')}

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

    get refName3 () { return $('//input[@id="Reference-2-RefereeName"]')}

    get refEmail3 () { return $('//input[@id="Reference-2-RefereeWorkEmailAddress"]')}

    get refJobTitle3 () { return $('//input[@id="Reference-2-JobTitle"]')}

    get refEmployer3 () { return $('//input[@id="Reference-2-Employer"]')}

    get refFrom3 () { return $('//input[@id="Reference-2-ReferencePeriodStartDate"]')}

    get refTo3 () { return $('//input[@id="Reference-2-ReferencePeriodEndDate"]')}

    get refName4 () { return $('//input[@id="Reference-3-RefereeName"]')}

    get refEmail4 () { return $('//input[@id="Reference-3-RefereeWorkEmailAddress"]')}

    get refJobTitle4 () { return $('//input[@id="Reference-3-JobTitle"]')}

    get refEmployer4 () { return $('//input[@id="Reference-3-Employer"]')}

    get refFrom4 () { return $('//input[@id="Reference-3-ReferencePeriodStartDate"]')}

    get refTo4 () { return $('//input[@id="Reference-3-ReferencePeriodEndDate"]')}

    get addAnotherBtn () { return $('//button[@id="add-Reference"]')}

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

    enterValueForRefName3 () {
        this.refName3.waitForExist({timeout: 60000});
        this.refName3.scrollIntoView();
        this.refName3.setValue("Tokyo");
    }

    enterValueForRefName4 () {
        this.refName4.waitForExist({timeout: 60000});
        this.refName4.scrollIntoView();
        this.refName4.setValue("Nairobi");
    }

    enterValueForEmail1 () {
        this.refEmail1.waitForExist({timeout: 60000});
        this.refEmail1.scrollIntoView();
        // browser.pause(100);
        this.refEmail1.setValue("rio@test.com");
    }
    
    enterValueForEmail2 () {
        this.refEmail2.waitForExist({timeout: 60000});
        this.refEmail2.scrollIntoView();
        // browser.pause(100);
        this.refEmail2.setValue("denver@test.com");
    }

    enterValueForEmail3 () {
        this.refEmail3.waitForExist({timeout: 60000});
        this.refEmail3.scrollIntoView();
        // browser.pause(100);
        this.refEmail3.setValue("tokyp@test.com");
    }

    enterValueForEmail4 () {
        this.refEmail4.waitForExist({timeout: 60000});
        this.refEmail4.scrollIntoView();
        // browser.pause(100);
        this.refEmail4.setValue("nairobi@test.com");
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

    enterValueForJobTitle3() {
        this.refJobTitle3.waitForExist({timeout: 60000});
        this.refJobTitle3.scrollIntoView();
        this.refJobTitle3.setValue("Senior");
    }

    enterValueForJobTitle4() {
        this.refJobTitle4.waitForExist({timeout: 60000});
        this.refJobTitle4.scrollIntoView();
        this.refJobTitle4.setValue("Senior");
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

    enterValueForEmployer3() {
        this.refEmployer3.waitForExist({timeout: 60000});
        this.refEmployer3.scrollIntoView();
        this.refEmployer3.setValue("PMC");
    }

    enterValueForEmployer4() {
        this.refEmployer4.waitForExist({timeout: 60000});
        this.refEmployer4.scrollIntoView();
        this.refEmployer4.setValue("PMC");
    }

    enterValueForDateFrom1 () {
        this.refFrom1.waitForExist({timeout: 60000});
        this.refFrom1.scrollIntoView();
        this.refFrom1.click();
        browser.pause(1000);
        this.refFrom1.setValue("012001");
    }
    
    enterValueForDateFrom2 () {
        this.refFrom2.waitForExist({timeout: 60000});
        this.refFrom2.scrollIntoView();
        this.refFrom2.click();
        browser.pause(1000);
        this.refFrom2.setValue("012003");
    }

    enterValueForDateFrom3 () {
        this.refFrom3.waitForExist({timeout: 60000});
        this.refFrom3.scrollIntoView();
        this.refFrom3.click();
        browser.pause(1000);
        this.refFrom3.setValue("012005");
    }

    enterValueForDateFrom4 () {
        this.refFrom4.waitForExist({timeout: 60000});
        this.refFrom4.scrollIntoView();
        this.refFrom4.click();
        browser.pause(1000);
        this.refFrom4.setValue("012007");
    }

    enterValueForDateTo1 () {
        this.refTo1.waitForExist({timeout: 60000});
        this.refTo1.scrollIntoView();
        this.refTo1.click();
        browser.pause(1000);
        this.refTo1.setValue("012002");
    }

    enterValueForDateTo2 () {
        this.refTo2.waitForExist({timeout: 60000});
        this.refTo2.scrollIntoView();
        this.refTo2.click();
        browser.pause(1000);
        this.refTo2.setValue("012004");
    }

    enterValueForDateTo3 () {
        this.refTo3.waitForExist({timeout: 60000});
        this.refTo3.scrollIntoView();
        this.refTo3.click();
        browser.pause(1000);
        this.refTo3.setValue("012006");
    }

    enterValueForDateTo4 () {
        this.refTo4.waitForExist({timeout: 60000});
        this.refTo4.scrollIntoView();
        this.refTo4.click();
        browser.pause(1000);
        this.refTo4.setValue("012008");
    }

    fillOutReference1 () {
        this.enterValueForRefName1();
        browser.pause(7000);
        this.enterValueForEmail1();
        browser.pause(7000);
        this.enterValueForJobTitle1();
        browser.pause(7000);
        this.enterValueForEmployer1();
        browser.pause(7000);
        this.enterValueForDateFrom1();
        browser.pause(7000);
        this.enterValueForDateTo1();
        browser.pause(7000);
    }
    
    fillOutReference2 () {
        this.enterValueForRefName2();
        browser.pause(7000);
        this.enterValueForEmail2();
        browser.pause(7000);
        this.enterValueForJobTitle2();
        browser.pause(7000);
        this.enterValueForEmployer2();
        browser.pause(7000);
        this.enterValueForDateFrom2();
        browser.pause(7000);
        this.enterValueForDateTo2();
        browser.pause(7000);
    }

    fillOutReference3 () {
        this.enterValueForRefName3();
        browser.pause(7000);
        this.enterValueForEmail3();
        browser.pause(7000);
        this.enterValueForJobTitle3();
        browser.pause(7000);
        this.enterValueForEmployer3();
        browser.pause(7000);
        this.enterValueForDateFrom3();
        browser.pause(7000);
        this.enterValueForDateTo3();
        browser.pause(7000);
    }

    fillOutReference4 () {
        this.enterValueForRefName4();
        browser.pause(7000);
        this.enterValueForEmail4();
        browser.pause(7000);
        this.enterValueForJobTitle4();
        browser.pause(7000);
        this.enterValueForEmployer4();
        browser.pause(7000);
        this.enterValueForDateFrom4();
        browser.pause(7000);
        this.enterValueForDateTo4();
        browser.pause(7000);
    }

    clickOnAddAnotherBtn () {
        //following will wait for "Add Another" button
        this.addAnotherBtn.waitForExist({timeout: 60000});
        this.addAnotherBtn.scrollIntoView();
        browser.pause(1000);
        this.addAnotherBtn.click();
        browser.pause(2000);
    }
}
module.exports = new referenceScreen();