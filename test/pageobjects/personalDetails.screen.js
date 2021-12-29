const expect = require("chai").expect;
global.tag = process.argv[3];

class personalDetailScreen {

    // get dashboardLbl () { return $('//android.view.View[contains(@text, "Profile overview")]')}
    get pageHeaderLbl () { return $('//h1[@id="pageTitle"]')}

    get personalDetailPageStatus () { return $('//div[@id="statusMessageHeader"]/span')}

    get firstNameTxtBox () { return $('//input[@id="FirstName"]')}

    get lastNameTxtBox () { return $('//input[@id="LastName"]')}

    get maleRadioBtn () { return $('//input[@id="Gender-Male"]')}

    get maleRadioBtn_clickable () { return $('//section[@id="Gender"]/label[2]/span')}

    get femaleRadioBtn () { return $('//input[@id="Gender-Female"]')}

    get femaleRadioBtn_clickable () { return $('//section[@id="Gender"]/label[1]/span')}

    get dobTxtBox () { return $('//input[@id="DOB"]')}

    get mobileTxtBox () { return $('//input[@id="Mobile"]')}

    get address1TxtBox () { return $('//input[@id="Address-0-AddressLine1"]')}

    get cityTxtBox () { return $('//input[@id="Address-0-City"]')}

    get postCodeTxtBox () { return $('//input[@id="Address-0-PostCode"]')}

    get notificationEle () { return $('//div[@id="notification"]')}

    gender_flag = false;


    assertPersonaDetailsPageLbl () {
        this.pageHeaderLbl.waitForExist({timeout: 60000});
        expect(this.pageHeaderLbl.getText()).to.equal("1. Personal details");
    }

    assertPersonaDetailsPageStatus () {
        this.personalDetailPageStatus.waitForExist({timeout: 60000});
        expect(this.personalDetailPageStatus.getText()).to.equal("Complete");
        console.log("Value of male radio button is: " + this.maleRadioBtn.isSelected());
    }

    enterLastName() {
        this.lastNameTxtBox.waitForExist({timeout: 60000});
        this.lastNameTxtBox.scrollIntoView();
        this.lastNameTxtBox.setValue("Tester");
    }

    enterDateOfBirth() {
        this.dobTxtBox.waitForExist({timeout: 60000});
        this.dobTxtBox.scrollIntoView();
        this.dobTxtBox.setValue("01011970");
    }

    assertDateOfBirthValue() {
        this.dobTxtBox.waitForExist({timeout: 60000});
        expect(this.dobTxtBox.getValue()).to.equal("01/01/1970");
    }

    assertLastNameValue() {
        this.lastNameTxtBox.waitForExist({timeout: 60000});
        expect(this.lastNameTxtBox.getValue()).to.equal("Tester");
    }

    switchGender() {
        this.maleRadioBtn.waitForExist({timeout: 60000});
        console.log("Value of male radio button is: " + this.maleRadioBtn.isSelected());
        if(this.maleRadioBtn.isSelected()){
            this.femaleRadioBtn_clickable.scrollIntoView();
            this.femaleRadioBtn_clickable.click();
            this.gender_flag = true;
        }
        else{
            this.maleRadioBtn_clickable.click();
        }
    }

    assertGenderValue() {
        console.log("value of flag is: " + this.gender_flag);
        if(this.gender_flag == true){
            expect(this.femaleRadioBtn.isSelected()).to.equal(true);
        }
        else{
            expect(this.maleRadioBtn.isSelected()).to.equal(true);
        }
    }

    enterMobile() {
        this.mobileTxtBox.waitForExist({timeout: 60000});
        this.mobileTxtBox.scrollIntoView();
        this.mobileTxtBox.setValue("07567676766");
    }

    assertMobileValue () {
        this.mobileTxtBox.waitForExist({timeout: 60000});
        expect(this.mobileTxtBox.getValue()).to.equal("07567676766");
    }

    enterAddressLine1() {
        this.address1TxtBox.waitForExist({timeout: 60000});
        this.address1TxtBox.scrollIntoView();
        this.address1TxtBox.setValue("Birmingham");
    }

    assertAddressLine1Value(){
        this.address1TxtBox.waitForExist({timeout: 60000});
        expect(this.address1TxtBox.getValue()).to.equal("Birmingham");
    }

    assertChangesSavedNotification() {
        this.notificationEle.waitForExist({timeout: 60000});
        // browser.pause(500);
        expect(this.notificationEle.isDisplayed()).to.equal(true);
        browser.pause(8000);
    }

    assertPersonalDetails () {
        this.firstNameTxtBox.waitForExist({timeout: 60000});
        // expect(this.firstNameTxtBox.getValue()).to.equal("fabertester+iqx_e6_midwives_mobileweb_chrome@gmail.com");
        expect(this.firstNameTxtBox.getValue()).to.equal("Nimesh");

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