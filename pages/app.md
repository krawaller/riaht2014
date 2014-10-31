Som ni förhoppningsvis sett vid det här laget så handlar kursen i huvudsak om ett **projekt** där ni skall utveckla en JavaScript-applikation. Vad är det då ni ska bygga egentligen?

###Krav

För det första så är ni tvungna att använda vissa verktyg, såsom beskrivna under kursstegen:

1.   Projekten ska publiceras via [Github Pages](../git-github), och måste vara körbara i sin helhet därifrån.
2.   Projektet skall [kompileras för distribution](../bygg) via [Gulp](../gulp)
3.   Projektet måste på något vis **hantera &amp; spara data från användaren**. Det kan ej bara handla om statisk bearbetning (typ miniräknare), utan måste *keep some state* i någon mening. Till detta använder vi [Firebase](firebase).
4.   Projektet måste byggas med [React](../react). Plugins och övriga byggstenar väljs fritt!
5.   Projektet ska ha en [genererad dokumentation](../dokumentation)
6.   Projektet ska ha en [testsvit med Jest](../jest) (som det dock är frivilligt att sedan uppdatera)
7.   Projektet ska använda [JSHint](../jshint).


###Aspekter

Kursens titel, *RIA-utveckling med JavaScript*, är väldigt bred, så ock fokuset vad gäller era projekt. Detta är dock vad vi vill att ni skall fokusera på, och vad vi fokuserar på i vår bedömning:

*    **Utvecklingsmiljö och beståndsdelar:** Rätt verktyg till rätt uppgift blir allt mer viktigt ju mer avancerad uppgifter är. Därför skall vi lägga tid på efterforskning, göra genomtänkta val, och bemästra de verktyg vi väljer att använda.
*    **Kodorganisering:** Detta är kanske det mest primära. Just att organisera JavaScriptprojekt är riktigt lurigt, så en stor del av handledningen kommer handla om att hjälpa er på den fronten.
*    **Datahantering**: Beroende på vad ni väljer att bygga så kommer detta kräva olika mycket kärlek. Oavsett vad så är er datamodell en del av det vi bedömer i slutändan!
*    **Användargränssnitt:** Kursen är väldigt tekniskt inriktad, så vi kommer inte kräva några estetiska mästerverk. Det är dock inte en ursäkt för ett dåligt användargränssnitt!


###Projektförslag

Nog prokrastrinerat - vad skall ni bygga? Som sagt väljer ni själva, men här följer några förslag som kan få in era tankar på rätt spår:

*    En **Projekthanteringsapp** skulle kunna funka. Vi har olika dataobjekt (projekt, delmål, milstolpar, personer) med relationer emellan, som erbjuder flera möjliga komplexitetsnivåer.
*    Kanske en enkel **personaldatabas**? Varje person har en given person som chef (förutom chefchefen såklart), vilket ger bra utrymme för relationer, listor och vyer av enskilda personer.
*    Varför inte en liten **Bank** eller motsvarande? Konton och transaktioner ger kul möjligheter till funktionalitet.
*    Enkla (observera *enkla*) **spel** skulle också kunna fungera, såsom Blackjack eller Roulette. Spel brukar dock innebära mer jobb med kontexten än vad man först kan tro, så, tänk er för före! Å andra sidan har React visat sig vara en bra matchning för att sätta ihop dylika appar.
*    Nej, ni får **<span style='color:red;'>inte</span>** bygga en TODO-applikation. :)

En sak vi vill trycka på är återigen att **projektet inte kommer vara särskilt stort i omfattning**, eftersom såpass mycket fokus läggs på processen. Tjuvkika gärna på tidigare års projekt så förstår ni nog - de flesta är ganska "enkla", och vid en första anblick kan de se ut som att de knappast tagit 20*5 timmar att utveckla. Men det beror som sagt på att de studerande parallellt har forskat, bloggat, diskuterat och omprövat. Vilket också ni skall göra! Håll därför ner ambitionsnivån i projektplanerandet!
