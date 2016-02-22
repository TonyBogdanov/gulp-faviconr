# Gulp-Faviconr

[![Buy Me a Coffee](http://static.tonybogdanov.com/github/coffee.svg)](http://ko-fi.co/1236KUKJNC96B)

Gulp wrapper for [TonyBogdanov/faviconr](https://github.com/TonyBogdanov/faviconr)'s `generate` method.

## Installing

```shell
$ npm install --save-dev gulp-faviconr
```

## Usage

```js
var faviconr = require('gulp-faviconr');

gulp.task('favicons', function() {
    return faviconr();
});

// or

gulp.task('favicons', function() {
    return faviconr({
        cwd: '/path/to/current/working/directory',
        json: '/path/to/faviconr.json',
        cmd: '-vv'
    });
});
```

The function accepts a single optional argument of type `object` with the following structure:

Key         | Description
---         | ---
`cwd`       | A valid path to `cd` to and use as the current working directory.
`json`      | Path to a valid `faviconr.json` file, defaults to `faviconr.json` in the `cwd`.
`cmd`       | Additional command line arguments to be relayed to faviconr.

## CLI

If you need a console-only solution, just use the [TonyBogdanov/faviconr](https://github.com/TonyBogdanov/faviconr)
package.