const expect = require("chai").expect;
global.tag = process.argv[3];

class termsAndConditionScreen {

    get pageHeaderLbl () { return $('//h1[@id="pageTitle"]')}

    get saveBtn () { return $('//button[@id="submit-button"]')}

    get sectionStatus () { return $('//div[@id="statusMessageHeader"]/span')}

    get firstName () { return $('//input[@id="NextOfKin-0-NextOfKinFirstName"]')}

    get lastName () { return $('//input[@id="NextOfKin-0-NextOfKinSurName"]')}

    get phone () { return $('//input[@id="NextOfKin-0-NextOfKinPhone"]')}

    get relation () { return $('//input[@id="NextOfKin-0-NextOfKinRelationship"]')}

    assertTermsAndConditionsPageHeader () {
        this.pageHeaderLbl.waitForExist({timeout: 60000});
        expect(this.pageHeaderLbl.getText()).to.equal("9. Terms and conditions");
    }

    clickOnSaveAndContinueBtn () {
        this.saveBtn.waitForExist({timeout: 60000});
        this.saveBtn.click();
    }

    assertSectionStatus () {
        this.sectionStatus.waitForExist({timeout: 60000});
        expect(this.sectionStatus.getText()).to.equal("Complete");
    }

    enterFirstName () {
        this.firstName.waitForExist({timeout: 60000});
        this.firstName.scrollIntoView();
        this.firstName.setValue("John");
    }

    enterLastName() {
        this.lastName.waitForExist({timeout: 60000});
        this.lastName.scrollIntoView();
        this.lastName.setValue("Cena");
    }

    enterPhoneNumber() {
        this.phone.waitForExist({timeout: 600000});
        this.phone.scrollIntoView();
        this.phone.setValue("+441234567890");
    }

    enterRelation () {
        this.relation.waitForExist({timeout: 60000});
        this.relation.scrollIntoView();
        this.relation.setValue("Friend");
    }

    fillNextOfKin (){
        this.enterFirstName();
        this.enterLastName();
        this.enterPhoneNumber();
        this.enterRelation();
    }
    
}
module.exports = new termsAndConditionScreen();