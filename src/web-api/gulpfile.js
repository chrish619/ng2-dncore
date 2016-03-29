var gulp = require('gulp'),
    rename = require('gulp-rename'),
    ts = require('gulp-typescript'),
    typescript = require('typescript');

var npm_dependencies = [
    './node_modules/es6-shim/es6-shim.min.js',
    './node_modules/systemjs/dist/system-polyfills.js',
    './node_modules/angular2/es6/dev/src/testing/shims_for_IE.js',
    './node_modules/angular2/bundles/angular2-polyfills.js',
    './node_modules/systemjs/dist/system.src.js',
    './node_modules/rxjs/bundles/Rx.js',
    './node_modules/angular2/bundles/angular2.dev.js'
];


gulp.task('web:js:dependencies', [], function() {
    return gulp.src(npm_dependencies, { base: './' })
        .pipe(rename(function(path) {
            /*var dirpath = path.dirname.replace(/node_modules/, '').replace(/(^[\/\\]*|[\/\\]+)/g, '_');*/
            path.dirname = ''
            /*path.basename = [dirpath, path.basename].join('_')*/
            return path;
        }))
        .pipe(gulp.dest('./wwwroot/lib'));
});

gulp.task('web:ts:build', [], function() {
    var proj = ts.createProject('tsconfig.json');
    return proj.src()
        .pipe(ts(proj))
        .js.pipe(gulp.dest('./'));
});

gulp.task('build:web', ['web:ts:build', 'web:js:dependencies'], function() {

});
