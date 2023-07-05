/**
 * En js on distingue les types primitif de leurs équivalent objet.
 * quand on appelle une méthode du prototype de string,
 * js convertis implicitement la valeur primitif en l'objet nécessaire.
 * 
 * [!] il y a des difference entre un objet et son equivalent primitif
 *      ex: passage par reference, ...
 *      mais rencontré ces différence est en pratique rare.
 */


const hello = "Hello World";
console.log(`taille de hello`, hello.length);
let result = hello.split(" ")
console.log(`split " " : `, result);
result = hello.split("o")
console.log(`split "o" : `, result);


class CustomString extends String {
    split(separator) {
        const res = super.split(separator).map((str, index, tab) => {
            if (tab.length === index + 1) return str;
            else return str + separator;
        })
        return [super.split(separator),res]
    }

}

const helloCustom = new CustomString("Hello World");
result = helloCustom.split("o")
console.log(`custom split "o" : `, result);

