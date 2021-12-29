const {config} = require('./kobitonWDIO.conf')

config.specs = [
  './test/specs/**/autoSave.e2e.js'
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
  platformVersion:    '14.8'
}]

exports.config = config