var gulp = require('gulp');
var gutil = require('gulp-util');
var coffee = require('gulp-coffee');
var jasmine = require('gulp-jasmine');


gulp.task('coffee', function () {
  return gulp.src('*.coffee')
    .pipe(coffee({bare: true}).on('error', gutil.log))
    .pipe(gulp.dest('./'));
});

gulp.task('test', ['coffee'], function () {
  return gulp.src('*.spec.js')
    .pipe(jasmine());
});

gulp.task('watch', ['test'], function () {
  gulp.watch('*.coffee', ['test']);
});

gulp.task('default', ['watch']);
