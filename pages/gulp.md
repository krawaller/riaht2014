###Vad är Gulp?

[Gulp](http://gulpjs.com/), "the streaming build system" är ett Node-baserat verktyg för att manipulera filer enligt fördefinierade regler. För dem av er som använt [Grunt](http://gruntjs.com/) så fyller Gulp samma funktion. I kursen använder vi Gulp för att...

*    [kompilera jsx-koden till vanlig JavaScript](../react)
*    [bygga vår kod för webbläsaren](../build)
*    [linta vår kod](../jshint)
*    [generera dokumentation](../dokumentation)
*    [köra våra unittests (frivilligt)](../test-driven-utveckling)

###Användning

I projektets rot skapas en fil `gulpfile.js` där vi kan definiera olika tasks. Här är ett exempel från guilden:

<pre><code>gulp.task('browserify', function() {
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

gulp.task('default',['lint', 'browserify', 'copyindex']);

gulp.task('docs',['builddocs','docsindex']);</code></pre>

Varje definierad task kan nu köras genom att i terminalen skriva `gulp <taskname>` i projektets rot. Notera hur man också kan konstruera tasks genom att bygga ihop tidigare definierade tasks. Skriver man endast `gulp` så körs den task som har namnet `default`.

###Resurser

*    [Snabb tutorial](http://www.sitepoint.com/introduction-gulp-js/)
*    [E-boken Developing a Gulp edge](http://shop.oreilly.com/product/9781939902146.do)
*    [JavascriptJabber-avsnitt om Gulp](http://devchat.tv/js-jabber/097-jsj-gulp-js-with-eric-schoffstall)
