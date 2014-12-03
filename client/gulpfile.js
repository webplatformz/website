var gulp = require('gulp');
var eslint = require('gulp-eslint');

var paths = {
  ourJsFiles: ['app/**/*.js', 'test/**/*.js', '!app/lib/**/*', '!app/js/libs/**/*.js']
};

gulp.task('lint', function () {
    // Note: To have the process exit with an error code (1) on
    //  lint error, return the stream and pipe to failOnError last.
    return gulp.src(paths.ourJsFiles)
        .pipe(eslint())
        .pipe(eslint.format())
        .pipe(eslint.failOnError());
});

gulp.task('watch', function () {
  gulp.watch(paths.ourJsFiles, ['lint']);
});


gulp.task('default', ['watch']);

// THIS IS WORK IN PROGRESS