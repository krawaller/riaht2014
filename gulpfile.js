var gulp = require('gulp'),
    browserify = require('gulp-browserify'),
    concat = require('gulp-concat'),
    jshint = require('gulp-jshint'),
    stylish = require('jshint-stylish'),
    react = require('gulp-react'),
    highlight = require('gulp-highlight'),
    docco = require('gulp-docco'),
    folderToc = require('folder-toc'),
    jest = require('gulp-jest'),
    ReactTools = require('react-tools');

gulp.task('lint', function(){
    gulp.src(['src/*/*.js','src/*.js'])
      .pipe(react())
      .pipe(jshint())
      .pipe(jshint.reporter(stylish))
      .pipe(jshint.reporter('fail'))
});

gulp.task('test',function(){
    return gulp.src('__tests__').pipe(jest({
      testDirectoryName: "spec",
      scriptPreprocessor: './support/preprocessor.js',
      unmockedModulePathPatterns: ['node_modules/react'],
      testPathIgnorePatterns: [
        "node_modules",
        "./support"
      ]
    }));
});

gulp.task('browserify', function() {
    gulp.src('src/main.js')
      .pipe(browserify({transform:"reactify"}))
      .pipe(concat('main.js'))
      .pipe(gulp.dest('dist/js'));
});

gulp.task('copyindex', function() {
    gulp.src('src/index.html')
      .pipe(gulp.dest('dist'));
});

gulp.task('syntax', function(){
    gulp.src('pages/*.md')
      .pipe(highlight())
      .pipe(gulp.dest('pages'));
});

gulp.task('builddocs', function(){
    gulp.src(['src/*/*.js','src/*.js'])
      .pipe(docco())
      .pipe(gulp.dest('./docs'))
});

gulp.task('docsindex', function(){
  folderToc('docs', {
    name : 'index.html',
    layout: 'classic',
    filter: '*.html',
    title: 'Files'    
  });
});

gulp.task('build',['browserify','copyindex']);

gulp.task('docs',['builddocs','docsindex']);

gulp.task('default',['lint', 'test', 'build', 'docs']);

gulp.task('watch', function() {
    gulp.watch('src/**/*.*', ['default']);
});