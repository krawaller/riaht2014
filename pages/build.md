byggprocess!

konkatenera, browserifiera. uglifaja borde vi också göra, men skönt att testa utan för att se körfel.

###Användning

Det är lämpligt att ha hela projektet i en src-katalog, för att sedan enkelt kunna bygga till en dist-katalog. Så här ser exempelvis byggprocessen för guilden ut:

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
</code></pre>

Den första gulp-tasken, `browserify`, utgår ifrån den "översta" JavaScriptfilen, läser in alla beroenden, översätter JSX-koden till ren JavaScript, slår ihop allting till en enda fil, och lägger den i dist-katalogen.

Den andra tasken kopierar också dit index.html-filen, som inte kommer följa med i den första tasken som bara bryr sig om JavaScript.

Ni bör lägga upp er byggprocess på liknande sätt, och den adress som andra ska använda för att testa er webapp blir därmed `https://<username>.github.io/<reponame>/dist`.</reponame></username>