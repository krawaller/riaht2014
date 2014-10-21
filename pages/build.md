###Vår byggprocess

I kursen kommer vi använda CommonJS-moduler för att bygga vår app, och [NPM](../node-och-npm) för att hämta hem beroenden. Det innebär att vi inte kan köra vår kod i webbläsaren, eftersom `require`-metoden inte finns där. Därför måste vi först omvandla vår kodbas till något webbläsaren kan hantera, vilket vi gör via [Browserify](http://browserify.org/). Den vandrar igenom din källkod utifrån en startfil, och laddar in alla andra filers innehåll via `require`-anropen. Detta sparar vi sedan ned som en enda javascript-fil, som därmed blir körbar i webbläsaren.

Själva källkoden rekommenderas att du har i en `src`-katalog i projektet. Det kompilerade resultatet lägger vi sedan i en `dist`-katalog.

I `src` utgår du lämpligen från en fil `main.js`, som renderar ut den högsta [React](../react)-taggen:

<pre><code><span class="hljs-javadoc">/** <span class="hljs-javadoctag">@jsx</span> React.DOM */</span>

<span class="hljs-keyword">var</span> App = require(<span class="hljs-string">'./components/app'</span>),
    React = require(<span class="hljs-string">'react'</span>);

React.renderComponent(
  App,
  document.getElementById(<span class="hljs-string">'main'</span>));
</code></pre>

Bredvid `main.js` skapar vi `index.html`:

<pre><code><span class="hljs-doctype">&lt;!DOCTYPE html&gt;</span>
<span class="hljs-tag">&lt;<span class="hljs-title">html</span> <span class="hljs-attribute">lang</span>=<span class="hljs-value">"en"</span>&gt;</span>
<span class="hljs-tag">&lt;<span class="hljs-title">head</span>&gt;</span>
  <span class="hljs-tag">&lt;<span class="hljs-title">meta</span> <span class="hljs-attribute">charset</span>=<span class="hljs-value">"UTF-8"</span>&gt;</span>
  <span class="hljs-tag">&lt;<span class="hljs-title">title</span>&gt;</span>Document<span class="hljs-tag">&lt;/<span class="hljs-title">title</span>&gt;</span>
  <span class="hljs-tag">&lt;<span class="hljs-title">link</span> <span class="hljs-attribute">rel</span>=<span class="hljs-value">"stylesheet"</span> <span class="hljs-attribute">media</span>=<span class="hljs-value">"screen"</span> <span class="hljs-attribute">href</span>=<span class="hljs-value">"http://netdna.bootstrapcdn.com/bootstrap/3.1.0/css/bootstrap.min.css"</span>&gt;</span>
<span class="hljs-tag">&lt;/<span class="hljs-title">head</span>&gt;</span>
<span class="hljs-tag">&lt;<span class="hljs-title">body</span>&gt;</span>
<span class="hljs-tag">&lt;<span class="hljs-title">div</span> <span class="hljs-attribute">id</span>=<span class="hljs-value">"main"</span> <span class="hljs-attribute">class</span>=<span class="hljs-value">"container"</span>&gt;</span><span class="hljs-tag">&lt;/<span class="hljs-title">div</span>&gt;</span>
<span class="hljs-tag">&lt;<span class="hljs-title">script</span> <span class="hljs-attribute">src</span>=<span class="hljs-value">"js/main.js"</span>&gt;</span><span class="javascript"></span><span class="hljs-tag">&lt;/<span class="hljs-title">script</span>&gt;</span>
<span class="hljs-tag">&lt;/<span class="hljs-title">body</span>&gt;</span>
<span class="hljs-tag">&lt;/<span class="hljs-title">html</span>&gt;</span>
</code></pre>

Vi använder sedan [Gulp](../gulp) för att utföra kompileringen till dist-katalogen. Det kan se ut ungefär så här:

<pre><code><span class="hljs-keyword">var</span> gulp = <span class="hljs-built_in">require</span>(<span class="hljs-string">'gulp'</span>),
    browserify = <span class="hljs-built_in">require</span>(<span class="hljs-string">'gulp-browserify'</span>),
    concat = <span class="hljs-built_in">require</span>(<span class="hljs-string">'gulp-concat'</span>);

gulp.task(<span class="hljs-string">'browserify'</span>, <span class="hljs-function"><span class="hljs-keyword">function</span><span class="hljs-params">()</span> {</span>
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

Eftersom vi använder gh-pages för publicering så blir den publika adressen för att testa appen `https://<username>.github.io/<reponame>/dist`.</reponame></username>