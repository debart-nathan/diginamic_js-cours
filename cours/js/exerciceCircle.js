class Circle{
    constructor(radius, name) {
        
        this.radius=radius;
        this.name = name;

    }
    //pi=3.14; réserve une nouvelle mémoire a chaque instance
    // on doit la metre en propriété de classe
    static pi = 3.14

    //une fonction est automatiquement statique
    area(){
        console.log(`Area of ${this.name} :`, this.pi*this.radius**2);
    }
}
Circle.prototype.pi=3.14;

let c = new Circle(2,"petit_cercle");
let c2 = new Circle(4,"grand_cercle");

c.area();
c2.area();