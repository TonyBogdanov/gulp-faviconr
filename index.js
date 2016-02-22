var path                    = require('path');
var shell                   = require('shelljs');

function gulpFaviconr(options)
{
    var actualOptions       = {
        cwd:                '.',
        json:               'faviconr.json',
        cmd:                ''
    };

    if('object' == typeof options) {
        if('string' == typeof options.cwd) {
            actualOptions.cwd       = options.cwd;
        }
        if('string' == typeof options.json) {
            actualOptions.json      = options.json;
        }
        if('string' == typeof options.cmd) {
            actualOptions.cmd       = options.cmd;
        }
    }

    var originalCWD         = process.cwd();

    shell.cd(actualOptions.cwd);
    shell.exec('php "' + path.resolve(require.resolve('faviconr'), '../../build/faviconr.phar') + '" generate "' +
        actualOptions.json + '"' + (0 < actualOptions.cmd.length ? ' ' + actualOptions.cmd : ''));
    shell.cd(originalCWD);
}

module.exports              = gulpFaviconr;