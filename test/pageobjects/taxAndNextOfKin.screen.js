const expect = require("chai").expect;
global.tag = process.argv[3];

class taxAndNextOfKinScreen {

    // get dashboardLbl () { return $('//android.view.View[contains(@text, "Profile overview")]')}
    get pageHeaderLbl () { return $('//h1[@id="pageTitle"]')}

    get paymentRadioBtn () { return $$('//section[@id="PaymentMethod"]/label')}

    get firstNameTxtBox () { return $('//input[@id="NextOfKin-0-NextOfKinFirstName"]')}

    get lastNameTxtBox () { return $('//input[@id="NextOfKin-0-NextOfKinSurName"]')}

    get phoneTxtBox () { return $('//input[@id="NextOfKin-0-NextOfKinPhone"]')}

    get relationshipTxtBox () { return $('//input[@id="NextOfKin-0-NextOfKinRelationship"]')}

    get umbrellaCompanyNameTxtBox () { return $('//input[@id="UmbreallaCompanyName"]')}

    get saveBtn () { return $('//button[@id="saveButton"]')}

    get sectionStatus () { return $('//div[@id="statusMessageHeader"]/span')}

    get allowOpt () {return $('/hierarchy/android.widget.FrameLayout/android.widget.FrameLayout/android.widget.FrameLayout/android.widget.ScrollView/android.widget.LinearLayout/android.widget.LinearLayout/android.widget.LinearLayout[2]/android.widget.Button[1]')}
    get fileEle () { return $('//*[contains(@text,"Files")]')}
    get eleDoc () { return $('//*[contains(@text,"file.pdf")]')}
    get addFileForIncorporationBtn () { return $('//button[@id="add-file-CertificateOfIncorporation"]')}
    get addFileForAccountBtn () {return $('//button[@id="add-file-ProofOfBusinessBankAccount"]')}

    get temp () { return $('//h3[@text="Next of kin"]')}

    assertTaxAndNextOfKinPageHeader () {
        this.pageHeaderLbl.waitForExist({timeout: 60000});
        expect(this.pageHeaderLbl.getText()).to.equal("11. Tax and next of kin");
    }

    clickOnPayeRadioBtn () {
        this.paymentRadioBtn[0].waitForExist({timeout: 60000});
        this.paymentRadioBtn[0].click();
    }

    clickOnLimitedCompanyRadioBtn () {
        this.paymentRadioBtn[1].waitForExist({timeout: 60000});
        this.paymentRadioBtn[1].click();
        browser.pause(2000);
        for(let i = 0; i < 3; i++){
            browser.touchAction([
                { action: 'press', x: 1000, y: 2250 },
                { action: 'moveTo', x: 1000, y: 900 },
                'release'
            ]);
        }
        
        // browser.swipeUp(this.temp, 2);
        browser.pause(5000);
    }

    clickOnUmbrellaRadioBtn () {
        this.paymentRadioBtn[2].waitForExist({timeout: 60000});
        this.paymentRadioBtn[2].click();
    }

    enterFirstName (firstName) {
        this.firstNameTxtBox.waitForExist({timeout: 60000});
        this.firstNameTxtBox.setValue(firstName);
    }

    enterLastName (lastName) {
        this.lastNameTxtBox.waitForExist({timeout: 60000});
        this.lastNameTxtBox.setValue(lastName);
    }

    enterPhone (phoneNumber) {
        this.phoneTxtBox.waitForExist({timeout: 60000});
        this.phoneTxtBox.setValue(phoneNumber);
    }

    enterRelationShip (relation) {
        this.relationshipTxtBox.waitForExist({timeout: 60000});
        this.relationshipTxtBox.setValue(relation);
    }

    enterUmbrellaCompanyName (companyName) {
        this.umbrellaCompanyNameTxtBox.waitForExist({timeout: 60000});
        this.umbrellaCompanyNameTxtBox.setValue(companyName);
    }

    clickOnSaveAndContinueBtn () {
        this.saveBtn.waitForExist({timeout: 60000});
        this.saveBtn.click();
    }

    assertSectionStatus () {
        this.sectionStatus.waitForExist({timeout: 60000});
        expect(this.sectionStatus.getText()).to.equal("Complete");
    }

    fetchPAYEValues () {
        this.firstNameTxtBox.waitForExist({timeout: 60000});
        expect(this.firstNameTxtBox.getValue()).to.equal("Nimesh");
        expect(this.lastNameTxtBox.getValue()).to.equal("Bhatt");
        expect(this.phoneTxtBox.getValue()).to.equal("07912345678");
        expect(this.relationshipTxtBox.getValue()).to.equal("Friend");

    }

    fetchUmbrellaCompanyName () {
        this.umbrellaCompanyNameTxtBox.waitForExist({timeout: 60000});
        expect(this.umbrellaCompanyNameTxtBox.getValue()).to.equal("Umbrella!");
    }

    uploadFileForIncorporation () {
        this.addFileForIncorporationBtn.waitForExist({timeout: 60000});

        let data1 = new Buffer("Hello World").toString('base64');
        driver.pushFile('/sdcard/download/file.pdf', data1);

        //click on Add File button
        this.addFileForIncorporationBtn.click();
        browser.pause(5000);

        //Swith to NATIVE_APP 
        let contexts = driver.getContexts();
        console.log("Total contexts are: " + contexts);
        console.log(" 0 contexts are: " + contexts[0]);
        console.log(" 1 contexts are: " + contexts[1]);
        driver.switchContext(contexts[0]);

        //click on Allow button from pop-up
        this.allowOpt.click();
        browser.pause(5000);

        //click on File
        this.fileEle.click();
        browser.pause(5000);

        //select file 
        this.eleDoc.click();
        browser.pause(5000);
        driver.switchContext(contexts[1]);
        browser.pause(2000);
    }

    uploadFileForAccount () {
        this.addFileForAccountBtn.waitForExist({timeout: 60000});

        //click on Add File button
        this.addFileForAccountBtn.click();
        browser.pause(5000);

        //Swith to NATIVE_APP 
        let contexts = driver.getContexts();
        console.log("Total contexts are: " + contexts);
        console.log(" 0 contexts are: " + contexts[0]);
        console.log(" 1 contexts are: " + contexts[1]);
        driver.switchContext(contexts[0]);

        //click on Allow button from pop-up
        // this.allowOpt.click();
        // browser.pause(5000);

        //click on File
        this.fileEle.click();
        browser.pause(5000);

        //select file 
        this.eleDoc.click();
        browser.pause(5000);
        driver.switchContext(contexts[1]);
        browser.pause(2000);
    }

}
module.exports = new taxAndNextOfKinScreen();