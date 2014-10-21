###Vad är Gulp?

[Gulp](http://gulpjs.com/), "the streaming build system" är ett Node-baserat verktyg för att manipulera filer enligt fördefinierade regler. För dem av er som använt [Grunt](http://gruntjs.com/) så fyller Gulp samma funktion. I kursen använder vi Gulp för att...

*    [kompilera jsx-koden till vanlig JavaScript](../react)
*    [bygga vår kod för webbläsaren](../build)
*    [linta vår kod](../jshint)
*    [generera dokumentation](../dokumentation)
*    [köra våra unittests](../test-driven-utveckling)

###Användning

I projektets rot skapas en fil `gulpfile.js` där vi kan definiera olika tasks. Här är ett exempel från guilden:

<pre><code>gulp.task(<span class="hljs-string">'browserify'</span>, <span class="hljs-function"><span class="hljs-keyword">function</span><span class="hljs-params">()</span> {</span>
    gulp.src(<span class="hljs-string">'src/main.js'</span>)
      .pipe(browserify({transform:<span class="hljs-string">"reactify"</span>}))
      .pipe(concat(<span class="hljs-string">'main.js'</span>))
      .pipe(gulp.dest(<span class="hljs-string">'dist/js'</span>));
});

gulp.task(<span class="hljs-string">'copyindex'</span>, <span class="hljs-function"><span class="hljs-keyword">function</span><span class="hljs-params">()</span> {</span>
    gulp.src(<span class="hljs-string">'src/index.html'</span>)
      .pipe(gulp.dest(<span class="hljs-string">'dist'</span>));
});

gulp.task(<span class="hljs-string">'syntax'</span>, <span class="hljs-function"><span class="hljs-keyword">function</span><span class="hljs-params">()</span>{</span>
    gulp.src(<span class="hljs-string">'pages/*.md'</span>)
      .pipe(highlight())
      .pipe(gulp.dest(<span class="hljs-string">'pages'</span>));
});

gulp.task(<span class="hljs-string">'builddocs'</span>, <span class="hljs-function"><span class="hljs-keyword">function</span><span class="hljs-params">()</span>{</span>
    gulp.src([<span class="hljs-string">'src/*/*.js'</span>,<span class="hljs-string">'src/*.js'</span>])
      .pipe(docco())
      .pipe(gulp.dest(<span class="hljs-string">'./docs'</span>))
});

gulp.task(<span class="hljs-string">'docsindex'</span>, <span class="hljs-function"><span class="hljs-keyword">function</span><span class="hljs-params">()</span>{</span>
  folderToc(<span class="hljs-string">'docs'</span>, {
    name : <span class="hljs-string">'index.html'</span>,
    layout: <span class="hljs-string">'classic'</span>,
    filter: <span class="hljs-string">'*.html'</span>,
    title: <span class="hljs-string">'Files'</span>    
  });
});

gulp.task(<span class="hljs-string">'default'</span>,[<span class="hljs-string">'lint'</span>, <span class="hljs-string">'browserify'</span>, <span class="hljs-string">'copyindex'</span>]);

gulp.task(<span class="hljs-string">'docs'</span>,[<span class="hljs-string">'builddocs'</span>,<span class="hljs-string">'docsindex'</span>]);</code></pre>

Varje definierad task kan nu köras genom att i terminalen skriva `gulp <taskname>` i projektets rot. Notera hur man också kan konstruera tasks genom att bygga ihop tidigare definierade tasks. Skriver man endast `gulp` så körs den task som har namnet `default`.

###Resurser

*    [Snabb tutorial](http://www.sitepoint.com/introduction-gulp-js/)
*    [E-boken Developing a Gulp edge](http://shop.oreilly.com/product/9781939902146.do)
*    [JavascriptJabber-avsnitt om Gulp](http://devchat.tv/js-jabber/097-jsj-gulp-js-with-eric-schoffstall)
</taskname>