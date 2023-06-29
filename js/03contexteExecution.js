let i = 1;
function a(){
    //garder la déclaration des variables le plus tôt possible

    // pas accès : l, k , j
    // accès: a et i
    let j = 2;
    b();
    //hoisting
    function b(){
        let l = 4
        {
            let k = 3;
            console.log(`k`, k);
            console.log(`l`, l);
            console.log(`b`, b);
            console.log(`j`, j);
            console.log(`i `, i);
        }
    }

    //pas accès: l, k
    // accès: a , i , j 
}
//pas accès : k, b, l, j
// accès : a , i
a()