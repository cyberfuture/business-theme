var gulp = require('gulp'),
    del = require('del');


gulp.task('deleteDistFolder', function() {
    return del("./theme-final");
});

gulp.task('copyGeneralFiles', ['deleteDistFolder'], function() {
    var pathsToCopy = [
        './**/*',
        '!./css',
        '!./css/**',
        '!./dev-stuff',
        '!./dev-stuff/**',
        '!./gulp',
        '!./gulp/**',
        '!./node_modules',
        '!./node_modules/**',
        '!./gulpfile.js',
        '!./package.json'
    ];
    return gulp.src(pathsToCopy)
        .pipe(gulp.dest("./theme-final"));
});


gulp.task('build', ['deleteDistFolder', 'copyGeneralFiles']);