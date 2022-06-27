// Objecten van deze klasse stellen één vraag van de quiz voor.
export default class Vraag {
    constructor(id, vraag, mogelijkeAntwoorden, correctAntwoordIndex) {
        this._id = id;
        this._vraag = vraag;
        this._mogelijkeAntwoorden = mogelijkeAntwoorden;
        this._correctAntwoordIndex = correctAntwoordIndex;
    } 

    // Elke vraag heeft een unieke ID.
    // Deze ID is van belang want het wordt gebruikt in Antwoord.
    get id() {
        return this._id;
    }

    // De eigenlijke vraag.
    get vraag() {
        return this._vraag;
    }

    // Hierin worden dan de 4 mogelijke antwoorden opgelijst.
    // Slechts één van deze antwoorden is juist.
    get mogelijkeAntwoorden() {
        return this._mogelijkeAntwoorden;
    }

    // Index van het juiste antwoord. Dus: 0, 1, 2, ... mogelijkeAntwoorden.length-1.
    get correctAntwoordIndex() {
        return this._correctAntwoordIndex;
    }

    // JSON.stringify zal standaard deze methode aanroepen, alvoerens om te zetten naar een JSON string.
    // Op deze manier zorgen we ervoor dat er geen _ in de propertynamen zitten.
    // (!) Bemerk ook dat we private property _correctAntwoordIndex niet naar JSON wordt overgezet: 
    //     dat willen we namelijk niet naar de browser sturen!
    toJSON() {
        return {
            id: this._id,
            vraag: this._vraag,
            mogelijkeAntwoorden: this._mogelijkeAntwoorden
            // correctAntwoordIndex: this._correctAntwoordIndex
        };
    }
}