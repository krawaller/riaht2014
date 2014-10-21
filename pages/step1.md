
Nu har det blivit dags att lägga grunden för projektet. Det är ganska mycket som ska hamna på plats, men ta ett steg i taget!

1.   Skapa filen `package.json` i roten på projektet med lite grundläggande fakta: <pre><code>{
  "<span class="hljs-attribute">name</span>": <span class="hljs-value"><span class="hljs-string">"riaht2014"</span></span>,
  "<span class="hljs-attribute">version</span>": <span class="hljs-value"><span class="hljs-string">"0.0.1"</span></span>,
  "<span class="hljs-attribute">description</span>": <span class="hljs-value"><span class="hljs-string">"my beautiful app for the RIA-course"</span></span>,
  "<span class="hljs-attribute">author</span>": <span class="hljs-value"><span class="hljs-string">"krawaller"</span></span>,
  "<span class="hljs-attribute">license</span>": <span class="hljs-value"><span class="hljs-string">"ISC"</span></span>,
  "<span class="hljs-attribute">scripts</span>": <span class="hljs-value">{
  }</span>,
  "<span class="hljs-attribute">devDependencies</span>": <span class="hljs-value">{
    "<span class="hljs-attribute">react</span>": <span class="hljs-value"><span class="hljs-string">"0.11.2"</span>
  </span>}
</span>}</code></pre> Installera dependencies genom att köra `npm install`. Registrera dig också på [David DM](http://david-dm.org).

2.    Bestäm projektets regler för [JSHint](../jshint) genom att skapa den korresponderande `.jshintrc`-filen.
3.    Installera [Gulp](../gulp) och det som behövs för [byggprocessen](../build).
3.    Skapa en `src`-katalog, i den en `components`-katalog, och i den filen `app.js` med en enkel [React-komponent](../react) som skriver ut något enkelt på skärmen.
4.    Registrera dig på [Firebase](../firebase), och uppdatera din enkla React-komponent till att skriva ut data därifrån.
5.    Koppla in repot mot [Travis](../travis)
6.    Skapa en [testsvit med Jest](../jest)
7.    Sätt i ordning [dokumentationsgenereringen](../dokumentation)
8.    Skriv en ny **bloggpost** där du detaljerar hur resan gått! Inkludera länkar till din app.
