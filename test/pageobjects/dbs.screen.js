const expect = require("chai").expect;
global.tag = process.argv[3];

class dbsScreen {

    dbsStatus = "";

    // get dashboardLbl () { return $('//android.view.View[contains(@text, "Profile overview")]')}
    get pageHeaderLbl () { return $('//h1[@id="pageTitle"]')}

    get yesRadioBtn () { return $('//section[@id="DBSUpdateRegistered"]/label[1]/span')}

    get noRadioBtn () { return $('//section[@id="DBSUpdateRegistered"]/label[2]/span')}

    get dbsQuestionNoRadioBtn () { return $('//section[@id="DBSquestion"]/label[2]/span')}

    get certificateTxtBox () { return $('//input[@id="DBSUpdateCertificateNumber"]')}

    get addFileBtn () { return $('//button[@id="add-file-DBSUpdateCertificate"]')}

    get saveAndContinueBtn () { return $('//button[@id="saveButton"]')}

    get sectionStatus () { return $('//div[@id="statusMessageHeader"]/span')}

    get sectionMessage () { return $('//div[@id="statusMessageContent"]')}

    get allowOpt () {return $('/hierarchy/android.widget.FrameLayout/android.widget.FrameLayout/android.widget.FrameLayout/android.widget.ScrollView/android.widget.LinearLayout/android.widget.LinearLayout/android.widget.LinearLayout[2]/android.widget.Button[1]')}
    get fileEle () { return $('//*[contains(@text,"Files")]')}
    get eleDoc () { return $('//*[contains(@text,"file.pdf")]')}

    assertDBSPageHeader () {
        this.pageHeaderLbl.waitForExist({timeout: 60000});
        browser.pause(3000);
        expect(this.pageHeaderLbl.getText()).to.equal("3. Declaration and DBS");
    }

    clickOnYesRadioBtn () {
        this.yesRadioBtn.waitForExist({timeout:60000});
        this.yesRadioBtn.scrollIntoView();
        browser.pause(1000);
        this.yesRadioBtn.click();
    }

    clickOnNoRadioBtn () {
        this.noRadioBtn.waitForExist({timeout:60000});
        this.noRadioBtn.scrollIntoView();
        this.noRadioBtn.click();
    }

    clickOnDBSQuestionNoRadioBtn () {
        this.dbsQuestionNoRadioBtn.waitForExist({timeout:60000});
        this.dbsQuestionNoRadioBtn.scrollIntoView();
        this.dbsQuestionNoRadioBtn.click();
    }

    enterCertificateValue () {
        this.certificateTxtBox.waitForExist({timeout: 60000});
        this.certificateTxtBox.scrollIntoView();
        this.certificateTxtBox.setValue("009999999999");
        driver.hideKeyboard();
        browser.pause(1000);
    }

    enterCertificateValueForIssue () {
        this.certificateTxtBox.waitForExist({timeout: 60000});
        this.certificateTxtBox.scrollIntoView();
        this.certificateTxtBox.setValue("007777777777");
        driver.hideKeyboard();
        browser.pause(1000);
    }

    uploadFile1 () {
        browser.touchAction([
            { action: 'press', x: 700, y: 2200 },
            { action: 'moveTo', x: 700, y: 600 },
            'release'
        ]);
        this.addFileBtn.waitForExist({timeout: 60000});

        let data1 = new Buffer("Hello World").toString('base64');
        driver.pushFile('/sdcard/download/file.pdf', data1);

        //click on Add File button
        this.addFileBtn.click();
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

    clickOnSaveAndContinueBtn () {
        this.saveAndContinueBtn.waitForExist({timeout:60000});
        this.saveAndContinueBtn.click();
    }

    assertDBSDetailsSectionStatus (dbsStatus) {
        this.sectionStatus.waitForExist({timeout: 60000});
        switch(dbsStatus){
            case "Incomplete":
                expect(this.sectionStatus.getText()).to.equal("Incomplete");
                break;
            case "Pending":
                expect(this.sectionStatus.getText()).to.equal("Pending");
                break;
            case "Issue":
                expect(this.sectionStatus.getText()).to.equal("Issue");
                break;
            case "Complete":
                expect(this.sectionStatus.getText()).to.equal("Complete");
                break;
        }    
    }

    assertDBSMessageContent (dbsMsgContent) {
        this.sectionMessage.waitForExist({timeout: 60000});
        switch(dbsMsgContent){
            case "SignedWithFile":
                expect(this.sectionMessage.getText()).to.equal("Thank you for uploading your certificate, a member of the team will now review it. Providing there are no issues, this section will be marked as complete.");
                break;
            case "SignedWithoutFile":
                expect(this.sectionMessage.getText()).to.equal("There seems to be an issue with your DBS, a member of the team will contact you shortly");
                break;
        }
    }
}
module.exports = new dbsScreen();