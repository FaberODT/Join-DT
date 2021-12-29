const expect = require("chai").expect;
global.tag = process.argv[3];

class paymentOptionScreen {

    // get dashboardLbl () { return $('//android.view.View[contains(@text, "Profile overview")]')}
    get pageHeaderLbl () { return $('//h1[@id="pageTitle"]')}

    get paymentRadioBtn () { return $$('//section[@id="PwpPaymentMethod"]/label')}

    get saveBtn () { return $('//button[@id="submit-button"]')}

    get sectionStatus () { return $('//div[@id="statusMessageHeader"]/span')}

    assertPaymentOptionPageHeader () {
        this.pageHeaderLbl.waitForExist({timeout: 60000});
        expect(this.pageHeaderLbl.getText()).to.equal("8. Payment method");
    }

    clickOnPayeRadioBtn () {
        this.paymentRadioBtn[0].waitForExist({timeout: 60000});
        this.paymentRadioBtn[0].click();
    }

    clickOnUmbrellaRadioBtn () {
        this.paymentRadioBtn[1].waitForExist({timeout: 60000});
        this.paymentRadioBtn[1].click();
    }

    clickOnSaveAndContinueBtn () {
        this.saveBtn.waitForExist({timeout: 60000});
        this.saveBtn.click();
    }

    assertSectionStatus () {
        this.sectionStatus.waitForExist({timeout: 60000});
        expect(this.sectionStatus.getText()).to.equal("Complete");
    }
}
module.exports = new paymentOptionScreen();