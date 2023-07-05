const h1 = document.querySelector("h1");

//on click ne peut être assigné que des référence a des fonctions.
h1.onclick = () => {
    console.log(`Dans handleClick`);
};

console.log(`h1 :`, h1);
console.log(`h1.onclick :`, h1.onclick);


const digiLink = document.querySelector("a");

digiLink.onClick = (event) => {
    //prévient le traitement par défaut (ici le suivi du lien)
    event.preventDefault();
    console.log(`Dans DigiLink`);

    console.log("event.target", event.target);//donne l'élément qui a trigger l'event 
};


/**
 * [!] cette méthode ne peut contenir que une methode par event
 * ce qui peu être problématique
 */

//pour évité ça:
const p = document.querySelector("p");

p.addEventListener("click", (event) => {
    console.log(`event 1`);
});
p.addEventListener("click", (event) => {
    console.log(`event 2`);
});
