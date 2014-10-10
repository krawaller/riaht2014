Säkert redan använt woo! 

I kursen viktigt, kollaboreringsprojekt bla bla. 

.jshintrc-fil i roten av ert projekt. Här är min:

<pre><code>{
    "<span class="hljs-attribute">maxparams</span>": <span class="hljs-value"><span class="hljs-number">5</span></span>,
    "<span class="hljs-attribute">maxdepth</span>": <span class="hljs-value"><span class="hljs-number">5</span></span>,
    "<span class="hljs-attribute">maxstatements</span>": <span class="hljs-value"><span class="hljs-number">25</span></span>,
    "<span class="hljs-attribute">maxcomplexity</span>": <span class="hljs-value"><span class="hljs-number">10</span></span>,
    "<span class="hljs-attribute">node</span>": <span class="hljs-value"><span class="hljs-literal">true</span></span>,
    "<span class="hljs-attribute">browser</span>": <span class="hljs-value"><span class="hljs-literal">true</span></span>,
    "<span class="hljs-attribute">boss</span>": <span class="hljs-value"><span class="hljs-literal">false</span></span>,
    "<span class="hljs-attribute">curly</span>": <span class="hljs-value"><span class="hljs-literal">true</span></span>,
    "<span class="hljs-attribute">debug</span>": <span class="hljs-value"><span class="hljs-literal">false</span></span>,
    "<span class="hljs-attribute">devel</span>": <span class="hljs-value"><span class="hljs-literal">false</span></span>,
    "<span class="hljs-attribute">eqeqeq</span>": <span class="hljs-value"><span class="hljs-literal">true</span></span>,
    "<span class="hljs-attribute">evil</span>": <span class="hljs-value"><span class="hljs-literal">true</span></span>,
    "<span class="hljs-attribute">forin</span>": <span class="hljs-value"><span class="hljs-literal">false</span></span>,
    "<span class="hljs-attribute">immed</span>": <span class="hljs-value"><span class="hljs-literal">true</span></span>,
    "<span class="hljs-attribute">laxbreak</span>": <span class="hljs-value"><span class="hljs-literal">false</span></span>,
    "<span class="hljs-attribute">newcap</span>": <span class="hljs-value"><span class="hljs-literal">false</span></span>,
    "<span class="hljs-attribute">noarg</span>": <span class="hljs-value"><span class="hljs-literal">true</span></span>,
    "<span class="hljs-attribute">noempty</span>": <span class="hljs-value"><span class="hljs-literal">true</span></span>,
    "<span class="hljs-attribute">nomen</span>": <span class="hljs-value"><span class="hljs-literal">false</span></span>,
    "<span class="hljs-attribute">onevar</span>": <span class="hljs-value"><span class="hljs-literal">true</span></span>,
    "<span class="hljs-attribute">plusplus</span>": <span class="hljs-value"><span class="hljs-literal">true</span></span>,
    "<span class="hljs-attribute">regexp</span>": <span class="hljs-value"><span class="hljs-literal">false</span></span>,
    "<span class="hljs-attribute">undef</span>": <span class="hljs-value"><span class="hljs-literal">true</span></span>,
    "<span class="hljs-attribute">sub</span>": <span class="hljs-value"><span class="hljs-literal">true</span></span>,
    "<span class="hljs-attribute">strict</span>": <span class="hljs-value"><span class="hljs-literal">false</span></span>,
    "<span class="hljs-attribute">white</span>": <span class="hljs-value"><span class="hljs-literal">true</span></span>,
    "<span class="hljs-attribute">unused</span>": <span class="hljs-value"><span class="hljs-literal">true</span></span>,
    "<span class="hljs-attribute">nonew</span>": <span class="hljs-value"><span class="hljs-literal">true</span></span>,
    "<span class="hljs-attribute">bitwise</span>": <span class="hljs-value"><span class="hljs-literal">true</span></span>,
    "<span class="hljs-attribute">latedef</span>": <span class="hljs-value"><span class="hljs-literal">true</span></span>,
    "<span class="hljs-attribute">nonbsp</span>": <span class="hljs-value"><span class="hljs-literal">true</span>
</span>}
</code></pre>

###Usage

Kompetent editor alddar in, men vi kör också via gulp i byggprocessen!

<pre><code>gulp.task(<span class="hljs-string">'lint'</span>, function(){
    gulp.src([<span class="hljs-string">'src/*/*.js'</span>,<span class="hljs-string">'src/*.js'</span>])
      .<span class="hljs-keyword">pipe</span>(react())
      .<span class="hljs-keyword">pipe</span>(jshint())
      .<span class="hljs-keyword">pipe</span>(jshint.reporter(stylish))
      .<span class="hljs-keyword">pipe</span>(jshint.reporter(<span class="hljs-string">'fail'</span>))
});
</code></pre>

Vi måste först göra om reacts jsx. sedan kör vi jshint, rapporterar resultatet, och kastar fel om något inte lydde.

Vi ser sedan till att lintningen körs som en del av byggprocessen:

<pre><code>gulp.<span class="hljs-keyword">task</span>(<span class="hljs-string">'default'</span>,[<span class="hljs-string">'lint'</span>, <span class="hljs-string">'browserify'</span>, <span class="hljs-string">'copyindex'</span>]);
</code></pre>

Därmed kommer Travis visa om en pull request innehåller dumheter.

###Vilka regler skall användas?

Upp till dig, förutom:

*    `newcap` måste vara `false`, annars kommer JSHint klaga på den kompilerade jsx-koden.
*    Det är obligatoriskt att använda `maxparams`, `maxdepth`, `maxstatements` och `maxcomplexity`! Läs mer om dessa [här](http://www.elijahmanor.com/control-the-complexity-of-your-javascript-functions-with-jshint/).
