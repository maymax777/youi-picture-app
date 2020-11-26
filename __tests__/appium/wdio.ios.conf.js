// wdio.dev.config.js
var merge = require('deepmerge');
var wdioConf = require('./wdio.conf.js');

// have main config file as default but overwrite environment specific information
exports.config = merge(wdioConf.config, {
  capabilities: [{
    app: '../../../../../build/ios/react/samples/ReactTemplateProject/youi/Debug-iphoneos/PictureApp.app',
    automationName: 'YouiEngine',
    deviceName: 'iOS Device',
    platformName: 'ios',
    platformVersion: '<platformVersion>',
    udid: '<udid>',
    xcodeOrgId: '<XcodeOrgId>',
    youiEngineAppAddress: '<DeviceIP>',
    wdaLocalPort: '8100',
    fullReset: 'true',
    autoDismissAlerts: 'true'
  }],

}, { clone: false });
