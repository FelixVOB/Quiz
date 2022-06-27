Zorg ervoor dat [Node](https://nodejs.org/en/download/) geïnstalleerd is.  
Je kan snel starten door een terminal te openen in deze directory en vervolgens ```npm run start``` uit te voeren. 
De API van de webapplicatie is dan beschikbaar op [http://localhost:3000/api/quiz](http://localhost:3000/api/quiz).

In de map /postman kan je een 'Postman collection' terugvinden met GET en POST voorbeelden.
Deze collection kan je importeren in Postman om de API te testen.

In principe is de API vrij eenvoudig: 
* Een GET request naar http://localhost:3000/api/quiz geeft een JSON array terug met alle vragen.
* Een POST request naar http://localhost:3000/api/quiz (met in de body een JSON array waarin alle antwoorden van de gebruiker staan) geeft een object met een score property terug. Deze score is een percentage (van 0 tot 100).

Meer informatie staat ook als commentaar in de code van /server/app.js, /server/vragen.js en de classes in /shared/*.js.