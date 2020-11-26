// wdio.dev.config.js
var merge = require('deepmerge');
var wdioConf = require('./wdio.conf.js');

// have main config file as default but overwrite environment specific information
exports.config = merge(wdioConf.config, {
  capabilities: [{
    app: '../../youi/build_osx_Release/Release/PictureApp',
    automationName: 'YouiEngine',
    deviceName: 'mac-package-release',
    platformName: 'yimac',
    youiEngineAppAddress: 'localhost',
    connectionRetryCount: 10,
    showXcodeLog: true,
    waitforTimeout: 20000
  }],

}, { clone: false });
