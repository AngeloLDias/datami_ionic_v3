module.exports = function(ctx) {
    var fs = require('fs'),
        path = require('path'),

    var tsScriptPath = path.join(ctx.opts.projectRoot, 'plugins', 'cordova-ionic-smisdk-plugin', 'src', 'android', 'smi-sdk-cordova', 'index.js');
    var destLocationPath = path.join(ctx.opts.projectRoot, 'node_modules', '@ionic-native', 'smi-sdk-cordova');

    if ( !fs.existsSync( destLocationPath ) ) {
        console.log('destination folder created');
        fs.mkdirSync( destLocationPath );
    }

    destLocationPath = path.join(ctx.opts.projectRoot, 'node_modules', '@ionic-native', 'smi-sdk-cordova', 'index.js');
    fs.copyFile(tsScriptPath, destLocationPath, (err) => {
        if (err) throw err;
        console.log('index.js copied to destination');
    });

    tsScriptPath = path.join(ctx.opts.projectRoot, 'plugins', 'cordova-ionic-smisdk-plugin', 'src', 'android', 'smi-sdk-cordova', 'index.d.ts');
    destLocationPath = path.join(ctx.opts.projectRoot, 'node_modules', '@ionic-native', 'smi-sdk-cordova', 'index.d.ts');
    fs.copyFile(tsScriptPath, destLocationPath, (err) => {
        if (err) throw err;
        console.log('index.d.ts was copied to destination');
    });
    
};
