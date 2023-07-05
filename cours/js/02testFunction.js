/**
 * 
 * @param {string} name
 * @returns void 
 */
function hello(name){
    console.log(`hello ${name}`);
}


//appel de la fonction avec un arguments
hello('bob')

/**
 * assignment variable
 * 
 */

const test = hello('bob');// assignation du retour de la fonction

console.log(`result : ${test}`);// print undefined


const test2 = hello; // assigne une référence à hello (alias)

test2('jack');// afficheras hello jack

/*
    c'est une copie par référence,
    car function est un type évolué et non primitif.
*/

/**
 * Param optionnel
 * 
 */


/**
 * 
 * @param {string} name 
 */
function hello2(name = "Bob") {
    console.log(`hello ${name}`);
}

hello2()//print "hello Bob"
hello2("jack")//print "hello jack"


/**
 * argument operator
 * 
 */

/**
 * 
 * @param  {... string} names  //array of string
 */
function hello3(... names){
    console.log(`hello `, names);
    names.foreach(name =>{
        console.log("hello ",name)
    })
}


/*
 * hoisting
 */

//function hoist declaration au début de la scope

//no hoist
let hello4 = (name)=>{
    console.log(`hello ` ,name);
}