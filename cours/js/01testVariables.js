// déclaration avec le mots clef let
/* typage dynamique
    type primitifs: number, string, boolean, null, undefined


    Rules for variable name:

        Début du nom de la variable : Les noms des variables peuvent commencer par n'importe quel lettre unicode ou underscore ("_") ou dollar ($).
Attention à ne pas utiliser de nombre ou le "-" qui serait compris comme l'opérateur arithmétique "moins".
Les caractères suivants doivent être des lettres unicode ou underscore ("_") ou dollar ($) 
*/
let i = 12;

// afficher variable

/*  
    console : objet
    log() : fonction, propriété de console

*/
console.log(`i`, i);


//get type of var
console.log(`type de i : `, typeof (i));



/** 
*   SCOPE 
*   
*/

// une scope
{
    //j est juste définis dans une scope
    let j = true;





}
/* j non définis  
    console.log(`j`, j) retourneras une erreur
*/

// window demande l'execution dans un navigateur
window;

// var est function_scope
{
    // k est global
    var k = true;

    function fubar() {
        // fonctionneras car var hoist la déclaration (pas la valeur) au début de la scope
        console.log(`k : `, k);
        //k est limité a fubar
        var l = true;
    }
}
//WARNING: ne pas utiliser var


/** 
*   Constante
*   
*/

const j = 12;
// j=1; forbidden

const c = { name: "toto"};
c.name = "bob";
console.log(`c : `,c);


/**
 *  Copie
 * 
 */

//valeur:
let a = 3;
let b = a; // a primitif donc copie par valeur
a=5;
console.log(`copier valeur b: ${b}  a:${a}`);

//ref
a = { number : 3};
b= a; // a n'est pas primitif donc copie par ref
a.number =5;
console.log(`copier ref b: ${b}  a:${a}`);