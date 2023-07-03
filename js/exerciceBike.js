class Bike{
    #brand;
    #model;
    constructor(brand,model,weight){
       
        this.brand=brand;
        this.model=model;
        this.weight=weight;
    }

    set brand(brand){
        console.log(`set brand`);
        this.#brand=brand;
    }
    get brand(){
        console.log(`get brand`);
        return this.#brand
    }

    set model(model){
        console.log(`set model`);
        this.#model=model;
    }
    get model(){
        console.log(`get model`);
        return this.#model
    }

    pedal() {
        console.log(`Je pédale !`);
    }
}

class Tandem extends Bike{
    static seat_number=2;

    pedal(){
        console.log(`Nous sommes 2 à pédaler !`);
    }
}


const bike = new Bike("super","ultra",3)
const tandem = new Tandem("superT","ultraT",4)

console.log(`bike model`, bike.model );
console.log(`bike brand`, bike.brand );
bike.brand="super2"
console.log(`bike brand`, bike.brand );

bike.pedal();
console.log(`tandem model`, tandem.model );
bike.moddel="superT2"
console.log(`tandem model`, tandem.model );
console.log(`tandem brand`, tandem.brand );
tandem.pedal();
