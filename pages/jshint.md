###Projektspecifika stilregler

Som erfarna JavaScriptare är ni förmodligen sedan länge bekanta med [Douglas Crockfords](http://crockford.com/) [JSLint](http://www.jslint.com/), och sannolikt också den mer toleranta varianten [JSHint](http://www.jshint.com/). I kursen är det obligatoriskt att använda det sistnämnda.

När man jobbar på egen hand räcker det att hooka upp sina regler till den egna editorn, men i ett kollaborativt projekt måste vi också se till att andra jobbar utifrån samma stilregler! Därför måste reglernas inställningar bo i själva projektet! JSHint stöder detta via en `jshintrc`-fil som man lägger i roten av sitt projekt. Som ett exempel på hur det kan se ut kommer här guildens fil:

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

###Användning

De flesta editorer hittar automagiskt filen och ser till att den tillämpas i koden. Gör den inte det så måste du själv på något sätt förklara för editorn att den skall titta i filen.

Vi måste också på något sätt få in stilregelkontrollen i vår byggprocess i Gulp. För detta skapar vi en egen task. Här är återigen motsvarande exempel från guilden:

<pre><code>gulp.task(<span class="hljs-string">'lint'</span>, function(){
    gulp.src([<span class="hljs-string">'src/*/*.js'</span>,<span class="hljs-string">'src/*.js'</span>])
      .<span class="hljs-keyword">pipe</span>(react())
      .<span class="hljs-keyword">pipe</span>(jshint())
      .<span class="hljs-keyword">pipe</span>(jshint.reporter(stylish))
      .<span class="hljs-keyword">pipe</span>(jshint.reporter(<span class="hljs-string">'fail'</span>))
});
</code></pre>

Några kommentarer till tasken:

*    Vi måste först se till att omvandla eventuell jsx-kod till JavaScript: `.pipe(react())`
*    Därefter lintar vi koden: `.pipe(jshint())`
*    Vi skriver sedan ut resultatet i terminalen: `.pipe(jshint.reporter(stylish))`
*    Slutligen kastar vi ett fel ifall några brott mot reglerna påträffades.

Nu kan lint-tasken köras separat i terminalen, men vi måste också se till att den körs som en del av byggprocessen:

<pre><code>gulp.<span class="hljs-keyword">task</span>(<span class="hljs-string">'default'</span>,[<span class="hljs-string">'lint'</span>, <span class="hljs-string">'browserify'</span>, <span class="hljs-string">'copyindex'</span>]);
</code></pre>

Eftersom Travis kör byggsteget, och byggsteget nu innehåller stilregelskontrollen, så säkerställer vi att alla kodbidrag följer reglerna!

###Vilka regler skall användas?

Detta är helt upp till dig, förutom att:

*    `newcap` måste vara `false`, annars kommer JSHint klaga på den kompilerade jsx-koden.
*    Det är obligatoriskt att använda `maxparams`, `maxdepth`, `maxstatements` och `maxcomplexity`! Läs mer om dessa [här](http://www.elijahmanor.com/control-the-complexity-of-your-javascript-functions-with-jshint/).
