/**
 *  Fonction constructeur
 * 
 */

/**
 * 
 * @param {string} brand 
 * @param {string} model 
 * @param {number} weight
 * @returns Computer // renvoi une instance de l'objet
 */
function Computer(brand, model, weight) {
    //this dans une fonction constructeur 
    //réfère a l'instance courante de l'objet
    this.brand = brand;
    this.model = model;
    this.weight = weight;
    console.log(`this : `, this)

    // propriété de type fonction : méthode
    this.askRepair = function(){
        console.log(`Entendu nous avons bien pris en compte votre demande de réparation pour votre ${this.model} de la marque ${this.brand}`);
    }
}

// new Computer créer une instance de type Computer

const c1 = new Computer('dell', 'Optiplex', 5);
console.log(`Computer c1 :`,c1);

const c2 = new Computer('Lenovo', 'T500', 5);
console.log(`Computer c2 :`,c2);

c1.askRepair()


/**
 * Prototype
 * 
 */


//permets d'ajouté des propriété de n'importe quel type via le prototype


Computer.prototype.askRepair2= function(){
    console.log(`Entendu nous avons bien pris en compte votre demande de réparation pour votre ${this.model} de la marque ${this.brand}`);
};

c2.askRepair2

// Attention propriété sont partagé au travers toutes les instance
Computer.prototype,os = "linux";
console.log(`os de c1`, c1.os);
console.log(`os de c2`, c2.os);


/**
 * Classes
 * 
 */

// c'est une syntaxe alternative jugée plus clair
// qui est plus proche des syntaxe trouvé dans d'autre languages
// ce code est donc équivalent au code précédent.
class Computer3 {
    constructor(brand, model, weight) {

        this.brand = brand;
        this.model = model;
        this.weight = weight;
    }

    askRepair(){
        console.log(`Entendu nous avons bien pris en compte votre demande de réparation pour votre ${this.model} de la marque ${this.brand}`);
    }
}


/**
 * Héritage
 * 
 */

//On peut utiliser extends pour copier 
//toutes les propriété d'une class dans une autre

//il peut être utilisé pour créer des alias
class Co extends Computer3 {}

//Ou pour étendre les fonctionnalité d'un classe
class Laptop extends Computer3{

    //on peu modifier le constructeur
    constructor(brand, model, weight, autonomy){
        //on peu accédé au constructeur de la classe hérité avec la fonction super;
        super(brand,model,weight)
        this.autonomy=autonomy
    }
    //on peu modifier une méthode
    askRepair(){
        console.log(`Entendu nous avons bien pris en compte votre demande de réparation pour votre Laptop ${this.model} de la marque ${this.brand}`);
    }

    changeBattery(){
        console.log(`Entendu nous avons bien pris en compte votre demande de changement de batterie pour votre Laptop ${this.model} de la marque ${this.brand}`);

    }

}

const l = new Laptop('Lenovo', 'T500', 5,3)

//on remarqueras que on peu utiliser les même appels qu'avant pour accédé au method hérité
l.askRepair();
l.askRepair2();


/**
 *  Privée
 */

//Est utilisé pour limité l’accès (ou les méthodes d'accès) de l'utilisateur au propriété


class Circle{
    #radius
    constructor(radius, name) {
        
        this.#radius=radius;
        this.name = name;

    }
    static pi = 3.14

    //est utiliser pour récupéré la valeur de radius d'une certaine manière
    get radius(){
        console.log(`dans le getter de radius`);
        return this.#radius
    }

    //est utiliser pour assigné une valeur à une propriété d'une certaine manière
    set radius(nRadius){
        console.log(`dans le setter de radius`);
        this.#radius = nRadius
    }

    area(){
        console.log(`Area of ${this.name} :`, this.pi*this.radius**2);
    }
}

const c = new Circle(2,"circle")

// l'appel des setter et getter ce fait comme si on voulais récupéré ou assigné une propriété non privé
c.radius=2;
console.log(c.radius);


