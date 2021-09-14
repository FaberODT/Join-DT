const expect = require("chai").expect;
global.tag = process.argv[3];

class generalNurseDetailScreen {

    // get dashboardLbl () { return $('//android.view.View[contains(@text, "Profile overview")]')}
    get pageHeaderLbl () { return $('//h1[@id="pageTitle"]')}

    get generalNurseDetailsPageStatus () { return $('//div[@id="statusMessageHeader"]/span')}

    get skillDrd () { return $('//mat-select[@id="GeneralNurseSkills"]/div/div/span/span')}


    assertGeneralNurseDetailsPageLbl () {
        this.pageHeaderLbl.waitForExist({timeout: 60000});
        expect(this.pageHeaderLbl.getText()).to.equal("3. General nurse details");
    }

    assertGeneralNurseDetailsPageStatus () {
        this.generalNurseDetailsPageStatus.waitForExist({timeout: 60000});
        expect(this.generalNurseDetailsPageStatus.getText()).to.equal("Complete");
    }

    assertGeneralNurseDetails () {
        this.skillDrd.waitForExist({timeout: 60000});
        expect(this.skillDrd.getText()).to.equal("Midwives");
    }
}
module.exports = new generalNurseDetailScreen();