[Node](http://nodejs.org/) är en JavaScriptplattform som ofta används som ett backend-alternativ istället för exempelvis .NET eller PHP. Node har vunnit mark både för att den möjliggör att använda JavaScript både på servern och i frontenden, men också för sin eventdrivna ickeblockernade modell som gör det enkelt att bygga webappar som kan hantera väldigt mycket trafik.

Appen vi bygger i kursen kommer dock **inte** använda Node. Vi har inget backend, utan bygger en "ren" webapp som publiceras på Github Pages. Istället nyttjar vi Node till att ladda in bibliotek och till vår byggprocess där vi kompilerar distributionsversionen av vår app.


###Dependencies

Node har en nära vän i [NPM](npmjs.org/), Node Package Manager. Det är ett repositorium med tusentals JavaScriptbibliotek. Genom att skapa en fil med namn `package.json` och lista vilka bibliotek vi använder, så kan vi enkelt ladda ned dessa genom att i terminalen skriva `npm install`. Dessa bibliotek hamnar då i mappen `node_modules` (som bör exkluderas i `.gitignore`), och kan sedan användas i dina kodfiler genom att använda `require`-funktionen.

Så här ser exempelvis `package.json` ut för JavaScript-guilden:

<pre><code>{
  "<span class="hljs-attribute">name</span>": <span class="hljs-value"><span class="hljs-string">"riaht2014"</span></span>,
  "<span class="hljs-attribute">version</span>": <span class="hljs-value"><span class="hljs-string">"0.0.1"</span></span>,
  "<span class="hljs-attribute">description</span>": <span class="hljs-value"><span class="hljs-string">""</span></span>,
  "<span class="hljs-attribute">author</span>": <span class="hljs-value"><span class="hljs-string">"krawaller"</span></span>,
  "<span class="hljs-attribute">license</span>": <span class="hljs-value"><span class="hljs-string">"ISC"</span></span>,
  "<span class="hljs-attribute">devDependencies</span>": <span class="hljs-value">{
    "<span class="hljs-attribute">gulp</span>": <span class="hljs-value"><span class="hljs-string">"^3.7.0"</span></span>,
    "<span class="hljs-attribute">gulp-jshint</span>": <span class="hljs-value"><span class="hljs-string">"1.8.5"</span></span>,
    "<span class="hljs-attribute">jshint-stylish</span>": <span class="hljs-value"><span class="hljs-string">"*"</span></span>,
    "<span class="hljs-attribute">gulp-react</span>": <span class="hljs-value"><span class="hljs-string">"*"</span></span>,
    "<span class="hljs-attribute">gulp-browserify</span>": <span class="hljs-value"><span class="hljs-string">"^0.5.0"</span></span>,
    "<span class="hljs-attribute">gulp-concat</span>": <span class="hljs-value"><span class="hljs-string">"^2.2.0"</span></span>,
    "<span class="hljs-attribute">react</span>": <span class="hljs-value"><span class="hljs-string">"^0.11.2"</span></span>,
    "<span class="hljs-attribute">es6-promise</span>": <span class="hljs-value"><span class="hljs-string">"^1.0.0"</span></span>,
    "<span class="hljs-attribute">react-router</span>": <span class="hljs-value"><span class="hljs-string">"^0.7.0"</span></span>,
    "<span class="hljs-attribute">reflux</span>": <span class="hljs-value"><span class="hljs-string">"^0.1.7"</span></span>,
    "<span class="hljs-attribute">lodash</span>": <span class="hljs-value"><span class="hljs-string">"^2.4.1"</span></span>,
    "<span class="hljs-attribute">firebase</span>": <span class="hljs-value"><span class="hljs-string">"^1.0.21"</span></span>,
    "<span class="hljs-attribute">jquery</span>": <span class="hljs-value"><span class="hljs-string">"^2.1.1"</span></span>,
    "<span class="hljs-attribute">moment</span>": <span class="hljs-value"><span class="hljs-string">"^2.8.3"</span></span>,
    "<span class="hljs-attribute">reflux</span>": <span class="hljs-value"><span class="hljs-string">"0.1.13"</span></span>,
    "<span class="hljs-attribute">gulp-highlight</span>": <span class="hljs-value"><span class="hljs-string">"0.0.3"</span></span>,
    "<span class="hljs-attribute">gulp-docco</span>": <span class="hljs-value"><span class="hljs-string">"0.0.4"</span></span>,
    "<span class="hljs-attribute">folder-toc</span>": <span class="hljs-value"><span class="hljs-string">"0.1.0"</span>
  </span>}
</span>}</code></pre>

###Byggprocess

Vi använder också Node för att kunna exekvera [Gulp-kod](../gulp) i vårt projekts byggprocess.


###Installation

På [Nodes hemsida](http://nodejs.org/) hittar du guider till hur du installerar Node, vilket ser lite olika ut beroende på om du kör Windows, Mac eller Linux. Testa huruvida du har lyckats genom att öppna en terminal och prova att skriva `node --version` och `npm`.
