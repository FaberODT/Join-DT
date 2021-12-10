const expect = require("chai").expect;
global.tag = process.argv[3];

class professionalDetailsScreen {

    get pageHeaderLbl () { return $('//h1[@id="pageTitle"]')}

    get saveBtn () { return $('//button[@id="saveButton"]')}

    get sectionStatus () { return $('//div[@id="statusMessageHeader"]/span')}

    get yesRadioBtn () { return $('//section[@id="Profbodyaccreditation"]/label[1]/span')}

    get babcpRadioBtn () { return $('//section[@id="Profbodymembership"]/label[1]/span')}

    get bacpRadioBtn () { return $('//section[@id="Profbodymembership"]/label[2]/span')}

    get hcpcRadioBtn () { return $('//section[@id="Profbodymembership"]/label[3]/span')}

    get otherRadioBtn () { return $('//section[@id="Profbodymembership"]/label[4]/span')}

    get otherProfessionalTxtBox () { return $('//input[@id="OtherProfBody"]')}

    get professionalMembershipTxtBox () { return $('//input[@id="HCPCProfnumber"]')}

    assertProfessionalDetailsPageHeader () {
        this.pageHeaderLbl.waitForExist({timeout: 60000});
        expect(this.pageHeaderLbl.getText()).to.equal("5. Professional details");
    }

    clickOnSaveAndContinueBtn () {
        this.saveBtn.waitForExist({timeout: 60000});
        this.saveBtn.click();
    }

    assertSectionStatus () {
        this.sectionStatus.waitForExist({timeout: 60000});
        expect(this.sectionStatus.getText()).to.equal("Complete");
    }
    clickOnYesRadioBtn () {
        this.yesRadioBtn.waitForExist({timeout: 60000});
        this.yesRadioBtn.scrollIntoView();
        browser.pause(1000);
        this.yesRadioBtn.click();
        browser.pause(1000);
    }

    clickOnBABCPRadioBtn () {
        this.babcpRadioBtn.waitForExist({timeout: 60000});
        this.babcpRadioBtn.scrollIntoView();
        browser.pause(1000);
        this.babcpRadioBtn.click();
    }

    clickOnBACPRadioBtn () {
        this.bacpRadioBtn.waitForExist({timeout: 60000});
        this.professionalMembershipTxtBox.scrollIntoView();
        browser.pause(500);
        this.bacpRadioBtn.scrollIntoView();
        this.bacpRadioBtn.click();
    }

    clickOnHCPCRadioBtn () {
        this.hcpcRadioBtn.waitForExist({timeout: 60000});
        this.professionalMembershipTxtBox.scrollIntoView();
        browser.pause(500);
        this.hcpcRadioBtn.scrollIntoView();
        this.hcpcRadioBtn.click();
    }
    
    clickOnOtherRadioBtn () {
        this.otherRadioBtn.waitForExist({timeout: 60000});
        this.professionalMembershipTxtBox.scrollIntoView();
        browser.pause(500);
        this.otherRadioBtn.scrollIntoView();
        this.otherRadioBtn.click();
    }

    enterValueForOtherProfessional () {
        this.otherProfessionalTxtBox.waitForExist({timeout: 60000});
        this.otherProfessionalTxtBox.scrollIntoView();
        browser.pause(1000);
        this.otherProfessionalTxtBox.setValue("123456789");
        browser.pause(500);
    }

    enterValueForProfessionalMemberships () {
        this.professionalMembershipTxtBox.waitForExist({timeout: 60000});
        this.professionalMembershipTxtBox.scrollIntoView();
        browser.pause(1000);
        this.professionalMembershipTxtBox.setValue("123456789");
        browser.pause(500);
    }
}
module.exports = new professionalDetailsScreen();