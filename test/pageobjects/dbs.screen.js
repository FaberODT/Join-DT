const expect = require("chai").expect;
global.tag = process.argv[3];

class dbsScreen {

    dbsStatus = "";
    certificate = "";

    // get dashboardLbl () { return $('//android.view.View[contains(@text, "Profile overview")]')}
    get pageHeaderLbl () { return $('//h1[@id="pageTitle"]')}

    get yesRadioBtn () { return $('//section[@id="DBSUpdateRegistered"]/label[1]/span')}

    get noRadioBtn () { return $('//section[@id="DBSUpdateRegistered"]/label[2]/span')}

    get yesRadioBtn_value () { return $('//input[@id="DBSUpdateRegistered-DBSUpdateYes"]')}

    get noRadioBtn_value () { return $('//input[@id="DBSUpdateRegistered-DBSUpdateNo"]')}

    get dbsQuestionNoRadioBtn () { return $('//section[@id="DBSquestion"]/label[2]/span')}

    get dbsApplicationLbl () { return $('//*[@id="profile-form"]/section/app-field-display/div[7]/section/app-text-component/div/h3')}

    get certificateUploader () { return $('//*[@id="profile-form"]/section/app-field-display/div[9]/section/label/span')}
    //*[@id="profile-form"]/section/app-field-display/div[9]/section/label/span

    get certificateTxtBox () { return $('//input[@id="DBSUpdateCertificateNumber"]')}

    get addFileBtn () { return $('//button[@id="add-file-DBSUpdateCertificate"]')}

    get saveAndContinueBtn () { return $('//button[@id="submit-button"]')}

    get sectionStatus () { return $('//div[@id="statusMessageHeader"]/span')}

    get sectionMessage () { return $('//div[@id="statusMessageContent"]')}

    get allowOpt () {return $('/hierarchy/android.widget.FrameLayout/android.widget.FrameLayout/android.widget.FrameLayout/android.widget.ScrollView/android.widget.LinearLayout/android.widget.LinearLayout/android.widget.LinearLayout[2]/android.widget.Button[1]')}
    get fileEle () { return $('//*[contains(@text,"Files")]')}
    get eleDoc () { return $('//*[contains(@text,"file.pdf")]')}

    DBS_flag = false;

    assertDBSPageHeader () {
        this.pageHeaderLbl.waitForExist({timeout: 60000});
        browser.pause(3000);
        expect(this.pageHeaderLbl.getText()).to.equal("3. Declaration and DBS");
    }

    clickOnYesRadioBtn () {
        this.yesRadioBtn.waitForExist({timeout:60000});
        this.yesRadioBtn.scrollIntoView();
        // browser.pause(500);
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
        browser.pause(200);
        this.dbsQuestionNoRadioBtn.click();
    }

    assertDBSApplicationLbl () {
        if(this.yesRadioBtn_value.isSelected()){
            // this.dbsApplicationLbl.waitForExist({timeout: 60000});
            expect(this.dbsApplicationLbl.isDisplayed()).to.equal(false);    
        }else{
            this.dbsApplicationLbl.waitForExist({timeout: 60000});
            expect(this.dbsApplicationLbl.isDisplayed()).to.equal(true);
        }
    }

    assertCertificateNumberTxtBox (){
        if(this.yesRadioBtn_value.isSelected()){
            this.certificateTxtBox.waitForExist({timeout: 60000});
            expect(this.certificateTxtBox.isDisplayed()).to.equal(true);
        }else{
            // this.certificateTxtBox.waitForExist({timeout: 60000});
            expect(this.certificateTxtBox.isDisplayed()).to.equal(false);
        }
    }

    assertCertificateUploadPanel () {
        if(this.yesRadioBtn_value.isSelected()){
            this.certificateUploader.waitForExist({timeout: 60000});
            expect(this.certificateUploader.isDisplayed()).to.equal(true);
        }else{
            // this.certificateUploader.waitForExist({timeout: 60000});
            expect(this.certificateUploader.isDisplayed()).to.equal(false);
        }
    }

    enterCertificateValue (certificate) {
        this.certificateTxtBox.waitForExist({timeout: 60000});
        this.certificateTxtBox.scrollIntoView();
        switch(certificate){
            case "Valid":
                this.certificateTxtBox.setValue("009999999999");
                break;
            case "Issue77":
                this.certificateTxtBox.setValue("007777777777");
                break;
            case "Issue66":
                console.log("I am in 0066");
                this.certificateTxtBox.setValue("006666666666");
                break;
            case "Issue55":
                this.certificateTxtBox.setValue("005555555555");
                break;
            case "Issue88":
                this.certificateTxtBox.setValue("008888888888");
                break;
        }
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

    switchDBSValue() {
        this.noRadioBtn_value.waitForExist({timeout: 60000});
        if(this.noRadioBtn_value.isSelected()){
            this.yesRadioBtn_value.scrollIntoView();
            browser.pause(10000);
            this.yesRadioBtn.click();
            this.DBS_flag = true;
        }
        else{
            this.noRadioBtn_value.scrollIntoView();
            browser.pause(10000);
            this.noRadioBtn.click();
        }
    }

    assertDBSValue() {
        if(this.DBS_flag == true){
            expect(this.yesRadioBtn_value.isSelected()).to.equal(true);
        }
        else{
            expect(this.noRadioBtn_value.isSelected()).to.equal(true);
        }
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
            case "SignedWithoutFile1":
                expect(this.sectionMessage.getText()).to.equal("There seems to be an issue checking your DBS, please change your answer to no and use the next question to upload your DBS. A member of the team will then review  your DBS and contact you if necessary. ");
                break;
            case "SignedWithoutFile2":
                expect(this.sectionMessage.getText()).to.equal("There seems to be an issue checking your DBS, please change your answer to no and use the next question to upload your DBS. A member of the team will then review  your DBS and contact you if necessary. ");
                break;
            case "SignedWithoutFile3":
                expect(this.sectionMessage.getText()).to.equal("Thanks for submitting your DBS details; a member of the team will now review them. If approved, this section will change to ‘Complete’. In the meantime, you can continue filling in the rest of your profile.");
                break;
            case "SignedWithoutFile4":
                expect(this.sectionMessage.getText()).to.equal("A member of the team will be in touch with you shortly ");
                break;
            case "Complete":
                expect(this.sectionMessage.getText()).to.equal("Your DBS certificate has been issued. Please ensure you send us a clear copy as soon as you receive it.");
                break;
        }
    }
}
module.exports = new dbsScreen();