Gulp woo! :)

Här till exempel är guildens gulpfil:

```
var gulp = require('gulp'),
    browserify = require('gulp-browserify'),
    concat = require('gulp-concat');

gulp.task('browserify', function() {
    gulp.src('src/main.js')
      .pipe(browserify({transform: 'reactify'}))
      .pipe(concat('main.js'))
      .pipe(gulp.dest('dist/js'));
});

gulp.task('copy', function() {
    gulp.src('src/index.html')
      .pipe(gulp.dest('dist'));
});

gulp.task('default',['browserify', 'copy']);

gulp.task('watch', function() {
    gulp.watch('src/**/*.*', ['default']);
});
```

[intro](http://www.sitepoint.com/introduction-gulp-js/)

Bra e-bok: [Developing a Gulp edge](http://shop.oreilly.com/product/9781939902146.do)


###Plugins

[gulp-jshint](https://github.com/spenceralger/gulp-jshint)