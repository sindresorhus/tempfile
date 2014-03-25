var fs = require('fs'),
    tmpdir,
    os;
try {
    os = require('os');
} catch (e) {}

if (os && os.tmpdir) {
    tmpdir = os.tmpdir();
} else {
    var environmentVariableNames = ['TMPDIR', 'TMP', 'TEMP'];
    for (var i = 0 ; i < environmentVariableNames.length ; i += 1) {
        var environmentVariableValue = process.env[environmentVariableNames[i]];
        if (environmentVariableValue) {
            tmpdir = fs.realpathSync(environmentVariableValue);
            break;
        }
    }
    if (!tmpdir) {
        if (process.platform === 'win32') {
            tmpdir = fs.realpathSync('c:\\tmp');
        } else {
            tmpdir = fs.realpathSync('/tmp');
        }
    }
}

module.exports = tmpdir;
