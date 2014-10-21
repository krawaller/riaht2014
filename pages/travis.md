
### Vad

[Travis CI](https://travis-ci.org/) är en webbtjänst för Continuous Integration. Definitionen av vad det är kan vara mer komplex, men i vårt fall så innebär det att köra vår byggprocess och testsvit varje gång kod pushas till vårt repo på Github. När vi har kopplat Travis till vårt repo så kan vi sedan se resultatet för varje push:

[![travis result](../img/travisresults.png)](https://travis-ci.org/krawaller/algol3/builds)


### Varför

Att Travis testar koden varje gång vi pushar till Github är ingen större vinst. Vi kör ju ändå testsviten och byggprocessen lokalt, och kommer därmed fånga fel innan vi pushar koden.

Men Github har en Travis hook för pull requests, vilket gör att varje gång någon öppnar en pull request mot mitt repositorium så kan Travisresultaten visas direkt i pull requesten!

[![silly pull request](../img/sillypullrequest.png)](https://github.com/krawaller/algol3/pull/1/files)

Klickar man på varninen så kommer man direkt till en logg på Travis som visar vad som gått snett:

[![travis fail](../img/travisfail.png)](https://travis-ci.org/krawaller/algol3/jobs/32018043)

Tack vare detta så såg vi direkt att denna pull request är en dålig idé. Utan Travis skulle jag ha varit tvungen att ladda ned den föreslagna koden och köra byggprocess + testsvit på min maskin, men nu blir jag istället genast (eller åtminstone inom några minuter) varnad av Travis.

### Hur

Först och främst måste vi säga till Travis att vakta vårt repositorium. Det gör vi genom att logga in på [http://travis-ci.org](http://travis-ci.org) (notera att [http://travis-ci.com](http://travis-ci.com) är för privata repon, vilket kostar pengar) med vårt Githubkonto, och sedan aktivera det aktuella repot:

![travis activation](../img/travisflick.png)

Om inget annat anges så kör Travis scriptet `test` definierat i vår `package.json`. Här är den relevanta delen av den filen för guilden:

<pre><code>
{
  "<span class="hljs-attribute">name</span>": <span class="hljs-value"><span class="hljs-string">"riaht2014"</span></span>,
  "<span class="hljs-attribute">version</span>": <span class="hljs-value"><span class="hljs-string">"0.0.2"</span></span>,
  "<span class="hljs-attribute">author</span>": <span class="hljs-value"><span class="hljs-string">"krawaller"</span></span>,
  "<span class="hljs-attribute">license</span>": <span class="hljs-value"><span class="hljs-string">"ISC"</span></span>,
  "<span class="hljs-attribute">scripts</span>": <span class="hljs-value">{
    "<span class="hljs-attribute">test</span>": <span class="hljs-value"><span class="hljs-string">"gulp test"</span>
  </span>}
</span>}
</code></pre>

Här ser vi att Travis kommer köra `gulp test`. Alla dependencies kommer automatiskt att installeras av Travis via npm, precis som vi själva gör lokalt.

Men vi måste också ange Travis-specifika inställningar. Dessa bor i filen `.travis.yml`, som läggs i roten av repot. Så här kan den se ut:

<pre><code>
language: node_js
node_js:
  -<span class="ruby"> <span class="hljs-string">"0.10"</span>
</span>before_install:
  -<span class="ruby"> <span class="hljs-string">"npm i -g gulp"</span>
</span>script: "gulp"
branches:
  only:
    -<span class="ruby"> gh-pages
</span></code></pre>

Den förklarar sig själv ganska väl, men här följer några kommentarer:

*    Inställningen `language` behövs eftersom Travis stödjer en mängd olika plattformar förutom Node; Ruby, Java, etc.
*    Eftersom Nodes API fortfarande är under utveckling så kan det vara viktigt att testa i olika versioner av Node. Dessa anges under `node_js`. Varje version där angiven kommer testa varje ny build av repot.
*    Vi måste använda `before_script`-hooken för att se till att `gulp` är globalt installerat. Att endast inkludera `gulp` som en dependency i `package.json` räcker inte: det gör bara att vi kan `require('gulp')`, men vi måste ha tillgång till den binära filen för att kunna använda `gulp`-kommandot i terminalen.
*    Travis ignorerar normalt `gh-pages`-branchen av ett repo, eftersom den oftast används till statiska infosidor om ett projekt. Den klumpiga `branches`-inställningen ovan behövs därför för att få Travis att förstå att den ska testa `gh-pages`.

En bildfil genereras automatiskt som visar resultatet för ett projekts senaste build på Travis. Adressen blir `https://img.shields.io/travis/<githubusername>/<reponame>/<repobranch>.svg`. Normalt är att inkludera den i sin README-fil för projektet, och länka bilden till Travis-sidan för projektet. Så här kan det se ut:

<pre><code>
<span class="hljs-header"># Algol3</span>

Third time's the charm!

[<span class="hljs-link_label">![Build Status</span>](<span class="hljs-link_url">https://img.shields.io/travis/krawaller/algol3/gh-pages.svg</span>)](<span class="hljs-link_url">https://travis-ci.org/krawaller/algol3</span>)
</code></pre>

...vilket får följande resultat:

[![readme with travis badge](../img/readmewithtravisbadge.png)](https://github.com/krawaller/algol3/blob/gh-pages/README.md)
</repobranch></reponame></githubusername>