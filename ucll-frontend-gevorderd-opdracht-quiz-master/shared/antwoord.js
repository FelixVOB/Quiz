// Objecten van deze klasse stellen één antwoord van de speler voor. 
export default class Antwoord {
    constructor(vraagId, gekozenAntwoordIndex) {
        this._vraagId = vraagId;
        this._gekozenAntwoordIndex = gekozenAntwoordIndex;
    }

    // ID van de vraag waarvoor dit een antwoord van de speler is.
    get vraagId() {
        return this._vraagId;
    }

    // Index van het gekozen antwoord (dus 0, 1, 2 of 3).
    get gekozenAntwoordIndex() {
        return this._gekozenAntwoordIndex;
    }

    // JSON.stringify zal standaard deze methode aanroepen, alvoerens om te zetten naar een JSON string.
    // Op deze manier zorgen we ervoor dat er geen _ in de propertynamen zitten.
    toJSON() {
        return {
            vraagId: this._vraagId,
            gekozenAntwoordIndex: this._gekozenAntwoordIndex
        };
    }
}