// wdio.dev.config.js
var merge = require('deepmerge');
var wdioConf = require('./wdio.conf.js');

// have main config file as default but overwrite environment specific information
exports.config = merge(
  wdioConf.config,
  {
    capabilities: [
      {
        app:
          '../../../../../build/tvos/react/samples/ReactTemplateProject/youi/Debug-appletvsimulator/PictureApp.app',
        automationName: 'YouiEngine',
        deviceName: 'Apple TV',
        platformName: 'yitvos',
        udid: '<DeviceUDID>',
        youiEngineAppAddress: '<DeviceIP>',
      },
    ],
  },
  { clone: false },
);
