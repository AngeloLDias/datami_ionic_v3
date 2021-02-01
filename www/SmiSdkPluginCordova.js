var exec = require('cordova/exec');

exports.sdStateObserver = function (arg0, success, error) {
    exec(success, error, 'SmiSdkPluginCordova', 'sdStateObserver', []);
};

exports.startSponsoredVpn = function (arg0, success, error) {
    exec(success, error, 'SmiSdkPluginCordova', 'startSponsoredVpn', []);
};

exports.stopSponsoredVpn = function (arg0, success, error) {
    exec(success, error, 'SmiSdkPluginCordova', 'stopSponsoredVpn', []);
};

exports.getVpnSdState = function (arg0, success, error) {
    exec(success, error, 'SmiSdkPluginCordova', 'getVpnSdState', []);
};
