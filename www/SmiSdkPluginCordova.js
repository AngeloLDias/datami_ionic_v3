var exec = require('cordova/exec');

exports.getSDState = function (arg0, success, error) {
    exec(success, error, 'SmiSdkPluginCordova', 'getSDState', []);
};

exports.sdStateObserver = function (arg0, success, error) {
    exec(success, error, 'SmiSdkPluginCordova', 'sdStateObserver', []);
};

exports.getAnalytics =  function(arg0, success, error) {
    exec(success, error, "SmiSdkPluginCordova", 'getAnalytics', []);
};

exports.updateUserId =  function(arg0, success, error) {
    exec(success, error, "SmiSdkPluginCordova", 'updateUserId', [arg0]);
};

exports.updateUserTag =  function(arg0, success, error) {
    exec(success, error, "SmiSdkPluginCordova", 'updateUserTag', [arg0]);
};

exports.getSDAuth = function (arg0, success, error) {
    exec(success, error, 'SmiSdkPluginCordova', 'getSDAuth', [arg0]);
};

exports.startSponsoredData = function (arg0, success, error) {
    exec(success, error, 'SmiSdkPluginCordova', 'startSponsoredData', []);
};

exports.stopSponsoredData = function (arg0, success, error) {
    exec(success, error, 'SmiSdkPluginCordova', 'stopSponsoredData', []);
};
