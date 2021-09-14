const expect = require("chai").expect;
global.tag = process.argv[3];

class adminSectionScreen {

    get createBtn () { return $('//button[@id="create-attribute"]')}

    get menuBtn () { return $('//div[@id="mobile-nav-button"]')}

    get logoutBtn () { return $('//button[@id="nav-item-logout"]')}

    get adminMenuBtn () { return $$('//h4[@id="nav-item-developer-worker"][3]')}

    get candidateSearchSubMenu () { return $('//h4[@id="nav-item-users"]')}

    assertCreateBtn () {
        this.createBtn.waitForExist({timeout: 60000});
        expect(this.createBtn.isDisplayed()).to.equal(true);
    }

    clickOnMenuBtn () {
        this.menuBtn.waitForExist({timeout: 60000});
        this.menuBtn.click();
        browser.pause(1000);
    }

    clickOnLogoutBtn () { 
        this.logoutBtn.waitForExist({timeout: 60000});
        this.logoutBtn.click();
    }

    clickOnAdminMenuOption () {
        this.adminMenuBtn.waitForExist({timeout: 60000});
        this.adminMenuBtn.click();
    }

    clickOnCandidateSearchSubMenu () {
        this.candidateSearchSubMenu.waitForExist({timeout: 60000});
        this.candidateSearchSubMenu.click();
    }
    
}
module.exports = new adminSectionScreen();