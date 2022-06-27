import Vraag from "../shared/vraag.js";

// TODO: voeg aan onderstaande array nog 20 andere cursus-gerelateerde vragen aan toe.        
const vragen = [
    new Vraag(
        0, // Elke vraag heeft een unieke ID! Best is om te beginnen met 0 en dan steeds met één te verhogen.
        "XHR is de afkorting van ...",  // Dit is de vraag die aan de gebruiker wordt getoond.
        ["XHtmlRev2", "XmlHttpRequest", "XboxHyperloopRecursion", "Geen van bovenstaande"], // Dit zijn de mogelijke antwoorden. 
        1), // En dit is de index van het juiste antwoord. In geval van deze vraag is de index dus 1 (XmlHttpRequest)
    new Vraag(
        1, 
        "De grondlegger van het World Wide Web is ...", 
        ["Linus Torvalds", "Nikola Tesla", "Bill Gates", "Tim Berners-Lee"], 
        3),
];

export default vragen;