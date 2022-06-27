import Vraag from "../shared/vraag.js";

// TODO: voeg aan onderstaande array nog 20 andere cursus-gerelateerde vragen aan toe.        
const vragen = [
    new Vraag(
        0, // Elke vraag heeft een unieke ID! Best is om te beginnen met 0 en dan steeds met één te verhogen.
        "XHR is de afkorting van ...",  // Dit is de vraag die aan de gebruiker wordt getoond.
        ["XHtmlRev2", "XmlHttpRequest", "XboxHyperloopRecursion", "Geen van allemaal"], // Dit zijn de mogelijke antwoorden. 
        1), // En dit is de index van het juiste antwoord. In geval van deze vraag is de index dus 1 (XmlHttpRequest)
    new Vraag(
        1, 
        "De grondlegger van het World Wide Web is ...", 
        ["Linus Torvalds", "Nikola Tesla", "Bill Gates", "Tim Berners-Lee"], 
        3),
    new Vraag(
        2,             
        "Html staat voor...", 
        ["Hypermark Language", "Hypermix language", "Hypertension Language", "Hypertext Markup Language"], 
        3),
        new Vraag(
        3,             
        "Welke tag word er gebruikt in de HTML om de javascript code te linken?", 
        ["script", "sp", "link", "javascript"], 
        0),
        new Vraag(
        4,             
        "Hoe instaleer je de Node.js express module?", 
        ["node install express", "npm install express", "install express", "Geen van allemaal"], 
        1),
        new Vraag(
        5,             
        "In welk jaar was HTML uitgekomen?", 
        ["1990", "2030", "1989", "1923"], 
        0),
        new Vraag(
        6,             
        "Waar staat npm voor?", 
        ["Node Project Manager", "New Project Manager", "New Package Manager", "Node Package Manager"], 
        3),
        new Vraag(
        7,             
        "Welk van de volgende tags creëert de grootste heading?", 
        ["h", "h7", "h4", "h1"], 
        3),
        new Vraag(
        8,             
        "Wat is de originele naam van Javascript?", 
        ["Javascript", "Mocha", "LiveScript", "Java"], 
        1),
        new Vraag(
        9,             
        "Welke is correct (CSS)?", 
        [".div {}", ".div ()", ".div []", ".div ({})"], 
        0),
        new Vraag(
        10,             
        "CSS staat voor...", 
        ["Color and style sheets", "Geen van allemaal", "Cascading style sheets", "Cool stuff styling"], 
        2),
        new Vraag(
        11,             
        "Hoeveel columns zijn er in een Bootstrap grid?", 
        ["10", "5", "7", "12"], 
        3),
        new Vraag(
        12,             
        "Hoe kan een datatype gedeclareerd worden als een constant type in JS?", 
        ["const", "constant", "var", "let"], 
        0),
        new Vraag(
        13,             
        "Het HTML attribuut gebruikt om de internal stylesheet te definieren is...", 
        ["inline", "script", "link", "style"], 
        3),
        new Vraag(
        14,             
        "Welke van de volgende is geen Javascript framework?", 
        ["Node", "Cassandra", "Vue", "React"], 
        1),
        new Vraag(
        15,             
        "De CSS eigenschap die gebruikt wordt om de tekst vet te maken is...", 
        ["font-weight : bold", "weight: bold", "font: bold", "style: bold"], 
        0),
        new Vraag(
        16,             
        "Wat is de juiste volgorde van HTML-tags om een webpagina te beginnen?", 
        ["Head, Title, HTML", "Title, Head, HTML", "HTML, Head, Title", "Title, HTML, Head"], 
        2),
        new Vraag(
        17,             
        "Welk sleutelwoord wordt gebruikt om een asynchrone functie in Javascript te declareren?", 
        ["asynchrone", "setTimeout", "await", "async"], 
        3),
        new Vraag(
        18,             
        "Hoe selecteer ik de elementen met de klassenaam voorbeeld? (CSS)", 
        [".voorbeeld", "#voorbeeld", "Class voorbeeld", "voorbeeld"], 
        0),
        new Vraag(
        19,             
        "Wat is de juiste HTML-tag voor het invoegen van een line-break?", 
        ["Lb", "br", "break", "ln-br"], 
        1),
];

export default vragen;