const fruits = ["Cerise", "Pomme"]
console.log(`fruits : `, fruits);

//js est faiblement typer 
//donc on peu avoir plusieurs types 
//dans un même tableaux

fruits.push("Abricot");

console.log(`fruits + Abricot : `, fruits);

//callBack : un paramètre de fonction de type fonction

/** higher order function :
 *  fonction qui prend une fonction en paramètre 
 * ou fonction qui return une fonction
 */
fruits.forEach(fruit => console.log(`fruit : ${fruit}`));

const people = [
    { nama: "Dylan", age: 70 },
    { nama: "Marley", age: 85 },
    { nama: "Armstrong", age: 99 }
]

const armstrongI = people.findIndex(person => (person.name == "Armstrong"));

console.log(`Armstrong index : `, armstrongI);

//Je veux créer un nouveau tableau a partir de "fruits"
//Chaque élément de ce nouveau tableau sera entouré de "<li></li>"

const fruitsLi = fruits.map(fruit => `<li>${fruit}</li>`);

console.log(fruitsLi);


const array1 = [7, 1, 2, 3, 4];

//accumulator can be init with second arg of reduce
//it's optional and if not initialized it use array[0] and skip the first iter;
let result = array1.reduce(((accumulator, currentValue) => currentValue > accumulator ? currentValue : accumulator), 0);

console.log(result);//7

result = array1.reduce(
    (accumulator, currentValue) => currentValue > accumulator ? currentValue : accumulator,
    10
);

console.log(result); 10

//créer une array avec les valeur inférieur a 3 de array1 dans leurs ordre d’apparition
result = array1.reduce(
    (accumulator, currentValue) => {
        if (currentValue < 3) {
            accumulator.push(currentValue);
        }
        return accumulator;
    }, [])

console.log(result);//[1,2]

//y a t'il une valeur supérieur a 3
result = array1.reduce((accumulator, currentValue) => accumulator || (currentValue > 3), false);

console.log(result);//true


//moyenne
result =array1.reduce((accumulator, currentValue) => (accumulator+ currentValue)/2);
console.log(result);//