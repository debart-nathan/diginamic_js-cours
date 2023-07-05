// fonction anonyme immediate IIFES

// c'est une protection pour bien isolé le code de la fonction.

(function (){
    //les variable ne sont définit que dans la fonction
    var i = 3;
})();
// on ne peut pas accédé a i

//c'est recommender de l'utiliser pour évité 
//les potentiel effets secondaire due aux débordement de scope


/**
 * WARNING :
 */
// test serras assigné le retour de la fonction et non pas une référence a la fonction.
const test =(function (){
    var i = 3;
})();


// test2 pourras accéder a i par un system de closure
const test2 =(function (){
    var i = 3;
    function getI(){
        return i;
    }
    function setI(val){
        i=val;
    }
    return {getI : getI, setI: setI}
})();

console.log(`recup i` , test2.getI());
test2.setI(5);
console.log(`recup i` , test2.getI());