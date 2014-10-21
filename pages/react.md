
###Vad är React

[React](http://facebook.github.io/react/) är Facebooks bibliotek för att bygga vykomponenter. Approachen liknar [Web Components](http://webcomponents.org/) (och därmed [Polymer](https://www.polymer-project.org/)), dvs grundidén är att istället för att dela upp sin kod i tekniker (html-css-javascript) så delar man upp den i komponenter. React är dessutom kryddat med ett antal andra bra idéer:

*    Tack vare "shadow DOM" så är React oerhört snabbt. Du interagerar (nästan) aldrig direkt med DOM:en, utan React genererar i bakgrunden de uppdateringar som behövs.
*    Du definierar endast en initial rendering av en komponent. Så fort den på något sätt behöver uppdateras så renderas den om på nytt, vilket tack vare ovanstående inte blir ineffektivt.
*    Genom att tydligt skilja på `properties` (data som komponenten får från sin förälder) och `state` (komponentens egen data som kan förändras över tid) så blir strukturen både tydlig och enkel.
*    Tack vare JSX-syntaxen så kan vi tydliggöra tagg-strukturen i koden, utan att för den skull behöva gå helt över till html-land och bappa med Handlebars eller likande templatingsystem.


###React i kursen

Det är helt obligatoriskt att använda React till kursens applikationsbygge. Huruvida du vill använda ytterligare ramverk bredvid är upp till dig, men min rekommendation är att hålla det hela enkelt. Man klarar sig långt på endast React, framför allt om du kompletterar med någon plugin (se nedan).

Poängen är egentligen inte att lära er just React (även om det är ett väldigt intressant bibliotek), utan att React ändå är såpass litet att det lämnar kodorganisatoriska frågeställningar till dig. Vilket normalt kan ses som en nackdel, men här i kursen är det precis dylika funderingar vi vill fördjupa oss i!


###Resurser

Det är inte svårt att hitta resurser om React, men här kommer några rekommendationer:

*    Facebook har utmärkta tutorials på sin [Getting Started-sida](http://facebook.github.io/react/docs/getting-started.html).
*    Tutsplus guide [Intro to the React Framework](http://code.tutsplus.com/tutorials/intro-to-the-react-framework--net-35660) är riktigt bra.
*    Egghead har en [utmärkt videoserie](https://egghead.io/series/react-fundamentals) där första delen är gratis.

###Plugins

Att använda plugins är helt frivilligt. Det finns en hel uppsjö, men här är tre som jag är väldigt förtjust i:

*    En riktigt läcker och stabil plugin för att hantera routing är [React Router](https://github.com/rackt/react-router), som det varmt rekommenderas att du använder i kursen. Om någon av er lekt med [Ember](http://emberjs.com/) så kommer ni känna igen er i hur det är uppbyggt.
*    Även [Reflux](https://github.com/spoike/refluxjs) rekommenderas. Reflux gör det enkelt att hantera events och strukturera koden, och tjänar som en smidigare version av Facebook's Flux.
*    För den modige som är biten av funktionell programmering så är [React Cursor](https://github.com/dustingetz/react-cursor) också potentiellt en väldigt kraftfull kompis!