const {config} = require('./kobitonWDIO.conf')

config.specs = [
  './test/specs/**/autoSave.e2e.js'
]

config.capabilities = [{
  sessionName:        'Android web test',
  sessionDescription: 'This is an example for Android web',
  deviceOrientation:  'portrait',
  captureScreenshots: true,
  browserName:        'chrome',
  deviceGroup:        'KOBITON',
  deviceName:         'Google Pixel 6',
  platformName:       'Android',
  platformVersion:    '12'
}]

exports.config = config