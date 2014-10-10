[Node](http://nodejs.org/) är en JavaScriptplattform som ofta används som ett backend-alternativ istället för exempelvis .NET eller PHP. Node har vunnit mark både för att den möjliggör att använda JavaScript både på servern och i frontenden, men också för sin eventdrivna ickeblockernade modell som gör det enkelt att bygga webappar som kan hantera väldigt mycket trafik.

Appen vi bygger i kursen kommer dock **inte** använda Node. Vi har inget backend, utan bygger en "ren" webapp som publiceras på Github Pages. Istället nyttjar vi Node till följande:

*    **Dependencies:** Node har en nära vän i [NPM](npmjs.org/), Node Package Manager. Det är ett repositorium med tusentals JavaScriptbibliotek. Genom att skapa en fil med namn `package.json` och lista vilka bibliotek vi använder, så kan vi enkelt ladda ned dessa genom att i terminalen skriva `npm install`. Dessa bibliotek hamnar då i mappen `node_modules` (som bör exkluderas i `.gitignore`), och kan sedan användas i dina kodfiler genom att använda `require`-funktionen.

*    **Byggprocess:** Vi använder också Node för att kunna exekvera [Gulp-kod](../gulp) i vårt projekts byggprocess.

