var gulp = require('gulp');
var to5 = require('gulp-6to5');
var jasmine = require('gulp-jasmine');

gulp.task('to5', function () {
  return gulp.src('./es6/*.js')
    .pipe(to5())
    .pipe(gulp.dest('./'));
});

gulp.task('test', ['to5'], function () {
  return gulp.src('stack.spec.js')
    .pipe(jasmine());
});

gulp.task('watch', ['test'], function () {
  gulp.watch('./es6/*.js', ['test']);
});

gulp.task('default', ['watch']);
