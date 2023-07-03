const fruits = [];

fruits.push("Apple","Banana","Apricot");
fruits.sort((fruitA, fruitB) => fruitA.length - fruitB.length);

console.log(fruits);