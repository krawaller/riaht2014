I kursen kommer vi använda Git som versionshanteringssystem, och Github som både kollaborerings- och publiceringsplattform. Förhoppningsvis är du vid det här laget bekant med både Git och Github, men behöver du en refresher så rekommenderas en titt på [Skolans Git-intro](https://coursepress.lnu.se/info/manual/kom-igang-med-github/).

Med det sagt, här kommer en snabbinstruktion i punktform över kursens användande:

*    Installera Git på din dator (för att testa om du redan har det kan du skriva `git --version` i terminalen)
*    Registrera dig på Github, om du inte redan gjort det.
*    Installera ett grafiskt gränssnitt om du inte vill jobba enbart från terminalen, förslagsvis [Github for Mac](https://mac.github.com) eller [Github for Windows](https://windows.github.com).
*    Skapa ett repositorium för kursen. Repot måste vara publikt.
*    Skapa en mapp på din dator för kursprojektet.
*    Navigera till mappen och kör kommandot `git init`
*    Skapa och växla till en ny branch med namn gh-pages genom att köra `git checkout -b "gh-pages"`
*    Koppla mappen mot ditt repo på github genom att köra `git remote add origin git@github.com:<gituser>/<reponame>.git`, där `<gituser>` är ditt användarnamn och `<reponame>` namnet på repot du skapade.

I och med att vi använder den "magiska" branchen gh-pages så finns nu appen publicerad på `http://<gituser>.github.io/<reponame>`.

Under resans gång kommer du forka andras repon och göra ändringar där, och också ta emot pull-requests mot ditt eget repo.

Det är helt ok att bara köra "vaniljanvändning" av Git och Github, dvs hela tiden jobba i samma branch och committa och pusha dina ändringar allt eftersom. Du kan också plocka bonuspoäng genom en mer detaljerad användning;

*    Skapa feature-specifika brancher där du jobbar på ny funktionalitet, som du sedan mergar tillbaka in i gh-pages först när du är klar
*    Använd issues på Github för projektstyrning (vilket också gör det lättare för andra att hjälpa till)
*    Använd labels på dina issues och pull-requests
*    Assigna issues till olika användare
*    Sortera issues och commits med milestones</reponame></gituser></reponame></gituser></reponame></gituser>