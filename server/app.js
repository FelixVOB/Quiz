// Dit is de lijst met de vragen van de quiz.
import vragen from "./vragen.js";
import QuizResultaat from "../shared/quiz-resultaat.js";

import express from "express";
const app = express();

app.use(express.static('../client/public'));
app.use(express.json());

// HTTP GET /api/quiz
// ******************
// Deze methode geeft alle vragen terug als een JSON array.
// Op te roepen via een HTTP GET call naar /api/quiz.
app.get("/api/quiz", (req, res) => {
    // De vragen-array wordt omgezet naar een JSON array en teruggestuurd naar de browser.
    // Opgelet: aangezien de objecten in de vragen-array van de class 'Vraag' afstammen implementeren die een toJSON() methode.
    // Express zal onderliggend gebruik maken van JSON.stringify(). En JSON.stringify() zal op zijn beurt nagaan of een object een toJSON() methode heeft.
    // Zoja, dan wordt deze aangeroepen. In het geval van Vraag hebben we de toJSON() zo gemaakt, zodat de juiste antwoord indexen niet mee worden gestuurd.
    // Zo kan een speler niet achterhalen wat de juiste antwoorden zijn door de browser developer tools te openen.
    res.json(vragen);

    console.log(`${vragen.length} vragen naar browser teruggestuurd.`);
});

// HTTP POST /api/quiz
// *******************
// Deze methode ontvangt alle antwoorden van de speler in één keer (= nadat de speler alle antwoorden heeft ingevuld).
// Je zal dus in de browser elk antwoord moeten bijhouden (vb. in een JavaScript array) en vervolgens de volledige array omzetten naar JSON.
// Vervolgens moet je een HTTP POST sturen naar /api/quiz met een JSON array in de body.
// De array moet er als volgt uit zien:
// [{"vraagId": 0, "gekozenAntwoordIndex": 0}, {"vraagId": 1, "gekozenAntwoordIndex": 3}, etc ...].
// Deze methode zal vervolgens de array met antwoorden overlopen en een score berekenen.
// Uiteindelijk wordt een object teruggegeven met een 'score' property. Daarin staat de score in percenten.
app.post("/api/quiz", (req, res) => {
    console.log("Antwoorden van browser ontvangen: " + JSON.stringify(req.body));

    // Overlopen van elk antwoord en nagaan of het correct is of niet.
    let aantalJuisteAntwoorden = 0;
    for (let i = 0; i < req.body.length; i++) {
        let antwoord = req.body[i];
        // In het antwoord zit ook de id van de vraag -> hiermee wordt de overeenkomstige vraag uit de vragen-array opgehaald.
        let overeenkomstigeVraag = vragen.filter(v => v.id === antwoord.vraagId)[0]; // filter geeft een array terug ... in ons geval gaat het telkens om een array van lengte 1.
        // Is de index van het gegeven antwoord === aan de index van het juiste antwoord?
        if (antwoord.gekozenAntwoordIndex === overeenkomstigeVraag.correctAntwoordIndex) {
            aantalJuisteAntwoorden++;
        }
    }

    // Berekening van het percentage, en het resultaat-object.
    let scorePercentage = (aantalJuisteAntwoorden / vragen.length) * 100;
    let resultaat = new QuizResultaat(scorePercentage);

    // Het resultaat wordt nu naar JSON omgezet en teruggestuurd naar de browser.
    res.json(resultaat);

    console.log(`Een score van ${resultaat.score} werd teruggestuurd naar de browser.`);
});

// Starten van de server
app.listen(3000, () => {
    console.log("Server is listening...");
});