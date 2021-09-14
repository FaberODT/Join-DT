const {config} = require('./kobitonWDIO.conf')

config.specs = [
  './test/specs/**/dbsDetails.e2e.js'
]

config.capabilities = [{
  sessionName:        'iOS mobile browser test',
  sessionDescription: 'Join-DT mobile browser automation',
  deviceOrientation:  'portrait',
  captureScreenshots: true,
  browserName:        'safari',
  deviceGroup:        'KOBITON',
  deviceName:         'iPhone XS Max',
  platformName:       'iOS',
  platformVersion:    '13.5.1'
}]

exports.config = config