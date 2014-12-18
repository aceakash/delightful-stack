var gulp = require('gulp');
var jasmine = require('gulp-jasmine');

require('coffee-script/register');

gulp.task('test', function () {
  return gulp.src('*.spec.coffee')
    .pipe(jasmine());
});

gulp.task('watch', function () {
  gulp.watch('*.coffee', ['test']);
});

gulp.task('default', ['watch']);
