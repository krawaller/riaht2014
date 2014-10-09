var gulp = require('gulp'),
    browserify = require('gulp-browserify'),
    concat = require('gulp-concat'),
    jshint = require('gulp-jshint'),
    stylish = require('jshint-stylish'),
    react = require('gulp-react');

gulp.task('lint', function(){
    gulp.src(['src/*/*.js','src/*.js'])
      .pipe(react())
      .pipe(jshint())
      .pipe(jshint.reporter(stylish))
      .pipe(jshint.reporter('fail'))
});

gulp.task('browserify', function() {
    gulp.src('src/main.js')
      .pipe(react())
      .pipe(browserify())
      .pipe(concat('main.js'))
      .pipe(gulp.dest('dist/js'));
});

gulp.task('copy', function() {
    gulp.src('src/index.html')
      .pipe(gulp.dest('dist'));
});

gulp.task('default',['lint', 'browserify', 'copy']);

gulp.task('watch', function() {
    gulp.watch('src/**/*.*', ['default']);
});