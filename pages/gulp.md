Gulp woo! :)

Här till exempel är guildens gulpfil:

<pre class="hljs"><code>
<span class="hljs-keyword">var</span> gulp = <span class="hljs-built_in">require</span>(<span class="hljs-string">'gulp'</span>),
    browserify = <span class="hljs-built_in">require</span>(<span class="hljs-string">'gulp-browserify'</span>),
    concat = <span class="hljs-built_in">require</span>(<span class="hljs-string">'gulp-concat'</span>);

gulp.task(<span class="hljs-string">'browserify'</span>, <span class="hljs-function"><span class="hljs-keyword">function</span><span class="hljs-params">()</span> {</span>
    gulp.src(<span class="hljs-string">'src/main.js'</span>)
      .pipe(browserify({transform: <span class="hljs-string">'reactify'</span>}))
      .pipe(concat(<span class="hljs-string">'main.js'</span>))
      .pipe(gulp.dest(<span class="hljs-string">'dist/js'</span>));
});

gulp.task(<span class="hljs-string">'copy'</span>, <span class="hljs-function"><span class="hljs-keyword">function</span><span class="hljs-params">()</span> {</span>
    gulp.src(<span class="hljs-string">'src/index.html'</span>)
      .pipe(gulp.dest(<span class="hljs-string">'dist'</span>));
});

gulp.task(<span class="hljs-string">'default'</span>,[<span class="hljs-string">'browserify'</span>, <span class="hljs-string">'copy'</span>]);

gulp.task(<span class="hljs-string">'watch'</span>, <span class="hljs-function"><span class="hljs-keyword">function</span><span class="hljs-params">()</span> {</span>
    gulp.watch(<span class="hljs-string">'src/**/*.*'</span>, [<span class="hljs-string">'default'</span>]);
});
</code></pre>

[intro](http://www.sitepoint.com/introduction-gulp-js/)

Bra e-bok: [Developing a Gulp edge](http://shop.oreilly.com/product/9781939902146.do)


###Plugins

[gulp-jshint](https://github.com/spenceralger/gulp-jshint)