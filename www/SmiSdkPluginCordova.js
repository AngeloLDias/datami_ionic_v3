var exec = require('cordova/exec');

exports.getSDState = function (arg0, success, error) {
    exec(success, error, 'SmiSdkPluginCordova', 'getSDState', []);
};

exports.sdStateObserver = function (arg0, success, error) {
    exec(success, error, 'SmiSdkPluginCordova', 'sdStateObserver', []);
};


exports.startSponsoredData = function (arg0, success, error) {
    exec(success, error, 'SmiSdkPluginCordova', 'startSponsoredData', []);
};

exports.stopSponsoredData = function (arg0, success, error) {
    exec(success, error, 'SmiSdkPluginCordova', 'stopSponsoredData', []);
};

exports.startSponsoredVPN = function (arg0, success, error) {
    exec(success, error, 'SmiSdkPluginCordova', 'startSponsoredVPN', []);
};

exports.stopSponsoredVPN = function (arg0, success, error) {
    exec(success, error, 'SmiSdkPluginCordova', 'stopSponsoredVPN', []);
};

exports.getVpnSdState = function (arg0, success, error) {
    exec(success, error, 'SmiSdkPluginCordova', 'getVpnSdState', []);
};
