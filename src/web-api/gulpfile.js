var gulp = require('gulp'),
    rename = require('gulp-rename');

var npm_dependencies = [
    './node_modules/es6-shim/es6-shim.min.js',
    './node_modules/systemjs/dist/system-polyfills.js',
    './node_modules/angular2/es6/dev/src/testing/shims_for_IE.js',
    './node_modules/angular2/bundles/angular2-polyfills.js',
    './node_modules/systemjs/dist/system.src.js',
    './node_modules/rxjs/bundles/Rx.js',
    './node_modules/angular2/bundles/angular2.dev.js'
];


gulp.task('copy:dependencies', [], function() {
    return gulp.src(npm_dependencies, { base: './' })
        .pipe(rename(function(path) {
            /*var dirpath = path.dirname.replace(/node_modules/, '').replace(/(^[\/\\]*|[\/\\]+)/g, '_');*/
            path.dirname = ''
            /*path.basename = [dirpath, path.basename].join('_')*/
            
            return path;
        }))
        .pipe(gulp.dest('./wwwroot/lib'));
});

