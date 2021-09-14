const expect = require("chai").expect;
global.tag = process.argv[3];

class gradeAndEmployerScreen {

    // get dashboardLbl () { return $('//android.view.View[contains(@text, "Profile overview")]')}
    get pageHeaderLbl () { return $('//h1[@id="pageTitle"]')}

    get gradeAndEmployerPageStatus () { return $('//div[@id="statusMessageHeader"]/span')}

    get nursingBandDrd () { return $('//mat-select[@id="NursingBand"]/div/div/span/span')}

    get currentEmployerTxtBox () { return $('//input[@id="SubstantiveEmployer"]')}



    assertGradeAndEmployerPageLbl () {
        this.pageHeaderLbl.waitForExist({timeout: 60000});
        expect(this.pageHeaderLbl.getText()).to.equal("2. Grade and employer");
    }

    assertGradeAndEmployerPageStatus () {
        this.gradeAndEmployerPageStatus.waitForExist({timeout: 60000});
        expect(this.gradeAndEmployerPageStatus.getText()).to.equal("Complete");
    }

    assertGradeAndEmployerDetails () {
        this.nursingBandDrd.waitForExist({timeout: 60000});
        expect(this.nursingBandDrd.getText()).to.equal("Band 6 (Nurse)");

        expect(this.currentEmployerTxtBox.getValue()).to.equal("pulse");
    }
}
module.exports = new gradeAndEmployerScreen();