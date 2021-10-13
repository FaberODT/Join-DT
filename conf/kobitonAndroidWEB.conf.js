const {config} = require('./kobitonWDIO.conf')

config.specs = [
  './test/specs/**/reference.e2e.js'
]

config.capabilities = [{
  sessionName:        'Android web test',
  sessionDescription: 'This is an example for Android web',
  deviceOrientation:  'portrait',
  captureScreenshots: true,
  browserName:        'chrome',
  deviceGroup:        'KOBITON',
  deviceName:         'Pixel 3a XL',
  platformName:       'Android',
  platformVersion:    '11'
}]

exports.config = config