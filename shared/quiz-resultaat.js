// Resultaat van het spel.
export default class QuizResultaat {
    constructor(score) {
        this._score = score;
    }

    // De score wordt als percentage teruggegeven (een getal tussen 0 en 100).
    get score() {
        return this._score;
    }

    // JSON.stringify zal standaard deze methode aanroepen, alvoerens om te zetten naar een JSON string.
    // Op deze manier zorgen we ervoor dat er geen _ in de propertynamen zitten.
    toJSON() {
        return {
            score: this._score
        };
    }
}