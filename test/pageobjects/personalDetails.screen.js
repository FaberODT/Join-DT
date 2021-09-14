const expect = require("chai").expect;
global.tag = process.argv[3];

class personalDetailScreen {

    // get dashboardLbl () { return $('//android.view.View[contains(@text, "Profile overview")]')}
    get pageHeaderLbl () { return $('//h1[@id="pageTitle"]')}

    get personalDetailPageStatus () { return $('//div[@id="statusMessageHeader"]/span')}

    get firstNameTxtBox () { return $('//input[@id="FirstName"]')}

    get lastNameTxtBox () { return $('//input[@id="LastName"]')}

    get maleRadioBtn () { return $('//input[@id="Gender-Male"]')}

    get femaleRadioBtn () { return $('//input[@id="Gender-Female"]')}

    get dobTxtBox () { return $('//input[@id="DOB"]')}

    get mobileTxtBox () { return $('//input[@id="Mobile"]')}

    get address1TxtBox () { return $('//input[@id="Address-0-AddressLine1"]')}

    get cityTxtBox () { return $('//input[@id="Address-0-City"]')}

    get postCodeTxtBox () { return $('//input[@id="Address-0-PostCode"]')}


    assertPersonaDetailsPageLbl () {
        this.pageHeaderLbl.waitForExist({timeout: 60000});
        expect(this.pageHeaderLbl.getText()).to.equal("1. Personal details");
    }

    assertPersonaDetailsPageStatus () {
        this.personalDetailPageStatus.waitForExist({timeout: 60000});
        expect(this.personalDetailPageStatus.getText()).to.equal("Complete");
        console.log("Value of male radio button is: " + this.maleRadioBtn.isSelected());
    }

    assertPersonalDetails () {
        this.firstNameTxtBox.waitForExist({timeout: 60000});
        // expect(this.firstNameTxtBox.getValue()).to.equal("fabertester+iqx_e6_midwives_mobileweb_chrome@gmail.com");
        expect(this.firstNameTxtBox.getValue()).to.equal("fabertester+nimesh001-e2e@gmail.com");

        expect(this.lastNameTxtBox.getValue()).to.equal("Tester");

        // expect(this.maleRadioBtn.isSelected()).to.equal(true);

        expect(this.dobTxtBox.getValue()).to.equal("01/01/1970");

        expect(this.mobileTxtBox.getValue()).to.equal("07567676766");

        expect(this.address1TxtBox.getValue()).to.equal("Birmingham");

        expect(this.cityTxtBox.getValue()).to.equal("Birmingham");

        expect(this.postCodeTxtBox.getValue()).to.equal("WV24PA");
    }
}
module.exports = new personalDetailScreen();