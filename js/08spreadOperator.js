{
    const bob = {
        "firstname": "Bob",
        "lastname": "Dylan",
    }

    const boby = bob; // copie par référence

    boby.sex = "male"
    //boby est une copie de bob donc tous deux on sex:"male"
    console.log(`bob`, bob);
    console.log(`boby`, boby);
}
{
    //pour faire une copie indépendante de bob

    const bob = {
        "firstname": "Bob",
        "lastname": "Dylan",
    }

    const boby = { ...bob };//copie par valeur

    boby.sex = "male"

    //seul boby auras sex:"male"
    console.log(`bob`, bob);
    console.log(`boby`, boby);
}
{
    // on peu aussi ajouté des propriété directement dans le spread
    const bob = {
        "firstname": "Bob",
        "lastname": "Dylan",
    }

    const boby = { ...bob, sex:"male" };
    console.log(`bob`, bob);
    console.log(`boby`, boby);


}