var shell                   = require('shelljs');

const PLUGIN_NAME           = 'gulp-faviconr';

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

    return through.obj(function(file, enc, cb) {
        //if (file.isNull()) {
        //    // return empty file
        //    return cb(null, file);
        //}
        //if (file.isBuffer()) {
        //    file.contents = Buffer.concat([prefixText, file.contents]);
        //}
        //if (file.isStream()) {
        //    file.contents = file.contents.pipe(prefixStream(prefixText));
        //}

        cb(null, file);
    });
}

module.exports              = gulpFaviconr;