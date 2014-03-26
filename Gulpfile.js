var gulp = require('gulp');
var jshint = require('gulp-jshint');
var browserify = require('gulp-browserify');

gulp.task('scripts', function() {
  gulp.src('public/index.js')
    .pipe(jshint())
    .pipe(browserify({
      'standalone': 'core'
    }))
    .pipe(gulp.dest('./build/'));
});