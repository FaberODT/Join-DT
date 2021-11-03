const {config} = require('./kobitonWDIO.conf')

config.specs = [
  './test/specs/**/paymentOptions.e2e.js'
]

config.capabilities = [{
  sessionName:        'iOS mobile browser test',
  sessionDescription: 'Join-DT mobile browser automation',
  deviceOrientation:  'portrait',
  captureScreenshots: true,
  browserName:        'safari',
  deviceGroup:        'KOBITON',
  deviceName:         'iPhone XR',
  platformName:       'iOS',
  platformVersion:    '14.3'
}]

exports.config = config