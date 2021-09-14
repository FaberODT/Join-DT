var splashScreen = function () {
    this.swipeThrough = async() => {
        await driver.touchPerform([
            { action: 'press', options: { x: 1000, y: 1200 }},
            { action: 'moveTo', options: { x: 100, y: 1200 }},
            { action: 'release' }
        ]);
        browser.pause(1000);
    }

    this.swipeDown = async() => {
        await driver.touchPerform([
            { action: 'press', options: { x: 1000, y: 1200 }},
            { action: 'moveTo', options: { x: 1000, y: 100 }},
            { action: 'release' }
        ]);
        browser.pause(1000);
    }
}
module.exports = new splashScreen();