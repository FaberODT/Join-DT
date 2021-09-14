const expect = require("chai").expect;
global.tag = process.argv[3];

class dashBoardScreen {

    // get dashboardLbl () { return $('//android.view.View[contains(@text, "Profile overview")]')}
    get pageHeaderLbl () { return $('//h1[@id="pageTitle"]')}

    get nmcCheckSection () { return $('//section[@id="nmc-check"]')}


    assertDashboardLbl () {
        this.pageHeaderLbl.waitForExist({timeout: 60000});
        expect(this.pageHeaderLbl.getText()).to.equal("Profile overview");
    }

    clickOnNMCCheckSection () {
        // browser.touchAction([
        //     { action: 'press', x: 700, y: 2200 },
        //     { action: 'moveTo', x: 700, y: 1000 },
        //     'release'
        // ])
        this.nmcCheckSection.scrollIntoView();
        browser.pause(1000);
        this.nmcCheckSection.waitForExist({timeout: 60000});
        this.nmcCheckSection.click();
    }

}
module.exports = new dashBoardScreen();