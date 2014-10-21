
### Doccos approach

Som en del i byggprocessen kommer vi generera dokumentation för vår kod. I kursen använder vi [Docco](http://jashkenas.github.io/docco), Jeremy Ashkenas lättanvända variant där koden visas i sin helhet, och kommentarer lyfts ut och läggs bredvid respektive kodavsnitt.

Detta är alltså inte en motsvarighet till exempelvis JSDoc där enskilda funktioner och klasser dokumenteras med exakta definitioner av parametrar och returvärden, utan ett sätt att mer övergripande beskriva sin kod.


### Användning i kursen

Enklast är att använda Gulp-pluginen [gulp-docco](https://github.com/jsBoot/gulp-docco), och göra en Gulp-task för detta i din gulpfil:

<pre><code><span class="hljs-keyword">var</span> docco = <span class="hljs-built_in">require</span>(<span class="hljs-string">'gulp-docco'</span>);
gulp.task(<span class="hljs-string">'builddocs'</span>, <span class="hljs-function"><span class="hljs-keyword">function</span><span class="hljs-params">()</span>{</span>
    gulp.src([<span class="hljs-string">'src/*/*.js'</span>,<span class="hljs-string">'src/*.js'</span>])
      .pipe(docco())
      .pipe(gulp.dest(<span class="hljs-string">'./docs'</span>))
});
</code></pre>

Dock [saknar pluginen ännu stöd för att skapa ett filindex](https://github.com/jsBoot/gulp-docco/issues/2), vilket gör att vi måste lägga till en separat lösning för detta. Jag har valt det lilla biblioteket [folderToc](https://github.com/czajkowski/folder-toc). Vi kör den koden som en separat gulp-task:

<pre><code>gulp.task(<span class="hljs-string">'docsindex'</span>, <span class="hljs-function"><span class="hljs-keyword">function</span><span class="hljs-params">()</span>{</span>
  folderToc(<span class="hljs-string">'docs'</span>, {
    name : <span class="hljs-string">'index.html'</span>,
    layout: <span class="hljs-string">'classic'</span>,
    filter: <span class="hljs-string">'*.html'</span>,
    title: <span class="hljs-string">'Files'</span>    
  });
});
</code></pre>

Slutligen registrerar vi en sammansatt gulp-task som först genererar dokumentationen och sedan skapar vårt index:

<pre><code>gulp.<span class="hljs-keyword">task</span>(<span class="hljs-string">'docs'</span>,[<span class="hljs-string">'builddocs'</span>,<span class="hljs-string">'docsindex'</span>]);</code></pre>

Resultatet för JavaScript-guilden kan beskådas [här](blog.krawaller.se/riaht2014/docs/).