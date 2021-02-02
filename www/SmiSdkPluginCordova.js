var exec = require('cordova/exec');

exports.getVpnSDState = function (arg0, success, error) {
    exec(success, error, 'SmiSdkPluginCordova', 'getVpnSDState', []);
};

exports.sdStateObserver = function (arg0, success, error) {
    exec(success, error, 'SmiSdkPluginCordova', 'sdStateObserver', []);
};

exports.startSponsoredVpn = function (arg0, success, error) {
    exec(success, error, 'SmiSdkPluginCordova', 'startSponsoredVpn', []);
};

exports.stopSponsoredVpn = function (arg0, success, error) {
    exec(success, error, 'SmiSdkPluginCordova', 'stopSponsoredVpn', []);
};
