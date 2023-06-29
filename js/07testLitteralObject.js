//ils ont un format similaire au json
{
    const bob = {
        "firstname": "Bob",
        "lastname": "Dylan",
        "introduceMySelf": () => { //take space for each instance
            console.log(`Bonjour, je m'appelle ${this.firstname} ${this.lastname}`);
        }
    }

    console.log('bob', bob)
    bob.introduceMySelf();
}

{
    const bob = {
        "firstname": "Bob",
        "lastname": "Dylan",
        "introduceMySelf": introduceMySelf
    }
    function introduceMySelf() {
        console.log(this);
        console.log(`Bonjour, je m'appelle ${this.firstname} ${this.lastname}`);
    }


    //this return bob
    bob.introduceMySelf()
    //this return objet global
    introduceMySelf()
}

{
    const introduceMySelf = () => {
        console.log(this);
        console.log(`Bonjour, je m'appelle ${this.firstname} ${this.lastname}`);
    }
    const bob = {
        "firstname": "Bob",
        "lastname": "Dylan",
        "introduceMySelf": introduceMySelf
    }

    //this return objet global
    bob.introduceMySelf()
    //this return objet global
    introduceMySelf()
}


{
    const bob = {
        "firstname": "Bob",
        "lastname": "Dylan",
        "introduceMySelf": introduceMySelf
    }
    Object.prototype.introduceMySelf=function(){
        console.log(this);
        console.log(`Bonjour, je m'appelle ${this.firstname} ${this.lastname}`);
    }
    bob.introduceMySelf() //this return bob
    

    //[!] tous les objets pour accédé a introduce myself
    // c'est donc a évité.
}



//conclusion il est préférable de ne pas utilisé des littéraux pour stocker des méthodes